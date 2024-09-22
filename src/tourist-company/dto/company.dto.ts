import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TouristCompany } from '../../models/tourist-company.model';

export class TouristCompanyDto extends TouristCompany {
  @ApiProperty({ description: 'The unique identifier of the tourist company' })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({ description: 'The name of the tourist company' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The location of the tourist company' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ description: 'A brief description of the tourist company' })
  @IsString()
  @IsNotEmpty()
  description: string;
}
