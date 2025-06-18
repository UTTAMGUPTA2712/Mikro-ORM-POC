import { Migration } from '@mikro-orm/migrations';

export class Migration20250618092910 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create schema if not exists "user";`);
    this.addSql(`create table "user"."user" ("id" serial primary key, "uuid" uuid not null, "name" varchar(255) not null, "email" varchar(255) not null, "password" text null);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "user"."user" cascade;`);

    this.addSql(`drop schema if exists "user";`);
  }

}
