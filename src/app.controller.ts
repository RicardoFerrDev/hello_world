import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello') //endpoint
  getHello(): string {
    return this.appService.gethello();
  }
  @Get('/bsm')
  getoBsm(): string {
    return this.appService.getoBsm();
  }
  @Get('/objetivos')
  getObjetivos(): string {
    return this.appService.getObjetivos();
  }
}
