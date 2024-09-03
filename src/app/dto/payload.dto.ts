import { IsArray, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { LoadDto } from './load.dto';

export class PayloadDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LoadDto)
  createLoadDocument: LoadDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => LoadDto)
  updateLoadDocument: LoadDto[];

  @IsArray()
  @IsInt({ each: true })
  deleteLoadDocument: number[];
}
