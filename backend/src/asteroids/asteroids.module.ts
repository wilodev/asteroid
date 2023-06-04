import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsteroidController } from './infrastructure/controllers/asteroid.controller';
import { FavoritesController } from './infrastructure/controllers/favorite.controller';
import { SessionController } from './infrastructure/controllers/session.controller';
import { AsteroidService } from './application/services/asteroid.service';
import { FavoriteService } from './application/services/favorite.service';
import { SessionService } from './application/services/session.service';
import { AsteroidRepository } from './domain/repositories/asteroid.repository';
import { SessionRepository } from './domain/repositories/session.repository';
import { FavoriteRepository } from './domain/repositories/favorite.repository';
import { Asteroid } from './domain/entities/asteroid.entity';
import { Favorite } from './domain/entities/favorite.entity';
import { Session } from './domain/entities/session.entity';
import { ClientMiddleware } from './infrastructure/middleware/clientMiddleware';
@Module({
  imports: [TypeOrmModule.forFeature([Asteroid, Favorite, Session])],
  exports: [TypeOrmModule],
  controllers: [AsteroidController, FavoritesController, SessionController],
  providers: [
    AsteroidService,
    FavoriteService,
    SessionService,
    AsteroidRepository,
    SessionRepository,
    FavoriteRepository,
  ],
})
export class AsteroidsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Aplica el middleware a todas las rutas
    consumer.apply(ClientMiddleware).forRoutes('*');
  }
}
