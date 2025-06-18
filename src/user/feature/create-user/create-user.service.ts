import { Transactional } from "@mikro-orm/postgresql";
import { Injectable } from "@nestjs/common";
import { User } from "src/user/domain/user/user.entity";
import { UserRepository } from "src/user/infrastructure/repository/user.repository";

@Injectable()
export class CreateUserService {
    constructor(
        private readonly userRepository: UserRepository
    ) { }

    @Transactional()
    async create(): Promise<User> {
        const user = new User();
        Object.assign(user, {
            name: 'John Doe',
            email: 'abc@gamil.com',
            password: 'password123'
        });
        this.userRepository.save(user);
        return user;
    }
}
