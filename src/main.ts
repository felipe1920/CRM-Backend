import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
// helpers
import { ConfigurationService } from './helpers/ConfigurationService';

const listenService = async (app: INestApplication) => {
  const { configs } = await app.resolve(ConfigurationService);

  const { port } = configs;

  const server = await app.listen(port);

  server.setTimeout(3600000);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await listenService(app);
}
bootstrap();
