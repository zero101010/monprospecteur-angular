import { Component, OnInit } from '@angular/core';
import {AddressService} from './address.service'
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  documents:any | undefined;
  addressParam: string ="";
  data: any
  constructor(private addressService: AddressService) {}

  ngOnInit(): void {
  }
  getDocuments() {
    this.addressService.getDocuments(this.addressParam).subscribe((documents: any) => {
      this.documents = documents;
      this.data = this.documents.docs
      
    });
  }

}

// import { Component, OnInit } from '@angular/core';
// import {AddressService} from './address.service'
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// @Component({
//   selector: 'app-address',
//   templateUrl: './address.component.html',
//   styleUrls: ['./address.component.css']
// })
// export class AddressComponent implements OnInit {
//   documents:any[] | undefined;
//   addressParam: string ="";
//   url = 'http://localhost:3000'
  
//   constructor(private httpClient: HttpClient) {}

//   ngOnInit(): void {
//   }
//   getDocuments() {
//     const response = this.httpClient.get<any[]>(`${this.url}/clientes?address=${this.addressParam}`).pipe()
//     console.log('teste')
//     console.log(this.addressParam)
//     console.log(response)
//   }

// }
