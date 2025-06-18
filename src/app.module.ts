import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/feature/user.module';
import { PostModule } from './post/feature/post.module';
@Module({
  imports: [PostModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
