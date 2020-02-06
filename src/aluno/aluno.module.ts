import { Module } from '@nestjs/common';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './aluno.repository';

@Module({
  imports: [TypeOrmModule.forFeature([StudentRepository]),
  ],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}
