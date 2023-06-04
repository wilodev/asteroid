import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoDB } from './shared/database/mongo';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const mongodb = app.get(MongoDB);
  await mongodb.connect();
  const config = new DocumentBuilder()
    .setTitle('Asteroids Api Example')
    .setDescription('Asteroids API description')
    .setVersion('1.0')
    .addTag('asteroids')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Se configura los cors para desarrollo
  const corsOptions: CorsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  app.enableCors(corsOptions);
  await app.listen(4000);
}
bootstrap();
