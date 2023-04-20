/**
 * Autor: Felipe Flores
 * Função do módulo: responsável por adicionar as mensagens a fila de envio
 */
import {
  Body,
  Controller,
  ParseArrayPipe,
  Post,
  HttpStatus,
  Res,
  Get,
  Query,
} from '@nestjs/common';

import { Response } from 'express';
import { EnviarBusiness } from 'src/business/EnviarBusiness';
import { MensagemGet } from 'src/models/MensagemGet';
import { MensagemPost } from 'src/models/MensagemPost';

@Controller('enviar')
export class EnviarController {
  constructor(private enviarBusiness: EnviarBusiness) {}

  @Get()
  mensagemGet(@Query() mensagem: MensagemGet) {
    console.log(mensagem);
  }

  @Post()
  mensagemPost(@Body() mensagemPost: MensagemPost) {
    console.log(mensagemPost);
  }
}
