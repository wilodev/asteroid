import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryColumn()
  id: string;

  @Column()
  client: string;

  @Column({ default: null })
  first_name: string;

  @Column({ default: null })
  last_name: string;
}
