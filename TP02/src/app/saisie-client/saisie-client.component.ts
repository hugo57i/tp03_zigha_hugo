import { Component, OnInit } from '@angular/core';
import countrydata from '../../assets/country.json';

@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.css']
})
export class SaisieClientComponent implements OnInit {

  public countries: any = countrydata;
  public countrySelected: any = countrydata[0];
  constructor() { }

  ngOnInit() {
  }

  public onValueChanged(event: any): void {
    this.countrySelected = event;
  }

}
