import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Address } from "src/address/address.entity";

@Entity()
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  data_nascimento: string;

  @Column()
  cpf: string;

  @Column()
  nota: number;

  @OneToMany(type => Address, address => address.aluno_id, { eager: true })
  addresses: Address[];

}
