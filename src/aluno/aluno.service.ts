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

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.getAllStudents();
  }


  async getStudentById(id: number ): Promise<Student> {
    const student = await this.studentRepository.findOne(id);

    if(!student) {
      throw new NotFoundException(`The student with id ${id} does not exists`);
    }
    return student
  }

  async getUpperStudents(): Promise<Student[]> {
    const students = await this.getAllStudents();

    const avgStudents = students.reduce((total,next) => total + next.nota, 0)/students.length;

    const upperStudents = students.filter(student => student.nota > avgStudents)
    
    return upperStudents
  }


  async createStudent(studentDto: studentDto): Promise<Student> {
    return this.studentRepository.createStudent(studentDto);
  }

  async updateStudent(id: number, studentDto: studentDto): Promise<Student> {
    const { nome, data_nascimento, cpf, nota } = studentDto;
    
    const student = await this.getStudentById(id);
    
    student.nome = nome;
    student.data_nascimento = data_nascimento;
    student.cpf = cpf;
    student.nota = nota;
    await student.save();

    return student;
  }
}
