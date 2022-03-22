import { Component, OnInit } from '@angular/core';
import {IPipePost} from "../../interfaces/pipes/IPipePost.js";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  public search : string = '';
  public searchField : string = 'title';
  public posts: IPipePost[] = [
    {title: 'Bear', text: 'The best bear in the wold!'},
    {title: 'Bread', text: 'The best bread in the wold!'},
    {title: 'TypeScript', text: 'The best language in the wold!'},
  ];
  constructor() { }

  ngOnInit(): void {
  }




}
