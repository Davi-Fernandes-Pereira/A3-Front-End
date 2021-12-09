import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RelService {
  constructor(private http: HttpClient) {}

  relUrl = 'http://localhost:8080/insumo/rel';

  gerar() {
    return this.http.get(this.relUrl);
  }
}
