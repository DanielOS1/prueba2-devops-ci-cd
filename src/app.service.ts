import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMessage(): string {
    return 'Aplicación de ejemplo con NestJS para Devops y CICD ';
  }
}
