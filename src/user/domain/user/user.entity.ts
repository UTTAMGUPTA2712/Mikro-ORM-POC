import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({schema: 'user'})
export class User {
    @PrimaryKey()
    id: number;

    @Property({ type: 'uuid', nullable: false })
    uuid: string= crypto.randomUUID();

    @Property({ type: 'varchar', nullable: false })
    name: string;

    @Property({ type: 'varchar', nullable: false })
    email: string;

    @Property({ type: 'text', nullable: true })
    password: string;
}
