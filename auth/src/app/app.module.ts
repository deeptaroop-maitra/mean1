import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule,MatCardModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatExpansionModule,
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'login', component: LoginComponent},
      {path:'home', component: HomeComponent},
      {path:'profile', component: ProfileComponent},
      {path:'register', component: RegisterComponent}
    ]),
    BrowserAnimationsModule
  ],
  providers: [AuthService, 
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
