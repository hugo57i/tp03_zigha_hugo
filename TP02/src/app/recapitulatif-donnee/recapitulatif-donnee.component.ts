import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recapitulatif-donnee',
  templateUrl: './recapitulatif-donnee.component.html',
  styleUrls: ['./recapitulatif-donnee.component.css']
})
export class RecapitulatifDonneeComponent implements OnInit {

  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
