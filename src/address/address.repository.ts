import { Repository, EntityRepository } from "typeorm";
import { Address } from "./address.entity";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
  async getAllAdresses(): Promise<Address[]> {
    const query = this.createQueryBuilder();
    const addresses = await query.getMany();
    return addresses
  }
}
