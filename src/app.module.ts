import { Module } from '@nestjs/common';
import { AlunoModule } from './aluno/aluno.module';
import { AddressModule } from './address/address.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig),AlunoModule, AddressModule],
})
export class AppModule {}
