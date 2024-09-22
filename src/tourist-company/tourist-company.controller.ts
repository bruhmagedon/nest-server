import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TouristCompany } from '../models/tourist-company.model';
import { TouristCompanyService } from './tourist-company.service';
import { TouristCompanyDto } from './dto/company.dto';

@Controller('companies')
export class TouristCompanyController {
  constructor(private readonly companyService: TouristCompanyService) {}

  @Get()
  findAll(): TouristCompany[] {
    return this.companyService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): TouristCompany {
    return this.companyService.findById(+id);
  }

  @Post()
  create(@Body() company: TouristCompanyDto): TouristCompany {
    return this.companyService.create(company);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() company: TouristCompanyDto): TouristCompany {
    return this.companyService.update(+id, company);
  }

  @Delete(':id')
  delete(@Param('id') id: string): boolean {
    return this.companyService.delete(+id);
  }
}
