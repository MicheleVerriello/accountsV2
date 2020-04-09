import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page-details',
  templateUrl: './modal-page-details.page.html',
  styleUrls: ['./modal-page-details.page.scss'],
})
export class ModalPageDetailsPage implements OnInit {

  id: number;
  accountName: string;
  email: string;
  password: string;
  username: string;
  pin: string;
  description: string;
  telefono: string;


  constructor(navParams: NavParams, private modalController: ModalController) {

    this.id = navParams.get('custom_id');
    this.accountName = navParams.get('custom_accountName');
    this.email = navParams.get('custom_email');
    this.password = navParams.get('custom_password');
    this.username = navParams.get('custom_username');
    this.pin = navParams.get('custom_pin');
    this.telefono = navParams.get('custom_telefono');
    this.description = navParams.get('custom_description');
  }

  ngOnInit() {
  }

  closeModal () {

    this.modalController.dismiss();
  }
  
  /*
   * Check if there is an icon for the account or it will be show default icon
   */
  accountNameIsIcon (accountName: string, searchValue: string): boolean {

    let accountNameIsIcon: boolean;

    if(accountName.toLocaleLowerCase().indexOf(searchValue) > -1) {
      accountNameIsIcon = true;
    }
    else {
      accountNameIsIcon = false;
    }

    return accountNameIsIcon;
  }

  /*
   * Check if there isn't an icon for the account
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
}
