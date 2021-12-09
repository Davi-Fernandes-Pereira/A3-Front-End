import { InsumoService } from './../../services/insumo.service';
import { ProdutoService } from './../../services/produto.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nome', 'Preço', 'Ações'];

  produto: any;

  produtos: Array<any> = [];

  constructor(private service: ProdutoService, private insumoService: InsumoService) {}

  ngOnInit() {
    this.listar();

    this.produto = {};
  }

  cadastrarProduto(frm: FormGroup) {
    if (this.produto.id) {
      this.service.editar(this.produto).subscribe(() => {
        this.listar();
        this.produto = {};
      });
    } else {
      this.service.cadProduto(this.produto).subscribe(() => this.listar());
    }
  }

  editar(produtoEditar: any) {
    this.produto = produtoEditar;
  }

  listar() {
    this.service.listar().subscribe((dados) => (this.produtos = dados));
  }

  deletar(id: number) {
    this.insumoService.listar().subscribe((insumos) => {
      let deleta = true;

      insumos.forEach((element) => {
        if (id === element.produto.id) {
          deleta = false;
          alert('Produto vinculado a um insumo. Impossível excluir!');
        }
      });

      if (deleta) {
        this.service.deletar(id).subscribe(() => this.listar());
      }
    });
  }
}
