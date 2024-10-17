import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  getItem(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
