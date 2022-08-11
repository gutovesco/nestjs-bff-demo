import { Controller, Get, Param } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { PostsDto } from './posts-dto';
import { PostsService } from './posts.service';
import { map } from 'rxjs/operators';
import { PostsMapperService } from './posts-mapper.service';

@Controller('posts')
export class PostsController {
  public constructor(private readonly service: PostsService) {}

  @Get()
  public getRecentPosts(): Observable<PostsDto[]> {
    return this.service
      .getRecentPosts()
      .pipe(map(PostsMapperService.mapRecentPosts));
  }

  @Get(':id')
  public getPost(@Param('id') id: string): Observable<PostsDto> {
    return this.service.getPost(id).pipe(map(PostsMapperService.mapPost));
  }
}
