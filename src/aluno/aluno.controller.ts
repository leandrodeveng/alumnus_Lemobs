import { Controller, Get, Post, Body, Param, Put, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { studentDto } from './dto/create.aluno.dto';
import { Student } from './aluno.entity';

@Controller('aluno')
export class AlunoController {
  constructor (private alunoService: AlunoService) {}

  @Get('avg')
  findAll(): Promise<Student[]> {
    return this.alunoService.getUpperStudents();
  }

  @Get('/:id')
  getStudentById(@Param('id', ParseIntPipe) id:number): Promise<Student> {
    return this.alunoService.getStudentById(id);
  }

  @Get('/:nota/criterio/:criterio') 
    studentCriteria(@Param('nota', ParseIntPipe) nota:number, @Param('criterio') criterio: string): Promise<Student[]> {
      return this.alunoService.getStudentsByCriteria(nota, criterio);
    }

  @Get()
  getAllStudents(): Promise<Student[]> {
    return this.alunoService.getAllStudents();
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
