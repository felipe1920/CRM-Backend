import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator';
import { Mensagem } from './Mensagem';

export class MensagemPost {
  @IsString()
  @IsNotEmpty()
  usuario: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @Type(() => Mensagem)
  @ValidateNested({ each: true })
  mensagem: Mensagem[];
}
