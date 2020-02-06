import { Repository, EntityRepository } from "typeorm";
import { Student } from "./aluno.entity";
import { studentDto } from "./dto/create.aluno.dto";


@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  async createStudent(studentDto: studentDto): Promise<Student> {
    const { nome, data_nascimento, cpf, nota } = studentDto;

    const student = new Student();
    student.nome = nome;
    student.data_nascimento = data_nascimento;
    student.cpf = cpf;
    student.nota = nota;
    await student.save()

    return student;
  }
}

