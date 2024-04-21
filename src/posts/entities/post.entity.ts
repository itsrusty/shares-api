import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  description: string;
}