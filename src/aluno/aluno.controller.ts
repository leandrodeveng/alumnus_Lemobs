import { Controller, Get, Post, Body, Param, Put, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { studentDto } from './dto/student.dto';
import { Student } from './aluno.entity';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

@Controller('aluno')
export class AlunoController {
  constructor (private alunoService: AlunoService) {}

  @ApiResponse({
    status: 200,
    description: 'Retorna alunos com média acima da média de todos os alunos'
  })
  @Get('avg')
  findAll(): Promise<Student[]> {
    return this.alunoService.getUpperStudents();
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna todos endereços do aluno de id especificado'
  })

  @Get('/:aluno_id/endereco')
  getStudentsAddresses(@Param('aluno_id', ParseIntPipe) aluno_id: number) {
    return this.alunoService.getStudentAddresses(aluno_id)
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna aluno de id especificado'
  })
  @Get('/:id')
  getStudentById(@Param('id', ParseIntPipe) id:number): Promise<Student> {
    return this.alunoService.getStudentById(id);
  }

  @ApiResponse({
    status: 200,
    description: 'Retorna os dados de todos os alunos que possuem nota maior que a nota dada como parâmetro se o criterio​ for igual a “>” e os que possuem nota menor se o criterio ​for igual a “<”'
  })
  @Get('/:nota/criterio/:criterio') 
    studentCriteria(@Param('nota', ParseIntPipe) nota:number, @Param('criterio') criterio: string): Promise<Student[]> {
      return this.alunoService.getStudentsByCriteria(nota, criterio);
    }

  @ApiResponse({
    status: 200,
    description: 'Retorna todos os alunos cadastrados'
  })
  @Get()
  getAllStudents(): Promise<Student[]> {
    return this.alunoService.getAllStudents();
  }

  @ApiResponse({
    status: 200,
    description: 'Cadastra um novo aluno'
  })
  @Post()
  @UsePipes(ValidationPipe)
  createStudents(@Body(ValidationPipe) studentDto: studentDto): Promise<Student> {
    return this.alunoService.createStudent(studentDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Edita um aluno já cadastrado'
  })
  @Put('/:id')
  updateStudent(@Param('id', ParseIntPipe) id: number, @Body() studentDto: studentDto): Promise<Student> {
    return this.alunoService.updateStudent(id, studentDto);
  }
}
