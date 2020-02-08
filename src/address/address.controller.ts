import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AddressService } from './address.service';
import { addressDto } from './dto/create.address.dto';
import { Address } from './address.entity';
import { Student } from 'src/aluno/aluno.entity';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  getAddress(): Promise<Address[]> {
    return this.addressService.getAllAddresses()
  }

  @Post('/:aluno_id')
  createAddress(
    @Param('aluno_id') aluno_id:Student,
    @Body() addressDto: addressDto): Promise<Address> 
  {
    return this.addressService.createAddress(addressDto, aluno_id);
  }
}
