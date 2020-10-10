import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng5SliderModule } from 'ng5-slider';

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { SaisieClientComponent } from './saisie-client/saisie-client.component';
import { RecapitulatifDonneeComponent } from './recapitulatif-donnee/recapitulatif-donnee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhonepipePipe } from './phonepipe.pipe';
import { ProductService } from './product.service';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { CardComponent } from './card/card.component';
import { SearchFilterComponent } from './search-filter/search-filter.component';

const appRoutes: Routes = [
  { path: 'createAccount', component: SaisieClientComponent },
  { path: 'catalogue', component: ListeProduitComponent },
  { path: '', redirectTo: 'catalogue', pathMatch: 'full' },
  { path: '**', redirectTo: 'catalogue' }
];

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    SaisieClientComponent,
    RecapitulatifDonneeComponent,
    PhonepipePipe,
    ListeProduitComponent,
    CardComponent,
    SearchFilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Ng5SliderModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
