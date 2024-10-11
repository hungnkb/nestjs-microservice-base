import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AUTH_PACKAGE_NAME } from '@app/common';
import { ReflectionService } from '@grpc/reflection';
import { AppModule } from 'apps/api-gateway/src/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);
  console.log(configService.get('services.auth'));
  
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
        url: configService.get('services.auth.url'),
      },
    },
  );
  await app.listen();
  await appContext.close();
}
bootstrap();
