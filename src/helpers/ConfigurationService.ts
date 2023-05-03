import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';

export class Configurations {
  projeto: string;
  port: number;
  conexaoId: string;
  conexaoChave: string;
  sistemaHost: string;
}

@Injectable()
export class ConfigurationService {
  private static PROJETO = 'whatsapp-worker';

  configs: Configurations;

  constructor(private configService: ConfigService) {
    this.configs = this.configService.get<Configurations>('configs');
  }

  private static getContentFileConfig(): Configurations | undefined {
    const pathFile = '.config.json';

    if (fs.existsSync(pathFile)) {
      const data = fs.readFileSync(pathFile, 'utf8');

      const config = JSON.parse(data);

      return config;
    }

    return undefined;
  }

  static configFactory(): object {
    const configsFile = ConfigurationService.getContentFileConfig();
    let configs: Configurations;

    if (configsFile) {
      console.log('Source Configuration: (.config.json): ', configsFile);
      configs = configsFile;
    }

    configs.port = configs.port || 15500;

    return {
      configs: configs,
    };
  }
}
