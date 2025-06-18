import { PostgreSqlOptions } from '@mikro-orm/postgresql/PostgreSqlMikroORM';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { Migrator } from '@mikro-orm/migrations';
import { defineConfig, PostgreSqlDriver } from '@mikro-orm/postgresql';

export const dataSourceOptions = (
    configService: ConfigService,
    domain: string = '**',
): PostgreSqlOptions => ({
    extensions: [Migrator],
    driver: PostgreSqlDriver,
    host: configService.get<string>('DB_HOST', 'localhost'),
    port: configService.get<number>('DB_PORT', 5432),
    dbName: configService.get<string>('DB_NAME'),
    user: configService.get<string>('DB_USER', 'postgres'),
    schema: domain,
    password: configService.get<string>('DB_PASSWORD', 'password'),
    entities: [`dist/src/**/*.entity.js`],
    entitiesTs: [`src/**/*.entity.ts`],
    migrations: {
        pathTs: `src/${domain}/infrastructure/database/migrations`,
        path: `dist/src/${domain}/infrastructure/database/migrations`,
    },
    debug: true
});