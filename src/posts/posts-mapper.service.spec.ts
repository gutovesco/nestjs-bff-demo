import { Test, TestingModule } from '@nestjs/testing';
import { PostsMapperService } from './posts-mapper.service';

describe('PostsMapperService', () => {
  let service: PostsMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsMapperService],
    }).compile();

    service = module.get<PostsMapperService>(PostsMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
