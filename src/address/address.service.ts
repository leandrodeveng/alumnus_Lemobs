import { Injectable } from '@nestjs/common';
import { addressDto } from './dto/create.address.dto';
import { AddressRepository } from './address.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { getNeighborhoodFilterDto } from './dto/get.neighborhood.filter.dto';
import { studentIdDto } from './dto/student.id.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository){}

  getAddresses(filterNeighborhoodDto: getNeighborhoodFilterDto): Promise<Address[]> {
    return this.addressRepository.getAdresses(filterNeighborhoodDto);
  }

  createAddress(addressDto: addressDto, studentIdDto: studentIdDto): Promise<Address> {
    return this.addressRepository.createAddress(addressDto, studentIdDto);
  }
}
