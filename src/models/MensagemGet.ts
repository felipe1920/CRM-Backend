import { IsNotEmpty, IsString } from 'class-validator';
import { Mensagem } from './Mensagem';

export class MensagemGet extends Mensagem {
  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsString()
  @IsNotEmpty()
  senha: string;
}
