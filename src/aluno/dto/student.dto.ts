import { IsNotEmpty, IsString, IsNumber, Length, IsDate, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class studentDto {
  @ApiProperty({
    description: 'Nome do Aluno'
  })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({
    description: 'Data de Nascimento do Aluno. Deve ter o formato dd-mm-aaaa'
  })
  @IsNotEmpty()
  @IsString()
  data_nascimento: String;
  
  @ApiProperty({
    description: 'CPF do aluno. Deve conter apenas números'
  })
  @IsString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'CPF must have 11 numbers' })
  cpf: string;

  @ApiProperty({
    description: 'Nota do aluno'
  })
  @IsNumber()
  @IsNotEmpty()
  nota: number;
}
