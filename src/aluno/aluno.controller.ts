import { Controller, Get, Post, Body, Param, Put, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { studentDto } from './dto/create.aluno.dto';
import { Student } from './aluno.entity';

@Controller('aluno')
export class AlunoController {
  constructor (private alunoService: AlunoService) {}

  @Get()
  getAllStudents(): Promise<Student[]> {
    return this.alunoService.getAllStudents();
  }

  @Get('/:id')
  getStudentById(@Param('id', ParseIntPipe) id:number): Promise<Student> {
    return this.alunoService.getStudentById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createStudents(@Body() studentDto: studentDto): Promise<Student> {
    return this.alunoService.createStudent(studentDto);
  }

  @Put('/:id')
  updateStudent(@Param('id', ParseIntPipe) id: number, @Body() studentDto: studentDto): Promise<Student> {
    return this.alunoService.updateStudent(id, studentDto);
  }
}
