import { Injectable } from '@nestjs/common';
import { Student } from './aluno.model';
import * as uuid from 'uuid/v1';

@Injectable()
export class AlunoService {
  private students: Student[]

  getAllStudents(): Student[] {
    return this.students;
  }

  createStudent(nome: string, data_nascimento: string, cpf: string, nota: number): Student {
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
}
