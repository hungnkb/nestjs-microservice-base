import { Injectable, OnModuleInit } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Injectable()
export class TestService {
  @GrpcMethod()
  testRequest() {
    console.log('TestService');

    return 'hi';
  }
}
