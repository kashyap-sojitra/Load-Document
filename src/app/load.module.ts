import { Module } from '@nestjs/common';
import { LoadController } from './controller/load.controller';
import { LoadService } from './service/load.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [LoadController],
  providers: [LoadService, PrismaService],
})
export class LoadModule {}
