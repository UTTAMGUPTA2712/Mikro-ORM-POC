import { Module } from '@nestjs/common';
import { MikroOrmModule as NestMikroOrmModule } from '@mikro-orm/nestjs';
import userOrmConfig from 'src/user/user.ormconfig';
import { User } from 'src/user/domain/user/user.entity';

@Module({
    imports: [
        NestMikroOrmModule.forRootAsync({
            useFactory: () => ({ ...userOrmConfig, autoLoadEntities: false }),
        }),
        // NestMikroOrmModule.forMiddleware(),
        NestMikroOrmModule.forFeature([User]),
    ],
    exports: [NestMikroOrmModule],
})
export class UserMikroOrmModule { }
