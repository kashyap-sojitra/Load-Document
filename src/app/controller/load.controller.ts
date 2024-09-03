import { Body, Controller, Post } from '@nestjs/common';
import { LoadService } from '../load.service';
import { PayloadDto } from '../dto/payload.dto';

@Controller('/api')
export class LoadController {
  constructor(private readonly loadService: LoadService) {}

  @Post('/load/save')
  saveLoanPlanDocument(
    @Body()
    payload: PayloadDto,
  ) {
    return this.loadService.saveLoadPlanDocument(payload);
  }
}
