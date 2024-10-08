import { NestFactory } from '@nestjs/core';
import { UserModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: join(__dirname, '../user.proto'),
        package: 'user',
      },
    },
  );
  await app.listen();
}
bootstrap();
