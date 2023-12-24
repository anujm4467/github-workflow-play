import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    process.exit(1);
    return 'Hello World!';
  }
}
