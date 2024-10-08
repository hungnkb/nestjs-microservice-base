import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AUTH_PACKAGE_NAME } from '@app/common';
import { ReflectionService } from '@grpc/reflection';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.GRPC,
      options: {
        protoPath: __dirname + '/../auth.proto',
        package: AUTH_PACKAGE_NAME,
        // onLoadPackageDefinition: (pkg, server) => {
        //   new ReflectionService(pkg).addToServer(server);
        // },
        url: 'localhost:5001',
      },
    },
  );
  await app.listen();
}
bootstrap();
