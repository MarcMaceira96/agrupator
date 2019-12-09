import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputComponent } from './components/input/input.component';
import { ResultComponent } from './components/result/result.component';


const routes: Routes = [

  {path:'', redirectTo:'/input', pathMatch: 'full'},
  {path:'input', component: InputComponent},
  {path: 'result', component: ResultComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
