import { Module } from '@nestjs/common';
import { PostController } from './create-post.controller';
import { CreatePostService } from './create-post.service';
import { PostMikroOrmModule } from 'src/post/infrastructure/database/mikroorm';
import { PostRepository } from 'src/post/infrastructure/repository/post.repository';

@Module({
    imports: [],
    controllers: [PostController],
    providers: [CreatePostService, PostRepository],
})
export class CreatePostModule { }
