import { IsNotEmpty, IsString, IsNumber, Length, IsDate, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class studentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  data_nascimento: String;
  
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
