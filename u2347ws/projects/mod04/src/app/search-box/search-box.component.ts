import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  @Input() searchText: string = "";
  @Output() searchTextChange = new EventEmitter<string>();



  onSearch(search: string) {
    this.searchText = search;
    console.log(this.searchText);
    this.searchTextChange.emit(this.searchText);
  }
  
}
