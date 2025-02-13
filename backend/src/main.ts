import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      // origin: process.env.NODE_ENV === 'development' ? '*' : process.env.FRONTEND_URL,
    },
    rawBody: true,
    logger: ['error', 'warn', 'log', 'debug', 'verbose'],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // app.useGlobalFilters(
  //   new AllExceptionsFilter()
  // );

  if (process.env.NODE_ENV === 'development') {
    const configSwagger = new DocumentBuilder()
      .setTitle('DEFAULT APP NAME')
      .setDescription('DEFAULT DESCRIPTION')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, configSwagger);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(process.env.PORT || '5000', '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
