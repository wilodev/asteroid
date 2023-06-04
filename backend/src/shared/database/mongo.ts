import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Asteroid } from '../../asteroids/domain/entities/asteroid.entity';
import { Favorite } from '../../asteroids/domain/entities/favorite.entity';
import { Session } from '../../asteroids/domain/entities/session.entity';
import { createConnection, Connection } from 'typeorm';

@Injectable()
export class MongoDB {
  private connection: Connection;

  constructor(private configService: ConfigService) {}

  async connect(): Promise<void> {
    this.connection = await createConnection({
      type: 'mongodb',
      url: 'mongodb://root:root@localhost:27017/asteroid_app?authSource=admin',
      entities: [
        /* Lista de entidades de TypeORM */
        Asteroid,
        Session,
        Favorite,
      ],
      synchronize: true, // Solo utilizar en desarrollo para crear automáticamente las colecciones e índices en MongoDB
    });

    console.log('Connected to MongoDB');
  }

  getConnection(): Connection {
    return this.connection;
  }
}
