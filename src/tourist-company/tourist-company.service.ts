import { Injectable } from '@nestjs/common';
import { TouristCompany } from '../models/tourist-company.model';

@Injectable()
export class TouristCompanyService {
  private companies: TouristCompany[] = [
    { id: 1, name: 'Adventure Travels', location: 'Brazil', description: 'Exciting adventures in the Amazon.' },
    { id: 2, name: 'Relaxation Retreats', location: 'Thailand', description: 'Tranquil retreats in the Thai islands.' },
  ];

  findAll(): TouristCompany[] {
    return this.companies;
  }

  findById(id: number): TouristCompany {
    return this.companies.find((company) => company.id === id);
  }

  create(company: TouristCompany): TouristCompany {
    company.id = this.companies.length + 1;
    this.companies.push(company);
    return company;
  }

  update(id: number, company: TouristCompany): TouristCompany {
    const index = this.companies.findIndex((comp) => comp.id === id);
    if (index >= 0) {
      this.companies[index] = { ...company, id };
      return this.companies[index];
    }
    return null;
  }

  delete(id: number): boolean {
    const index = this.companies.findIndex((company) => company.id === id);
    if (index >= 0) {
      this.companies.splice(index, 1);
      return true;
    }
    return false;
  }
}
