import { defineConfig } from "@mikro-orm/postgresql";
import { ConfigService } from "@nestjs/config";
import { dataSourceOptions } from "ormconfig";

const configService = new ConfigService();
export default defineConfig(dataSourceOptions(configService, configService.get<string>('DB_POST_SCHEMA', '**'))); ``