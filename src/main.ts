import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // 👈 Habilite CORS para o frontend se comunicar
  await app.listen(process.env.PORT || 3000); // 👈 Usa a porta do Vercel ou 3000 local
}
bootstrap();
