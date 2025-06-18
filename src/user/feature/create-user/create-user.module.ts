import { Module } from '@nestjs/common';
import { CreateUserService } from './create-user.service';
import { UserController } from './create-user.controller';
import { UserMikroOrmModule } from 'src/user/infrastructure/database/mikroorm';
import { UserRepository } from 'src/user/infrastructure/repository/user.repository';

@Module({
    imports: [UserMikroOrmModule],
    controllers: [UserController],
    providers: [CreateUserService, UserRepository],
})
export class CreateUserModule { }
