import { IsNotEmpty } from 'class-validator';

export class studentDto {
  @IsNotEmpty()
  nome: string;
  
  @IsNotEmpty()
  data_nascimento: string;
  
  @IsNotEmpty()
  cpf: string;

  @IsNotEmpty()
  nota: number;
}
