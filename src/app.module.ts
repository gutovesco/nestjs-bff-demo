import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { HttpModule } from '@nestjs/axios/dist/http.module';

@Module({
  imports: [HttpModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
