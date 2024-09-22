import { Module } from '@nestjs/common';
import { TouristCompanyController } from './tourist-company/tourist-company.controller';
import { TouristCompanyService } from './tourist-company/tourist-company.service';

@Module({
  imports: [],
  controllers: [TouristCompanyController],
  providers: [TouristCompanyService],
})
export class AppModule {}
