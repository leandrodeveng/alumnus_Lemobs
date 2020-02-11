import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
import { Address } from "src/address/address.entity";

@Entity()
@Unique(['cpf'])
export class Student extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  data_nascimento: Date;

  @Column()
  cpf: string;

  @Column()
  nota: number;

  @OneToMany(type => Address, address => address.aluno_id, { eager: true })
  addresses: Address[];
}
