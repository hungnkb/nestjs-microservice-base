import { Module } from '@nestjs/common';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import { constants } from 'common/constant';
// import { ClientService } from './client/client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: constants.ServicesEnum.USER_SERVICE,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 5001,
        },
      },
      {
        name: constants.ServicesEnum.AUTH_SERVICE,
        transport: Transport.TCP,
        options: {
          host: 'localhost',
          port: 5002,
        },
      },
    ]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
