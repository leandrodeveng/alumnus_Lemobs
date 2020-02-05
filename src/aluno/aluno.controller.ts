import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Student } from './aluno.model';

@Controller('aluno')
export class AlunoController {
  constructor (private alunoService: AlunoService) {}

  @Get()
  getAllStudents(): Student[] {
    return this.alunoService.getAllStudents();
  }

  @Post()
  createStudents(
    @Body('nome') nome: string,
    @Body('data_nascimento') data_nascimento: string,
    @Body('cpf') cpf: string,
    @Body('nota') nota: number,
  ): Student {
    return this.alunoService.createStudent(nome, data_nascimento, cpf, nota);
  }
}
