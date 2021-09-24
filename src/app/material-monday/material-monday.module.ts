import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';



const MaterialModule = [MatInputModule,MatCardModule,MatFormFieldModule,MatCheckboxModule,
                        MatIconModule,MatButtonModule,MatAutocompleteModule,MatTableModule,MatToolbarModule]



@NgModule({
  imports: [...MaterialModule],
  exports: [...MaterialModule]
})
export class MaterialMondayModule { }
