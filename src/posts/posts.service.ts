import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Posts } from './posts.interface';

@Injectable()
export class PostsService {
  public constructor(private readonly http: HttpService) {}

  public getRecentPosts(): Observable<Posts[]> {
    return this.http
      .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((response) => response.data));
  }

  public getPost(id: string): Observable<Posts> {
    return this.http
      .get<Posts>(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(map((response) => response.data));
  }
}
