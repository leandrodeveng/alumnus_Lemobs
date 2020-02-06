import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddressService } from './address.service';
import { addressDto } from './dto/create.address.dto';

@Controller('address')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Get()
  getAddress() {
    return this.addressService.getAddress()
  }

  @Post()
  createAddress(@Body() addressDto: addressDto) {
    return this.addressService.createAddress(addressDto);
  }
}
