import { Injectable } from '@nestjs/common';
import { PostsDto } from './posts-dto';
import { Posts } from './posts.interface';

@Injectable()
export class PostsMapperService {
  public static mapRecentPosts(post: Posts[]): PostsDto[] {
    return post.reverse().slice(0, 10).map(PostsMapperService.mapRecentPost);
  }

  public static mapRecentPost(post: Posts): PostsDto {
    return { id: post.id, title: post.title };
  }

  public static mapPost(post: Posts): PostsDto {
    return { id: post.id, title: post.title, body: post.body };
  }
}
