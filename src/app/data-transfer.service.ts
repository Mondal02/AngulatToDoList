import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  // pinEntry(entry: any[]) {
  //   throw new Error('Method not implemented.');
  // }

  constructor() { }

  // for sending data from add task input field to the list entry

  private _dataEntrySource = new Subject();
  dataEntry$ = this._dataEntrySource.asObservable();

  sendData( currentVal: string) {
    // console.log(currentVal);    
    this._dataEntrySource.next(currentVal)
  }
  
  // for checking the entered data in the search bar with listed entries

  private _dataCheckFilter = new Subject();
  dataCheck$ = this._dataCheckFilter.asObservable();

  checkFilter(filterVal:string) {
    // console.log(filterVal);
    this._dataCheckFilter.next(filterVal)    
  }

  private _pinEntryListed = new Subject();
  pinEntry$ = this._pinEntryListed.asObservable();

  listPinEntry(pinItem:string) {
    this._pinEntryListed.next(pinItem)
    console.log(pinItem);    
  }
}
