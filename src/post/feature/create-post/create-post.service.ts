import { Transactional } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { Post } from "src/post/domain/post/post.entity";
import { PostRepository } from "src/post/infrastructure/repository/post.repository";

@Injectable()
export class CreatePostService {
    constructor(
        private readonly postRepository: PostRepository,
    ) { }

    @Transactional()
    async create(): Promise<Post> {
        const post = new Post();
        Object.assign(post, {
            user_uuid: '123e4567-e89b-12d3-a456-426614174000',
            description: 'This is a sample post description',
            created_at: new Date(),
        });
        this.postRepository.save(post);
        return post;
    }
}
