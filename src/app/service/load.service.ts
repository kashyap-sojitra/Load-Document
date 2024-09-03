import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLoadDto, UpdateLoadDto } from '../dto/load.dto';

@Injectable()
export class LoadService {
  constructor(private prisma: PrismaService) {}

  async saveLoadPlanDocument(
    createLoadDocument: CreateLoadDto[],
    updateLoadDocument: UpdateLoadDto[],
    deleteLoadDocument: number[],
  ): Promise<{ status: string; message: string }> {
    const transaction = this.prisma.$transaction(async (prisma) => {
      if (createLoadDocument && createLoadDocument.length) {
        await Promise.all(
          createLoadDocument.map((data: any) =>
            prisma.loadPlan.create({ data }).catch((error) => {
              throw new Error('Failed to save document:' + error?.message);
            }),
          ),
        );
      }

      if (updateLoadDocument && updateLoadDocument.length) {
        await Promise.all(
          updateLoadDocument.map((data) =>
            prisma.loadPlan.update({
              where: { id: data.id },
              data,
            }),
          ),
        );
      }

      if (deleteLoadDocument && deleteLoadDocument.length) {
        await Promise.all(
          deleteLoadDocument.map((id) =>
            prisma.loadPlan.delete({ where: { id } }),
          ),
        );
      }
    });

    try {
      await transaction;
      return { status: 'success', message: 'Document saved successfully' };
    } catch (error) {
      console.error(error.meta.cause);
      return {
        status: 'failed',
        message: error.meta.cause || 'Failed to save document',
      };
    }
  }
}
