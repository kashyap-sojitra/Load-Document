import {
  Injectable,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PayloadDto } from './dto/payload.dto';

@Injectable()
export class LoadService {
  constructor(private prisma: PrismaService) {}

  async saveLoadPlanDocument({
    createLoadDocument,
    updateLoadDocument,
    deleteLoadDocument,
  }: PayloadDto): Promise<{ status: string }> {
    try {
      if (createLoadDocument && createLoadDocument.length) {
        await Promise.all(
          createLoadDocument.map((data) =>
            this.prisma.loadPlan.create({ data }).catch((error) => {
              throw new InternalServerErrorException(
                'Error creating load plan document',
              );
            }),
          ),
        );
      }

      if (updateLoadDocument && updateLoadDocument.length) {
        await Promise.all(
          updateLoadDocument.map((data) =>
            this.prisma.loadPlan
              .update({
                where: { id: data.id },
                data,
              })
              .catch((error) => {
                throw new InternalServerErrorException(
                  'Error updating load plan document',
                );
              }),
          ),
        );
      }

      if (deleteLoadDocument && deleteLoadDocument.length) {
        await Promise.all(
          deleteLoadDocument.map((id) =>
            this.prisma.loadPlan.delete({ where: { id } }).catch((error) => {
              throw new InternalServerErrorException(
                'Error deleting load plan document',
              );
            }),
          ),
        );
      }
      return { status: 'success' };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
