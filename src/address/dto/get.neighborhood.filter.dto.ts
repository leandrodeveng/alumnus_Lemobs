import { ApiPropertyOptional } from "@nestjs/swagger";

export class getNeighborhoodFilterDto {
  @ApiPropertyOptional()
  neighborhood: string;
}