import { AbstractEntity } from '../../database';
import { Column, Entity } from 'typeorm';

@Entity()
export class RoleEntity extends AbstractEntity<RoleEntity> {
    @Column()
    name!: string;

   
}