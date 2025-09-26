import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from './jwt/jwt.module';
import { SharedModule } from './shared/shared.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [JwtModule, SharedModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
