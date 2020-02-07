import { Injectable } from '@nestjs/common';
import { addressDto } from './dto/create.address.dto';
import { AddressRepository } from './address.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(AddressRepository)
    private addressRepository: AddressRepository){}
/*
  getAddress(): Address[] {
    return this.addresses;
  }

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
