import { IsNotEmpty } from "class-validator";

export class addressDto {
  @IsNotEmpty()
  rua: string;

  numero: string;

  complemento: string;

  @IsNotEmpty()
  bairro: string;
}
