import { Component, OnInit } from '@angular/core';
import { Platform, ModalController, AlertController } from '@ionic/angular';
import { Accounto } from 'src/app/models/accounto';
import { AccountStorageService } from 'src/app/services/account-storage.service';
import { ModalPageDetailsPage } from '../modal-page-details/modal-page-details.page';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {

  accounts: Accounto[] = []; //Array that contains all the accounts from the service

  constructor(private alertController: AlertController, private modalController: ModalController, private platform: Platform, private accountStorageService: AccountStorageService) {
    
    //Load items from the storage
    this.platform.ready().then(() => {
      this.loadItems();
    });
  }

  ngOnInit () {

    this.platform.ready().then(() => {
      this.loadItems();
    });
  }

  ionViewWillEnter () {

    this.platform.ready().then(() => {
      this.loadItems();
    });
  }

  //Load items from the storage
  loadItems () {

    this.accountStorageService.getItems().then(res => {
      this.accounts = res;
    });
  }

  //At refresh it reload items from the storage
  doRefresh (event) {
   
    setTimeout(() => {
      
      this.loadItems();
      event.target.complete();
    }, 1000);
  }

  /* 
   * This method allow to know if "searchValue" is present in "accountName"
   * Return true if there there is "searchValue" in "accountName", else false.
   */
  accountNameIsIcon (accountName: string, searchValue: string): boolean {

    let accountNameIsIcon: boolean;

    //If there is "searchValue" in "accountName" the method indexOf() returns the initial position of the "searchValue" in the "accountName"
    if(accountName.toLocaleLowerCase().indexOf(searchValue) > -1) {
      accountNameIsIcon = true;
    }
    else {
      accountNameIsIcon = false;
    }

    return accountNameIsIcon;
  }

  //delete an item
  deleteItem (id: number, accountName: string) {

    this.presentDeleteAlert(id, accountName);
  }

   //present delete alert
   async presentDeleteAlert (id: number, name: string) {

    const alert = await this.alertController.create({
      header: 'Delete',
      message: 'Delete ' + name + ' account ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Delete',
          handler: () => {

            this.accountStorageService.deleteItem(id).then(res => {
              this.platform.ready().then(() => {
                this.loadItems();
              });
            });
          }
        }
      ]
    });

    await alert.present();
  }

  /*
   * Check if there is an icon for the account or it will be show default icon
   */
  accountNameIsIconDefault (accountName: string): boolean {

    let accountNameIsIconDefault: boolean;

    if(accountName.toLocaleLowerCase().indexOf("facebo") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("linked") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("github") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("apple") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("instag") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("dropbo") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("google") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("youtu") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("pinteres") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("twitt") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("snapch") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("reddit") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("playstat") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("skyp") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("xbox") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("cloud") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("tumbrl") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("twitch") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("bitbuc") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("yaho") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("ionic") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("microso") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("mail") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("outlo") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("androi") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("credit card") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("vimeo") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("steam") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("slack") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("amazo") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("atlassian") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("paypal") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("ebay") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("waze") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("aws") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("mastercard") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("american express") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("visa") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("spotif") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("netflix") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("docker") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("flipboard") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("evernote") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("jira") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("line") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("magento") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("medium") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("patreon") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("quora") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("stackoverf") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("telegram") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("tripadvisor") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("uber") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("vine") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("vk") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("wix") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("yammer") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("wordpress") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("flickr") > -1) {
      accountNameIsIconDefault = false;
    }
    else if (accountName.toLocaleLowerCase().indexOf("adobe") > -1) {
      accountNameIsIconDefault = false;
    }
    else {
      accountNameIsIconDefault = true
    }

    return accountNameIsIconDefault;
  }

  /*
   * This method present a modal with the details of the clicked account in the accounts list
   * It receive all the attributes of the account in input and sends they to the modal
   */
  async openModalDetails (id: number, password: string, accountName: string, telefono: string, pin: string, description: string, username: string, email: string) {

    //Sending parameter to the modal
    const modal = await this.modalController.create({
      component: ModalPageDetailsPage,
      componentProps: {
        custom_id: id,
        custom_accountName: accountName,
        custom_telefono: telefono,
        custom_pin: pin,
        custom_description: description,
        custom_username: username,
        custom_email: email,
        custom_password: password
      }
    });

    await modal.present();
  }
}
