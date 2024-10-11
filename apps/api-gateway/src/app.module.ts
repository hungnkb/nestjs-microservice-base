import {
  AUTH_PACKAGE_NAME,
  AUTH_SERVICE_NAME,
  USER_PACKAGE_NAME,
} from '@app/common';
import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import configService from '@app/config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configService],
    }),
    ClientsModule.register([
      {
        name: AUTH_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5001',
          protoPath: __dirname + '/../auth.proto',
          package: AUTH_PACKAGE_NAME,
        },
      },
      {
        name: AUTH_SERVICE_NAME,
        transport: Transport.GRPC,
        options: {
          url: 'localhost:5002',
          protoPath: __dirname + '/../user.proto',
          package: USER_PACKAGE_NAME,
        },
      },
    ]),
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
