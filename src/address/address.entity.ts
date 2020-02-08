import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Student } from "src/aluno/aluno.entity";

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rua: string;

  @Column()
  numero: string;

  @Column()
  complemeto: string;

  @Column()
  bairro: string;

  @ManyToOne(type => Student, student => student.addresses, { eager: false })
  aluno_id: Student;

}
