import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InsumoService {
  constructor(private http: HttpClient) {}
  insumoUrl = 'http://localhost:8080/insumo';

  listar() {
    return this.http.get<any[]>(`${this.insumoUrl}`);
  }

  deletar(id: number) {
    return this.http.delete(`${this.insumoUrl}/${id}`);
  }

  editar(insumo: any) {
    return this.http.put(`${this.insumoUrl}/${insumo.id}`, insumo);
  }

  cadInsumo(insumo: any) {
    return this.http.post(this.insumoUrl, insumo);
  }

}
