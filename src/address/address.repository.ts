import { Repository, EntityRepository } from "typeorm";
import { Address } from "./address.entity";
import { addressDto } from "./dto/create.address.dto";
import { studentIdDto } from "./dto/student.id.dto";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {

  async getAdresses(filterNeighborhoodDto): Promise<Address[]> {
    const { neighborhood } = filterNeighborhoodDto;

    const query = this.createQueryBuilder('address');
    
    if(neighborhood) {
      query.andWhere('address.bairro = :neighborhood', {neighborhood});
    }

    const addresses = await query.getMany();

    return addresses
  }

  async createAddress(addressDto: addressDto, aluno_id: studentIdDto): Promise<Address> {
    const { rua, numero, complemento, bairro } = addressDto;
    
    const address = new Address();
    
    address.rua = rua;
    address.numero = numero;
    address.complemeto = complemento;
    address.bairro = bairro;
    address.aluno_id = aluno_id;
    await address.save();

    return address
  }
}
