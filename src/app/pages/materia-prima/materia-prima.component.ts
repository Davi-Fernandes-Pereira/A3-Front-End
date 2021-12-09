import { InsumoService } from './../../services/insumo.service';
import { FormGroup } from '@angular/forms';
import { MateriaPrimaService } from './../../services/materia-prima.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-materia-prima',
  templateUrl: './materia-prima.component.html',
  styleUrls: ['./materia-prima.component.scss'],
})
export class MateriaPrimaComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Nome', 'Quantidade', 'Ações'];
  materiaPrima: any;

  listmateriaPrima: Array<any> = [];

  constructor(
    private service: MateriaPrimaService,
    private insumoService: InsumoService
  ) {}

  ngOnInit(): void {
    this.listar();

    this.materiaPrima = {};
  }

  cadastrarMateriaPrima(frm: FormGroup) {
    if (this.materiaPrima.id) {
      this.service.editar(this.materiaPrima).subscribe(() => {
        this.listar();
        this.materiaPrima = {};
      });
    } else {
      this.service
        .cadMateriaPrima(this.materiaPrima)
        .subscribe(() => this.listar());
    }
  }

  listar() {
    this.service.listar().subscribe((dados) => (this.listmateriaPrima = dados));
  }

  deletar(id: number) {
    this.insumoService.listar().subscribe((insumos) => {
      let deleta = true;

      insumos.forEach((element) => {
        if (id === element.materiaPrima.id) {
          deleta = false;
          alert('Materia Prima vinculada a um insumo. Impossível excluir!');
        }
      });

      if (deleta) {
        this.service.deletar(id).subscribe(() => this.listar());
      }
    });
  }

  editar(materiaPrimaEditar: any) {
    this.materiaPrima = materiaPrimaEditar;
  }
}
