import { ApiProperty } from "@nestjs/swagger";
import { IsNumber } from "class-validator";

export class studentIdDto {
  @ApiProperty()
  @IsNumber()
  aluno_id: number
}