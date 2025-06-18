import { Migration } from '@mikro-orm/migrations';

export class Migration20250618092936 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create schema if not exists "post";`);
    this.addSql(`create table "post"."post" ("id" serial primary key, "uuid" uuid not null, "user_uuid" uuid not null, "description" text null, "created_at" timestamptz not null default CURRENT_TIMESTAMP);`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "post"."post" cascade;`);

    this.addSql(`drop schema if exists "post";`);
  }

}
