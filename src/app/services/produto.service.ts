import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  constructor(private http: HttpClient) {}

  produtoUrl = 'http://localhost:8080/produto';

  listar() {
    return this.http.get<any[]>(`${this.produtoUrl}`);
  }

  deletar(id: number) {
    return this.http.delete(`${this.produtoUrl}/${id}`);
  }

  editar(produto: any) {
    return this.http.put(`${this.produtoUrl}/${produto.id}`, produto);
  }

  cadProduto(produto: any) {
    return this.http.post(this.produtoUrl, produto);
  }
}
