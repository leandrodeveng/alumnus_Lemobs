import { Controller, Get, Post, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { addressDto } from './dto/create.address.dto';
import { Address } from './address.entity';
import { getNeighborhoodFilterDto } from './dto/get.neighborhood.filter.dto';
import { Student } from 'src/aluno/aluno.entity';
import { studentIdDto } from './dto/student.id.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  getAddress(@Query() filterNeighborhoodDto: getNeighborhoodFilterDto): Promise<Address[]> {
    return this.addressService.getAddresses(filterNeighborhoodDto);
  }

  @Post()
  createAddress(
    @Query('aluno_id', ParseIntPipe) aluno_id: studentIdDto,
    @Body() addressDto: addressDto): Promise<Address> 
  {
    return this.addressService.createAddress(addressDto, aluno_id);
  }
}
