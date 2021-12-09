import { FormGroup } from '@angular/forms';
import { InsumoService } from './../../services/insumo.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.scss'],
})
export class InsumoComponent implements OnInit {
  displayedColumns: string[] = [
    'ID',
    'Produto',
    'Materia Prima',
    'Quantidade Necessaria',
    'Ações',
  ];

  insumos: Array<any> = [];

  insumo: any;

  constructor(private service: InsumoService) {}

  ngOnInit(): void {
    this.listar();

    this.insumo = {};
  }

  cadastrarInsumo(frm: FormGroup) {
    console.log(this.insumo);

    if (this.insumo.id) {
      const novoInsumo = {
        id: this.insumo.id,
        produto: {
          id: this.insumo.produto,
        },
        materiaPrima: {
          id: this.insumo.materiaPrima,
        },
        quantidadeNecessaria: this.insumo.quantidadeNecessaria,
      };

      this.service.editar(novoInsumo).subscribe(() => {
        this.listar();
        this.insumo = {};
      });
    } else {
      const novoInsumo = {
        produto: {
          id: this.insumo.produto,
        },
        materiaPrima: {
          id: this.insumo.materiaPrima,
        },
        quantidadeNecessaria: this.insumo.quantidadeNecessaria,
      };

      this.service.cadInsumo(novoInsumo).subscribe(() => this.listar());
    }
  }

  editar(insumoEditar: any) {
    const novoInsumo = {
      id: insumoEditar.id,
      produto: insumoEditar.produto.id,

      materiaPrima: insumoEditar.materiaPrima.id,

      quantidadeNecessaria: insumoEditar.quantidadeNecessaria,
    };

    this.insumo = novoInsumo;
  }

  listar() {
    this.service.listar().subscribe((dados) => (this.insumos = dados));
  }

  deletar(id: number) {
    this.service.deletar(id).subscribe(() => this.listar());
  }
}
