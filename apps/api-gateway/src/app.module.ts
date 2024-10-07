import { Module } from '@nestjs/common';
import { Client, ClientsModule, Transport } from '@nestjs/microservices';
import { UsersModule } from './users/users.module';
// import { ClientService } from './client/client.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'auth',
        transport: Transport.GRPC,
        options: {
          package: 'auth',
          url: 'localhost:5001',
          protoPath: __dirname + '/../auth.proto',
        },
      },
    ]),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
