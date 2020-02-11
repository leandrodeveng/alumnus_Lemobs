import { Controller, Get, Post, Body, Param, Query, ParseIntPipe } from '@nestjs/common';
import { AddressService } from './address.service';
import { addressDto } from './dto/create.address.dto';
import { Address } from './address.entity';
import { getNeighborhoodFilterDto } from './dto/get.neighborhood.filter.dto';
import { studentIdDto } from './dto/student.id.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @ApiResponse({
    status: 200,
    description: 'Retorna todos os endereços, caso não seja especificado um bairro. Caso seja especificado um bairro, será retornado todos os endereços com o bairro especificado'
  })
  @Get()
  getAddress(@Query() filterNeighborhoodDto: getNeighborhoodFilterDto): Promise<Address[]> {
    return this.addressService.getAddresses(filterNeighborhoodDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Cadastra um novo endereço para o aluno de id especificado'
  })
  @Post()
  createAddress(
    @Query('aluno_id', ParseIntPipe) aluno_id: studentIdDto,
    @Body() addressDto: addressDto): Promise<Address> 
  {
    return this.addressService.createAddress(addressDto, aluno_id);
  }
}
