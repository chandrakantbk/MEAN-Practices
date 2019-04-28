import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularBasicsComponent } from './angular-basics/angular-basics.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CustomerCrudComponent } from './customer-crud/customer-crud.component';
import { NestedComponent } from './nested/nested.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { CustomDirectviesComponent } from './custom-directvies/custom-directvies.component';
import { ViewChildComponent } from './view-child/view-child.component';

const routes: Routes = [
  { path: 'basics', component: AngularBasicsComponent },
  { path: 'pipes', component: AngularPipesComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'cust-crud', component: CustomerCrudComponent },
  { path: 'nested-comp', component: NestedComponent },
  { path: 'form-validation', component: FormValidationComponent },
  { path: 'custom-directives', component: CustomDirectviesComponent },
  { path: 'view-child', component: ViewChildComponent },
  
  {
    path: 'casestudy', component: CaseStudyComponent,
    children: [
      {
        path: 'users', component: UsersComponent,

        children: [
          { path: 'list', component: UsersListComponent },
          { path: 'table', component: UsersTableComponent },
        ]
      },

      { path: 'users/:userId', component: UsersComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'posts/:postId', component: PostsComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'comments', component: CommentsComponent },
      { path: 'photos', component: PhotosComponent },
    ]
  },
  { path: '**', redirectTo: "basics" }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
