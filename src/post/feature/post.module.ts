import { Module } from "@nestjs/common";
import { CreatePostModule } from "./create-post/create-post.module";
import { PostMikroOrmModule } from "../infrastructure/database/mikroorm";

@Module({
    imports: [PostMikroOrmModule ,CreatePostModule],
})
export class PostModule { }