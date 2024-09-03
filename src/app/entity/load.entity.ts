import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('load')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  color: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'int' })
  length: number;

  @Column({ type: 'int' })
  width: number;

  @Column({ type: 'int' })
  height: number;

  @Column({ type: 'int' })
  weight: number;

  @Column({ type: 'int' })
  quantity: number;

  @Column({ type: 'boolean', default: false })
  stackable: boolean;

  @Column({ type: 'boolean', default: false })
  tiltable: boolean;
}
