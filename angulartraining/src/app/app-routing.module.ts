import { NgModule } from '@angular/core';
import { HerosComponent } from './heros/heros.component';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contactUs/contactUs.component';


const routes: Routes = [
  { path: 'heroes', component: HerosComponent},
  {path:"contactUs", component:ContactUsComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
