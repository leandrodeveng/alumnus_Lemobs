import { Injectable, NotFoundException } from '@nestjs/common';
import { studentDto } from './dto/create.aluno.dto';
import { StudentRepository } from './aluno.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './aluno.entity';

@Injectable()
export class AlunoService {
  constructor (
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}
/*
  getAllStudents(): Student[] {
    return this.students;
  }
*/

  async getStudentById(id: number ): Promise<Student> {
    const student = await this.studentRepository.findOne(id);

    if(!student) {
      throw new NotFoundException(`The student with id ${id} does not exists`);
    }
    return student
    }
/*  }

  createStudent(studentDto: studentDto): Student {
    const { nome, data_nascimento, cpf, nota } = studentDto;

    const student: Student = {
      id: uuid(),
      nome,
      data_nascimento,
      cpf,
      nota,
    };
    this.students.push(student);
    return student;
  }

  updateStudent(id: number, studentDto: studentDto): Student {
    const { nome, data_nascimento, cpf, nota } = studentDto;
    
    const student = this.getStudentById(id);
    
    student.nome = nome;
    student.data_nascimento = data_nascimento;
    student.cpf = cpf;
    student.nota = nota;

    return student;
  }*/
}
