import { Injectable, NotFoundException } from '@nestjs/common';
import { studentDto } from './dto/student.dto';
import { StudentRepository } from './aluno.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './aluno.entity';
import { BadRequestException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { validate } from '../utils/validate.cpf';
import { formatedDate } from '../utils/formatDate';

@Injectable()
export class AlunoService {
  constructor (
    @InjectRepository(StudentRepository)
    private studentRepository: StudentRepository,
  ) {}

  async getAllStudents(): Promise<Student[]> {
    const students = await this.studentRepository.getAllStudents();

    const formattedStudent = students.map(student => ({
      ...student,
      cpf: student.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
      function( regex, ex1, ex2, ex3, ex4 ) {
        return ex1 + '.' + ex2 + '.' + ex3 + '-' + ex4;
      })} as Student)
    )

    return formattedStudent
  }

  async getStudentById(id: number ): Promise<Student> {
    const student = await this.studentRepository.findOne(id);

    if(!student) {
      throw new NotFoundException(`The student with id ${id} does not exists`);
    }

    student.cpf = student.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
    function( regex, ex1, ex2, ex3, ex4 ) {
      return ex1 + '.' + ex2 + '.' + ex3 + '-' + ex4;
    })

    return student
  }

  async getUpperStudents(): Promise<Student[]> {
    const students = await this.getAllStudents();

    const avgStudents = students.reduce((total,next) => total + next.nota, 0)/students.length;

    const upperStudents = students.filter(student => student.nota > avgStudents)
    
    return upperStudents
  }

  async getStudentsByCriteria(nota: number, criterio:string): Promise<Student[]> {
    if(criterio !== '>' && criterio !== '<') {
      throw new NotFoundException(`The criteria must be > or <`);
    }

    const students = await this.getAllStudents();
  
    switch(criterio){
      case ">":
        return students.filter(student => student.nota > nota);
      case "<":
        return students.filter(student => student.nota < nota);
    }
  }

  async getStudentAddresses(aluno_id: number) {
    const student = await this.getStudentById(aluno_id);

    const studentAddresses = student.addresses.map(address => ({
      endereco: `Rua ${address.rua}, ${address.numero}, ${address.complemeto}`,
      bairro: `${address.bairro}`
    }))

    const total = student.addresses.length;

    const addresses = {
      total,
      studentAddresses,
    }
    
    return addresses
  }

  async createStudent(studentDto: studentDto): Promise<Student> {
    const cpfValidate = validate(studentDto.cpf);

    if(!cpfValidate) {
      throw new BadRequestException('Invalid cpf');
    }
    return this.studentRepository.createStudent(studentDto);
  }

  async updateStudent(id: number, studentDto: studentDto): Promise<Student> {
    const { nome, data_nascimento, cpf, nota } = studentDto;
    
    const cpfValidate = validate(cpf);

    if(!cpfValidate) {
      throw new BadRequestException('Invalid cpf');
    }

    const student = await this.getStudentById(id);
    
    student.nome = nome;
    student.data_nascimento = formatedDate(data_nascimento);
    student.cpf = cpf;
    student.nota = nota;

    try {
      await student.save();
    } catch(error) {
      if(error.code === '23505') {
        throw new ConflictException('The student already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return student;
  }
}
