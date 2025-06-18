import { Controller, Post } from "@nestjs/common";
import { CreateUserService } from "./create-user.service";
import { User } from "src/user/domain/user/user.entity";

@Controller()
export class UserController {
    constructor(private readonly createUserService: CreateUserService) { }

    @Post('users')
    async createUser(): Promise<User> {
        return this.createUserService.create();
    }
}