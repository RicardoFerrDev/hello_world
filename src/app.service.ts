import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  gethello(): string {
    return 'Hello World !'
  }
  getoBsm(): string {
    return 'Responsabilidade Pessoal,Mentalidade de Crescimento,Orientação ao Futuro,Persistência,Comunicação,Orientação ao Detalhe,Trabalho em Equipe, Gestão do Tempo'
  }
  getObjetivos(): string {
    return 'Por a matéria em dia ,Ficar brabo em NestJS,e começar a semana bem ';
  }
}
