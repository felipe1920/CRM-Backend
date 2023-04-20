import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class Mensagem {
  @IsString({ message: 'idMensagem: Deve ser uma string' })
  @IsNotEmpty({ message: 'idMensagem: Não deve estar vazio' })
  idMensagem: string;

  @IsString({ message: 'mensagem: Deve ser uma string' })
  @IsNotEmpty({ message: 'mensagem: Não deve estar vazio' })
  mensagem: string;

  @IsString({ message: 'destinatario: Deve ser uma string' })
  @IsNotEmpty({ message: 'destinatario: Não deve estar vazio' })
  destinatario: string;

  // @Type(() => Date)
  // @IsDate()
  // @IsOptional()
  // agendamento: Date;
}
