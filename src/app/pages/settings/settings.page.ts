import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { ChangePasswordPage } from '../change-password/change-password.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  useDarkTheme: boolean;
  useHiddenAccounts: boolean;
  usePassword: boolean;

  constructor(private router: Router, private menuController: MenuController, private modalController: ModalController) {

    this.useDarkTheme = true;
  }

  ngOnInit() {
  }

  //show menu
  showMenu () {

    this.menuController.open();
  }

  async openModalChangePassword () {

    const modal = await this.modalController.create({
      component: ChangePasswordPage,
    });

    await modal.present();
  }
}
