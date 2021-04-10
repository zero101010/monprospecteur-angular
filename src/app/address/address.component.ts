import { Component, OnInit } from '@angular/core';
import {AddressService} from './address.service'
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  documents:any[] | undefined;
  addressParam: string ="";
  
  constructor() {}

  ngOnInit(): void {
  }
  getDocuments() {
    // this.addressService.getDocuments(this.addressParam).subscribe((documents: any[]) => {
    //   this.documents = documents;
    // });
    console.log('teste')
    console.log(this.addressParam)
  }

}
