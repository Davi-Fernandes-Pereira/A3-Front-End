import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MateriaPrimaService {
  constructor(private http: HttpClient) {}

  materiaPrimaUrl = 'http://localhost:8080/materiaPrima';


  listar() {
    return this.http.get<any[]>(`${this.materiaPrimaUrl}`);
  }

  deletar(id: number) {
    return this.http.delete(`${this.materiaPrimaUrl}/${id}`);
  }

  editar(materiaPrima: any) {
    return this.http.put(`${this.materiaPrimaUrl}/${materiaPrima.id}`, materiaPrima);
  }

  cadMateriaPrima(materiaPrima: any) {
    return this.http.post(this.materiaPrimaUrl, materiaPrima);
  }
}
