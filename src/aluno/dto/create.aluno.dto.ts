import { IsNotEmpty, IsString, IsNumber, Length } from 'class-validator';

export class studentDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
  
  @IsNotEmpty()
  data_nascimento: string;
  
  @IsString()
  @IsNotEmpty()
  @Length(11, 11, { message: 'CPF must have 11 numbers' })
  cpf: string;

  @IsNumber()
  @IsNotEmpty()
  nota: number;
}
