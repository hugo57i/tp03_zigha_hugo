import { Component, OnInit } from '@angular/core';
import countrydata from '../../assets/country.json';

@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.css']
})
export class SaisieClientComponent implements OnInit {
  public submitted: boolean = false;
  public countries: any = countrydata;

  public civilite: string = "Mr.";
  public nom: string;
  public prenom: string;
  public login: string;
  public email: string;
  public motDePasse: string;
  public confirm: string ;
  public adresse: string;
  public ville: string;
  public codePostal: string ;
  public pays: any = countrydata[0];
  public telephone: string;
  constructor() { }

  ngOnInit() {
  }

  public onValueChanged(event: any): void {
    this.pays = event;
    console.log(event);
  }

  public onSubmit(): void {
    
    this.submitted = true;
  }

}
