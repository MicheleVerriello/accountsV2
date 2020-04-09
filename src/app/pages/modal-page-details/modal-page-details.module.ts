import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';
import { ModalPageDetailsPage } from './modal-page-details.page';


const routes: Routes = [
  {
    path: '',
    component: ModalPageDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
  ],
  declarations: [ModalPageDetailsPage]
})
export class ModalPageDetailsPageModule {}
