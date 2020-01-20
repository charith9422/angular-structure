import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InitialService } from '../shared/initial.service';
import { ConfigurationService } from '../shared/configuration.service';



@Component({
  selector: 'app-chillers',
  templateUrl: './chillers.component.html',
  styleUrls: ['./chillers.component.css']
})
export class ChillersComponent implements OnInit {

  constructor(private http: HttpClient, private initialService: InitialService, private config: ConfigurationService) { }

  chillerData: string;
  serverUrl = this.initialService.getHost();
  endpoint = this.config.apiEndpoints.chillerData;

  ngOnInit() {
    this.getChillers();
  }

  getChillers() {
    this.http.get(this.serverUrl + this.endpoint).subscribe(resp => {
      console.log(resp);
    })
  }







}
