import { IsNotEmpty } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class addressDto {
  @ApiProperty()
  @IsNotEmpty()
  rua: string;

  @ApiPropertyOptional()
  numero: string;

  @ApiPropertyOptional()
  complemento: string;

  @ApiProperty()
  @IsNotEmpty()
  bairro: string;
}
