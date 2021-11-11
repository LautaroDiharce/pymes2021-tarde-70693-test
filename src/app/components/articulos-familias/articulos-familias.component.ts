import { Component, OnInit } from '@angular/core';
import { ArticuloFamilia } from '../../models/articulo-familia';
import { ArticulosFamiliasService } from '../../services/articulos-familias.service';
import { MockArticulosFamiliasService } from '../../services/mock-articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css'],
})
export class ArticulosFamiliasComponent implements OnInit {
  // constructor(private articulosFamiliasService: MockArticulosFamiliasService) {}
  constructor(private articulosFamiliasService: ArticulosFamiliasService) {}

  ngOnInit() {
    this.articulosFamiliasService.get().subscribe((obj: ArticuloFamilia[]) => {
      this.Items = obj;
    });
  }
  //Items = ArticulosFamilias;
  Items = null;
  Titulo = 'Articulos Familias';

  // obtenerNombre(){
  //   return "nombre: " + this.Titulo ;
  // }
}
