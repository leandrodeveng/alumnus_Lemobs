import { Injectable } from '@nestjs/common';
import { addressDto } from './dto/create.address.dto';
import { AddressRepository } from './address.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from './address.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository){}

  getAllAddresses(): Promise<Address[]> {
    return this.addressRepository.getAllAdresses();
  }
/*
  createAddress(addressDto: addressDto): Address {
    const { rua, numero, complemento, bairro } = addressDto

    const address = {
      id: uuid(),
      rua,
      numero,
      complemento,
      bairro,
      aluno_id: uuid()
    }

    this.addresses.push(address)

    return address; 
  }*/
}
