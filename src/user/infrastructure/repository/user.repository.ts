import { InjectRepository } from "@mikro-orm/nestjs";
import { EntityManager, EntityRepository } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { User } from "src/user/domain/user/user.entity";

@Injectable()
export class UserRepository {
    constructor(
        private readonly em: EntityManager,
    ) { }

    async save(user: User): Promise<User> {
        this.em.persist(user);
        await this.em.flush();
        return user;
    }
}
