import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import {StorageService} from "../services/storage.service";

export const authGuard: CanActivateFn = (route, state) => {

  const storageService = inject(StorageService);
  const router = inject(Router);

  if (!storageService.isLoggedIn()) {
    router.navigate(['/login']);
  }

  return true
};
export const canActivateChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => authGuard(route, state);
