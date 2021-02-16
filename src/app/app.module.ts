import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './login/login.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AngularDataTableModule } from 'angular-data-table-library';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    LoginComponent,
    BlogListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
