import { Global, Module } from '@nestjs/common';
import { MikroOrmMiddleware, MikroOrmModule as NestMikroOrmModule } from '@mikro-orm/nestjs';
import postOrmConfig from 'src/post/post.ormconfig';
import { Post } from 'src/post/domain/post/post.entity';

@Global()
@Module({
    imports: [
        NestMikroOrmModule.forRootAsync({
            useFactory: () => ({ ...postOrmConfig, autoLoadEntities: false }),
        }),
        // NestMikroOrmModule.forMiddleware(),
        NestMikroOrmModule.forFeature([Post]),
    ],
    exports: [NestMikroOrmModule],
})
export class PostMikroOrmModule { }
