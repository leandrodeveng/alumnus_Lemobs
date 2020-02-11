import { IsNotEmpty } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class addressDto {
  @ApiProperty({
    description: 'Campo rua, que compõe o endereço do aluno.'
  })
  @IsNotEmpty()
  rua: string;

  @ApiPropertyOptional({
    description: 'Campo numero, que compõe o endereço do aluno.'
  })
  numero: string;

  @ApiPropertyOptional({
    description: 'Campo complemento, que compõe o endereço do aluno.'
  })
  complemento: string;

  @ApiProperty({
    description: 'Campo bairro, que compõe o endereço do aluno.'
  })
  @IsNotEmpty()
  bairro: string;
}
