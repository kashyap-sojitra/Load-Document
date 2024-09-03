import { NestFactory } from '@nestjs/core';
import { LoadModule } from './app/load.module';

async function bootstrap() {
  const app = await NestFactory.create(LoadModule);
  await app.listen(3000);
}
bootstrap();
