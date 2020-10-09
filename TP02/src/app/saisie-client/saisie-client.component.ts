import { Component, OnInit} from '@angular/core';
import countrydata from '../../assets/country.json';

@Component({
  selector: 'app-saisie-client',
  templateUrl: './saisie-client.component.html',
  styleUrls: ['./saisie-client.component.css']
})
export class SaisieClientComponent implements OnInit {
  public submitted: boolean = false;
  public falseEmail: boolean = false;
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

  public data: any = {
    civilite: '',
    nom: '',
    prenom: '',
    login: '',
    email: '',
    motDePasse: '',
    adresse: '',
    ville: '',
    codePostal: '',
    pays: {
      name: '',
      dial_code: '',
      code: ''
    },
    telephone: ''
  };

  constructor() { }

  ngOnInit() {
  }

  public onValueChanged(event: any): void {
    this.pays = event;
  }

  public checkEmail(event: any): void {
    this.email = event;
    this.falseEmail = this.email.indexOf('.') !== -1 && this.email.indexOf('@') !== -1 ? false : true;
  }

  public checkValues(): boolean {
    if (!this.falseEmail && this.nom && this.nom !== '' && this.prenom && this.prenom !== ''
    && this.login && this.login !== '' && this.email && this.motDePasse
    && this.motDePasse !== '' && this.confirm && this.confirm === this.motDePasse && this.adresse
    && this.adresse !== '' && this.ville && this.ville !== '' && this.codePostal && this.codePostal !== ''
    && this.telephone && this.telephone.length === 9) {
      return false;
    }
    return true;
  }

  public numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) || (this.telephone && this.telephone.length === 9)) {
      return false;
    }
    return true;
  }

  public clearInputs(): void {
    this.civilite = 'Mr.';
    this.nom = undefined;
    this.prenom = undefined;
    this.login = undefined;
    this.email = undefined;
    this.motDePasse = undefined;
    this.confirm = undefined;
    this.adresse = undefined;
    this.ville = undefined;
    this.codePostal = undefined;
    this.pays = countrydata[0];
    this.telephone = undefined;
  }

  public onSubmit(): void {
    this.data = {
      civilite: this.civilite,
      nom: this.nom,
      prenom: this.prenom,
      login: this.login,
      email: this.email,
      motDePasse: this.motDePasse,
      adresse: this.adresse,
      ville: this.ville,
      codePostal: this.codePostal,
      pays: this.pays,
      telephone: this.telephone
    };
    this.clearInputs();
  }

}
