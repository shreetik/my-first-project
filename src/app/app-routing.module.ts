import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { LinkPageComponent } from './Components/link-page/link-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

const routes: Routes = [
  // {
  //   path:"LinkPage",
  //   component:LinkPageComponent,
  //   pathMatch:"full"

  // },
  // {
  //   path:'',
  //   component:HomeComponent,
  //   pathMatch:"full"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
