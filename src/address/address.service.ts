import { Injectable } from '@nestjs/common';
import { addressDto } from './dto/create.address.dto';
import { AddressRepository } from './address.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';
import { Student } from 'src/aluno/aluno.entity';
import { getNeighborhoodFilterDto } from './dto/get.neighborhood.filter.dto';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository){}

  getAddresses(filterNeighborhoodDto: getNeighborhoodFilterDto): Promise<Address[]> {
    return this.addressRepository.getAdresses(filterNeighborhoodDto);
  }

  createAddress(addressDto: addressDto, aluno_id: Student): Promise<Address> {
    return this.addressRepository.createAddress(addressDto, aluno_id);
  }
}
