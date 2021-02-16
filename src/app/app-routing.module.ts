import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [

  { path: 'blogs', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blogList', component: BlogListComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
