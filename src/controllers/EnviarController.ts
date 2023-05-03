/**
 * Autor: Felipe Flores
 * Função do módulo: responsável por adicionar as mensagens a fila de envio
 */
import { EnviarBusiness } from 'src/business/EnviarBusiness';
import { MensagemGet } from 'src/models/MensagemGet';
import { MensagemPost } from 'src/models/MensagemPost';
import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import {
  Configurations,
  ConfigurationService,
} from 'src/helpers/ConfigurationService';

@Controller('enviar')
export class EnviarController {
  private configs: Configurations;

  constructor(
    private enviarBusiness: EnviarBusiness,
    private configurationService: ConfigurationService,
  ) {
    this.configs = this.configurationService.configs;
  }

  @Get()
  mensagemGet(@Query() mensagem: MensagemGet) {
    console.log(mensagem, this.configs);
  }

  @Post()
  mensagemPost(@Body() mensagemPost: MensagemPost) {
    console.log(mensagemPost, this.configs);
  }
}
