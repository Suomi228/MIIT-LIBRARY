import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Inject, inject } from '@angular/core';
export const RoleGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state:RouterStateSnapshot
) => {
  const router:Router = inject(Router);
  const protectedRoutes: string[] = ["/admin"];
  return protectedRoutes.includes(state.url) && localStorage.getItem('role')!=='ADMIN'
  ?router.navigate(['/home'])
  :true;
};
