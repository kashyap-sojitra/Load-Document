import {
  IsBoolean,
  IsInt,
  IsString,
  IsPositive,
  Length,
  Min,
  IsOptional,
} from 'class-validator';

export class LoadDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  @Length(1, 20)
  color: string;

  @IsString()
  @Length(16, 16)
  name: string;

  @IsInt()
  @IsPositive()
  length: number;

  @IsInt()
  @IsPositive()
  width: number;

  @IsInt()
  @IsPositive()
  height: number;

  @IsInt()
  @IsPositive()
  weight: number;

  @IsInt()
  @IsPositive()
  quantity: number;

  @IsBoolean()
  @IsOptional()
  stackable: boolean;

  @IsBoolean()
  @IsOptional()
  tiltable: boolean;
}
