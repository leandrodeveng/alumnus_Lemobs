import { IsNotEmpty } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class addressDto {
  @ApiProperty()
  @IsNotEmpty()
  rua: string;

  @ApiProperty()
  numero: string;

  @ApiProperty()
  complemento: string;

  @ApiProperty()
  @IsNotEmpty()
  bairro: string;
}
