import { Repository, EntityRepository } from "typeorm";
import { Address } from "./address.entity";
import { addressDto } from "./dto/create.address.dto";
import { Student } from "src/aluno/aluno.entity";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async getAllAdresses(): Promise<Address[]> {
    const query = this.createQueryBuilder();
    const addresses = await query.getMany();
    return addresses
  }

  async createAddress(addressDto: addressDto, aluno_id: Student): Promise<Address> {
    const { rua, numero, complemento, bairro } = addressDto;
    
    const address = new Address();

    address.rua = rua;
    address.numero = numero;
    address.complemeto = complemento;
    address.bairro = bairro;
    address.aluno_id = aluno_id;
    address.save();

    return address
  }
}
