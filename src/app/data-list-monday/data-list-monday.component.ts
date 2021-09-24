import { Component, ElementRef, Input, OnInit } from '@angular/core';
// import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DataTransferService } from '../data-transfer.service';

@Component({
  selector: 'app-data-list-monday',
  templateUrl: './data-list-monday.component.html',
  styleUrls: ['./data-list-monday.component.scss']
})
export class DataListMondayComponent implements OnInit {

  _currentVal:any[] = [];
  filterVal:any[]=[];
  displayData:any[]=[];
  // isfiltering: boolean = false;
  deletedList:any[] = [];
  popUpRef:any;

  constructor(private _dataTransferService: DataTransferService) { }  
  

  ngOnInit(): void {

    // to transfer data from add task input to list
    this._dataTransferService.dataEntry$.subscribe((data)=>{
      // console.log(this._currentVal);
      // this.isfiltering = false;
      this._currentVal.push(data);
      this.displayData = this._currentVal;
    })


    // to filter data
    this._dataTransferService.dataCheck$.subscribe((filterCheck:any) => {
      // this.isfiltering = true;
      this.filterVal = this._currentVal.filter((ele:string) => ele.toLowerCase().includes(filterCheck.toLowerCase().trim()));
      this.displayData = this.filterVal;
    // console.log(this.filterVal)
    })
  }

  showPinEntry(entry:any) {
    this._dataTransferService.listPinEntry(entry);
    this.popUpRef.style.display = 'none';
    console.log(this.popUpRef);
    
  }

  deleteEntry(i: number) {
    this._currentVal.splice(i, 1)
    console.log(this._currentVal);
    this.displayData = this._currentVal;
  }

  showPopup(elem: any){
    elem.style.display = 'block';
    this.popUpRef = elem;
  }

  showMemoInput(memoInput: any){
    memoInput.style.display = 'block';
    // console.log(memoInput);    
  }

  storeMemo(memoStored: any) {
    console.log(memoStored);    
  }
}