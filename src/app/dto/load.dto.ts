import {
  IsBoolean,
  IsInt,
  IsString,
  IsPositive,
  Length,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateLoadDto {
  @IsString()
  color: string;

  @IsString()
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
  stackable?: boolean;

  @IsBoolean()
  @IsOptional()
  tiltable?: boolean;
}

export class UpdateLoadDto {
  @IsInt()
  @Min(1)
  id: number;

  @IsString()
  color: string;

  @IsString()
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
  stackable?: boolean;

  @IsBoolean()
  @IsOptional()
  tiltable?: boolean;
}
