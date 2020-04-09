import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Accounto } from '../models/accounto';

 
const ITEMS_KEY = 'mylist';
 
@Injectable({
  providedIn: 'root'
})
export class AccountStorageService {
 
  //
  constructor(private storage: Storage) { }
 
  // CREATE
  addItem(account: Accounto): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((accounts: Accounto[]) => {
      if (accounts) {
        accounts.push(account);
        return this.storage.set(ITEMS_KEY, accounts);
      } else {
        return this.storage.set(ITEMS_KEY, [account]);
      }
    });
  }
 
  // READ
  getItems(): Promise<Accounto[]> {
    return this.storage.get(ITEMS_KEY);
  }
 
  // UPDATE
  updateItem(account: Accounto): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((accounts: Accounto[]) => {
      if (!accounts || accounts.length === 0) {
        return null;
      }
 
      let newAccounts: Accounto[] = [];
 
      for (let i of accounts) {
        if (i.id === account.id) {
          newAccounts.push(account);
        } else {
          newAccounts.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newAccounts);
    });
  }
 
  // DELETE
  deleteItem(id: number): Promise<Accounto> {
    return this.storage.get(ITEMS_KEY).then((accounts: Accounto[]) => {
      if (!accounts || accounts.length === 0) {
        return null;
      }
 
      let toKeep: Accounto[] = [];
 
      for (let a of accounts) {
        if (a.id !== id) {
          toKeep.push(a);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
