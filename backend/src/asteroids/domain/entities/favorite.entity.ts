import { Column, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class Favorite {
  @ObjectIdColumn()
  id: string;

  @Column()
  clientId: string;

  @Column()
  asteroidId: string;
}
