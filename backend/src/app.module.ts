import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asteroid } from './asteroids/domain/entities/asteroid.entity';
import { Favorite } from './asteroids/domain/entities/favorite.entity';
import { Session } from './asteroids/domain/entities/session.entity';
import { environments } from './envs';
import config from './config';
import { MongoDB } from './shared/database/mongo';
import { AsteroidsModule } from './asteroids/asteroids.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      load: [config],
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      entities: [
        /* Lista de entidades de TypeORM */
        Asteroid,
        Favorite,
        Session,
      ],
      url: 'mongodb://root:root@localhost:27017/asteroid_app?authSource=admin',
      autoLoadEntities: true,
      synchronize: true, // Solo utilizar en desarrollo para crear automáticamente las colecciones e índices en MongoDB
    }),
    AsteroidsModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoDB],
})
export class AppModule {}
