import { IsNotEmpty, IsString, IsNumber, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class studentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  data_nascimento: string;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'CPF must have 11 numbers' })
  cpf: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  nota: number;
}
