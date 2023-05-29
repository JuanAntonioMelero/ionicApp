import {  Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Componente } from '../interfaces/interfaces';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {
  data:Componente[]=[];
  constructor(dataService:DataService

  ) {
    this.data=dataService.menuOpts;

  }

  ngOnInit() {
  }

}
