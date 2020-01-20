import { Injectable } from '@angular/core';
import endpoints from '../../assets/end-points.json';

@Injectable()
export class ConfigurationService {


  constructor() { }

  apiEndpoints = {
    chillerData: (<any>endpoints).chillerData
  }

}
