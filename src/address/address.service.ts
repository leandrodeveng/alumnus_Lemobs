import { Injectable } from '@nestjs/common';
import { Address } from './address.model';
import { addressDto } from './dto/create.address.dto';
import * as uuid from 'uuid/v1';

@Injectable()
export class AddressService {
  private addresses: Address[] = [];

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
  }
}
