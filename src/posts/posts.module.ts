import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsMapperService } from './posts-mapper.service';
import { HttpModule } from '@nestjs/axios/dist/http.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsMapperService],
  imports: [HttpModule],
})
export class PostsModule {}
