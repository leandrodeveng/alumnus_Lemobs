import { ApiProperty } from "@nestjs/swagger";

export class getNeighborhoodFilterDto {
  @ApiProperty()
  neighborhood: string;
}