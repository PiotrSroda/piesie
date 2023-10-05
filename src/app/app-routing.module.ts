import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiesieComponent } from './piesie/piesie.component';

const routes: Routes = [
  { path: ':rasa', component: PiesieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
