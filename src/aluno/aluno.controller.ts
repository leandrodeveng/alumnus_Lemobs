import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { Student } from './aluno.model';
import { studentDto } from './dto/create.aluno.dto';

@Controller('aluno')
export class AlunoController {
  constructor (private alunoService: AlunoService) {}

  @Get()
  getAllStudents(): Student[] {
    return this.alunoService.getAllStudents();
  }

  @Post()
  createStudents(@Body() studentDto: studentDto): Student {
    return this.alunoService.createStudent(studentDto);
  }
}
