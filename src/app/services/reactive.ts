import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  roleChanged = new EventEmitter<string>();

  emitRoleChange(role: string) {
    this.roleChanged.emit(role);
  }
}
