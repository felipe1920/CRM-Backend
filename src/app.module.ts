import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

// Controller
import { EnviarController } from './controllers/EnviarController';

// Business
import { EnviarBusiness } from './business/EnviarBusiness';

@Module({
  imports: [],
  controllers: [EnviarController],
  providers: [EnviarBusiness],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
