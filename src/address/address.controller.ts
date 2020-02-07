import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddressService } from './address.service';
import { addressDto } from './dto/create.address.dto';
import { Address } from './address.entity';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  getAddress(): Promise<Address[]> {
    return this.addressService.getAllAddresses()
  }
/*
  @Post()
  createAddress(@Body() addressDto: addressDto) {
    return this.addressService.createAddress(addressDto);
  }*/
}
