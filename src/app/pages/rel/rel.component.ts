import { RelService } from './../../services/rel.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rel',
  templateUrl: './rel.component.html',
  styleUrls: ['./rel.component.scss'],
})
export class RelComponent implements OnInit {


  displayedColumns: string[] = ['Produto', 'Qtd Produzida'];

  constructor(private service: RelService) {}

  rels: any;

  ngOnInit(): void {}

  gerar() {
    this.service.gerar().subscribe((dados) => (this.rels = dados));
  }
}
