import { ConfigModule } from '@nestjs/config';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// Controller
import { EnviarController } from './controllers/EnviarController';

// Business
import { EnviarBusiness } from './business/EnviarBusiness';

// Helpers
import { ConfigurationService } from './helpers/ConfigurationService';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ConfigurationService.configFactory],
    }),
  ],
  controllers: [EnviarController],
  providers: [EnviarBusiness, ConfigurationService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
