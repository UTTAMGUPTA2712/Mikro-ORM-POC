import { Controller, Post } from "@nestjs/common";
import { CreatePostService } from "./create-post.service";
import { Post as PostEntity } from "src/post/domain/post/post.entity";

@Controller()
export class PostController {
    constructor(private readonly createPostService: CreatePostService) { }

    @Post('posts')
    async createPost(): Promise<PostEntity> {
        return this.createPostService.create();
    }
}