import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}
  API: string = 'http://localhost:8080/api/login';
  http = inject(HttpClient);

  logar(login: Login): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API + '/deslogar');
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  hasPermission(role: string): boolean {
    const token = this.getToken();
    if (token) {
      const decodedToken: any = jwtDecode(token);

      if (!decodedToken) {
        console.error('Erro ao decodificar o token.');
        return false;
      }
      const userRoles = decodedToken.role;
      if (userRoles == role) {
        return true;
      } else {
        console.log(`Sem permissão para a role: ${role}`);
      }
    }
    return false;
  }
}
