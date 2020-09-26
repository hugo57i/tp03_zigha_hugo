import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'TP02';
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

    constructor() {
    }


    public updateData(d): void {
      this.data = d;
    }
}
