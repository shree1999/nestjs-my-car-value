import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('My Car Value')
    .setDescription('Application for user to find their car value')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, options);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);

  console.log(`Server running on url ${await app.getUrl()}`);
}
bootstrap();
