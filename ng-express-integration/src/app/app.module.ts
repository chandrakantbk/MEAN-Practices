import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { TodosComponent } from './todos/todos.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { CustomerCrudComponent } from './customer-crud/customer-crud.component';
import { GenderPipe } from './pipes/gender.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NestedComponent } from './nested/nested.component';
import { CustomDirectviesComponent } from './custom-directvies/custom-directvies.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { FgColorDirective } from './directives/fg-color.directive';
import { BgColorDirective } from './directives/bg-color.directive';
import { NgShowDirective } from './directives/ng-show.directive';
import { NgHideDirective } from './directives/ng-hide.directive';
import { NumberComponent } from './number/number.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';

@NgModule({
  declarations: [//components,directives,pipes
    AppComponent, AngularBasicsComponent, AngularPipesComponent, TechnologiesComponent,
     CaseStudyComponent, UsersComponent, PostsComponent, TodosComponent, 
     AlbumsComponent, PhotosComponent, CommentsComponent,
      UsersListComponent, UsersTableComponent, CustomerCrudComponent, 
      GenderPipe, OrderByPipe, NestedComponent, CustomDirectviesComponent, 
      FormValidationComponent, CountryComponent, StateComponent, CityComponent,
       StudentFormComponent, ReactiveFormComponent, ViewChildComponent, FgColorDirective,
        BgColorDirective, NgShowDirective, NgHideDirective, NumberComponent, StopwatchComponent
  ],
  imports: [//modules
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule
  ],
  providers: [],//services
  bootstrap: [AppComponent]//components
})
export class AppModule { }
