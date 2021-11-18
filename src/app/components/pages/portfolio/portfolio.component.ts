import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/products.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( public _infoProductsService: ProductosService ) { }

  ngOnInit(): void {
  }

}
