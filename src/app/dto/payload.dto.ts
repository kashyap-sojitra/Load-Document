import { IsArray, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateLoadDto, UpdateLoadDto } from './load.dto';

export class PayloadDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateLoadDto)
  createLoadDocument: CreateLoadDto[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UpdateLoadDto)
  updateLoadDocument: UpdateLoadDto[];

  @IsArray()
  @IsInt({ each: true })
  deleteLoadDocument: number[];
}
