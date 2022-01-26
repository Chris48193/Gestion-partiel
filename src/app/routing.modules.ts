import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsfatesComponent } from './isfates/isfates.component';
import { PartielsComponent } from './partiels/partiels.component';

const routes: Routes = [
  { path: '', redirectTo: '/acceuil', pathMatch: 'full' },
  { path:'acceuil', component: IsfatesComponent },
  { path:'partiels', component: PartielsComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
