import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InitialService } from '../shared/initial.service';
import { ConfigurationService } from '../shared/configuration.service';
import { Chiller } from './chiller';



@Component({
  selector: 'app-chillers',
  templateUrl: './chillers.component.html',
  styleUrls: ['./chillers.component.css']
})
export class ChillersComponent implements OnInit {

  constructor(private http: HttpClient, private initialService: InitialService, private config: ConfigurationService) { }

  chillers: Chiller;
  serverUrl = this.initialService.getHost();
  endpoint = this.config.apiEndpoints.chillerData;
  url = this.serverUrl + this.endpoint;

  ngOnInit() {
    this.getChillers();
  }

  getChillers() {
    this.http.get(this.url).subscribe((res: Chiller) => {
      this.chillers = res
      console.log(this.chillers);
    },
      error => {
        console.log(error);
      })
  }







}
