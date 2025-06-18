import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

@Entity({schema: 'post'})
export class Post {
    @PrimaryKey()
    id: number;

    @Property({ type: 'uuid', nullable: false })
    uuid: string= crypto.randomUUID();

    @Property({ type: 'uuid', nullable: false })
    user_uuid: string;

    @Property({ type: 'text', nullable: true })
    description: string;

    @Property({ type: 'timestamp', defaultRaw: 'CURRENT_TIMESTAMP' })
    created_at: Date = new Date();
}
