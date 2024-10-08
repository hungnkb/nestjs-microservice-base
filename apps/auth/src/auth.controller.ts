import { Controller } from '@nestjs/common';
import {
  AuthServiceController,
  AuthServiceControllerMethods,
  LoginDto,
  UserLoginResponse,
} from '@app/common';

@Controller()
@AuthServiceControllerMethods()
export class AuthController implements AuthServiceController {
  constructor() {}

  async login(request: LoginDto) {
    return { username: request.username, id: 1 } as UserLoginResponse;
  }
}
