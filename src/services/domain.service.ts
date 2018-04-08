import { Injectable } from '@angular/core';
import { Domain } from '../models/domain';

import { DOMAINS } from '../data/domains';
import { SECTIONS } from '../data/sections';
import { BULLETS } from '../data/bullets';


@Injectable()
export class DomainService {
  private domainColor: string;

  getDomains() {
    return DOMAINS;
  }

  setDomainColor(domainTitle: string) {
    this.domainColor = domainTitle.slice(4).toLowerCase();
  }

  getDomainColor() {
    return this.domainColor;
  }

  getSection(domain: Domain) {
    return SECTIONS.find(section => section.domainId === domain.id);
  }

  getBullets(objectiveNumber: number) {
    console.log(objectiveNumber);
    return BULLETS.find(el => el.objectiveNumber === objectiveNumber);
  }

}
