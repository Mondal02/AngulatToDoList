import { Component, OnInit} from '@angular/core';
import { DataTransferService } from '../data-transfer.service';


@Component({
  selector: 'app-data-entry-monday',
  templateUrl: './data-entry-monday.component.html',
  styleUrls: ['./data-entry-monday.component.scss']
})
export class DataEntryMondayComponent implements OnInit {

  pinEntries:any[] = [];

  constructor(private _dataTransferService: DataTransferService) { }

  ngOnInit(): void {
    this._dataTransferService.pinEntry$.subscribe((pinValue)=>{
      // console.log(this._currentVal);
      // this.isfiltering = false;
      this.pinEntries.push(pinValue);
      // this.displayData = this._currentVal;
      console.log(pinValue);      
    })
   }

  currentVal = '';
  searchVal = '';

  
  getValue(val:any)
  {
    this.currentVal = val;
    this._dataTransferService.sendData(val);
  }

  searchFn(filterVal:any) {
    this.searchVal = filterVal;
    this._dataTransferService.checkFilter(filterVal);
    console.log(filterVal);
    
  }

  toClearInput(clearVal:any) {
    this.currentVal = '';
  }
}
