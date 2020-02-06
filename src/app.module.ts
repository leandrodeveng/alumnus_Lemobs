import { Module } from '@nestjs/common';
import { AlunoModule } from './aluno/aluno.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [AlunoModule, AddressModule],
})
export class AppModule {}
