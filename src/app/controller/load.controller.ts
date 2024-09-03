import { Body, Controller, Post } from '@nestjs/common';
import { LoadService } from '../service/load.service';
import { PayloadDto } from '../dto/payload.dto';

@Controller('/api')
export class LoadController {
  constructor(private readonly loadService: LoadService) {}

  @Post('/load/save')
  saveLoanPlanDocument(
    @Body()
    payload: PayloadDto,
  ): Promise<{ status: string; message: string }> {
    return this.loadService.saveLoadPlanDocument(
      payload.createLoadDocument,
      payload.updateLoadDocument,
      payload.deleteLoadDocument,
    );
  }
}
