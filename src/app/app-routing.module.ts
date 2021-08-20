import { HomeRouterModule } from './home/home.router.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: ()=> import('./home/home.router.module').then(m=>m.HomeRouterModule)},
  { path: 'guid', loadChildren: ()=> import('./guid/guid.module').then(m=>m.GuidModule) },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
