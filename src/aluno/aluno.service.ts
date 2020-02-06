import { Injectable } from '@nestjs/common';
import { Student } from './aluno.model';
import * as uuid from 'uuid/v1';
import { studentDto } from './dto/create.aluno.dto';

@Injectable()
export class AlunoService {
  private students: Student[] = [];

  getAllStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number ): Student {
    return this.students.find(student => student.id === id);
  }

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
  }
}
