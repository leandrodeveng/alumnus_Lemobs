import { Repository, EntityRepository } from "typeorm";
import { Student } from "./aluno.entity";
import { studentDto } from "./dto/create.aluno.dto";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";


@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {

  async getAllStudents(): Promise<Student[]> {
    const query = this.createQueryBuilder();
    const students = await query.getMany();
    return students;
  }

  async createStudent(studentDto: studentDto): Promise<Student> {
    const { nome, data_nascimento, cpf, nota } = studentDto;

    const student = new Student();
    student.nome = nome;
    student.data_nascimento = data_nascimento;
    student.cpf = cpf;
    student.nota = nota;

    try {
      await student.save();
    } catch(error) {
      if(error.code === '23505') {
        throw new ConflictException('The student already exists');
      } else {
        throw new InternalServerErrorException();
      }
    } 

    return student;
  }
}
