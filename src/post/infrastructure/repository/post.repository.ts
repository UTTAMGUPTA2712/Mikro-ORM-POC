import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { Post } from "src/post/domain/post/post.entity";

@Injectable()
export class PostRepository {
    constructor(
        @InjectRepository(Post)
        private readonly postRepository: EntityRepository<Post>,
        private readonly em: EntityManager,
    ) { }

    async save(post: Post): Promise<Post> {
        this.em.persist(post);
        await this.em.flush();
        return post;
    }
}
