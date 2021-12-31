import {AfterViewInit, Component, OnInit} from '@angular/core';
import { DataService } from "~/app/shared/data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit, AfterViewInit {

  data = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {}

  getData() {
    this.dataService.getTodos().subscribe((response) => {
      this.data = response;
    })
  }
}
