import { Repository, EntityRepository } from "typeorm";
import { Student } from "./aluno.entity";


@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  
}
