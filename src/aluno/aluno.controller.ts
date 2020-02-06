import { Controller, Get, Post, Body, Param, Put, UsePipes, ValidationPipe } from '@nestjs/common';
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

  @Get('/:id')
  getStudentById(@Param('id') id:number): Student {
    return this.alunoService.getStudentById(id);
  }
  
  @Post()
  @UsePipes(ValidationPipe)
  createStudents(@Body() studentDto: studentDto): Student {
    return this.alunoService.createStudent(studentDto);
  }

  @Put('/:id')
  updateStudent(@Param('id') id: number, @Body() studentDto: studentDto): Student {
    return this.alunoService.updateStudent(id, studentDto);
  }
}
f