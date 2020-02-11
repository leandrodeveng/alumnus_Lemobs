import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class studentIdDto {
  @ApiProperty()
  @IsNumber()
  aluno_id: number
}