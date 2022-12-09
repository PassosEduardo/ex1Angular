import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ModulosWebFsComponent } from './pages/modulos-web-fs/modulos-web-fs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuloCreateComponent } from './pages/modulo-create/modulo-create.component';

const routes: Routes = [
  {path:"listmodulos",component: ModulosWebFsComponent},
  {path:"",redirectTo:"listmodulos",pathMatch:"full"},
  {path:"create", component: ModuloCreateComponent},
  {path:"**",component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
