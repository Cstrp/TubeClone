import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private key: string = 'secretKey';

  constructor() {}

  public saveData(key: string, value: string): void {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string): string {
    const data = localStorage.getItem(key) || '';

    return this.decrypt(data);
  }

  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

  public clearData(): void {
    localStorage.clear();
  }

  private encrypt(value: string): string {
    return CryptoJS.AES.encrypt(value, this.key).toString();
  }

  private decrypt(value: string) {
    return CryptoJS.AES.decrypt(value, this.key).toString(CryptoJS.enc.Utf8);
  }
}
