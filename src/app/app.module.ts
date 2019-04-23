import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatTabsModule,MatSnackBarModule, MatDialogModule,MatProgressSpinnerModule, MatSelectModule,MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule } from '@angular/material';

import { AnnotateCaseComponent } from './annotate-case/annotate-case.component';
import { HomeComponent } from './home/home.component';

import { FsService } from "./fs.service";
 import * as firebase from 'firebase/app'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  
  {
    path: 'annotate-case/:name',
    component: AnnotateCaseComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AnnotateCaseComponent,
    HomeComponent
  ],
  imports: [
   BrowserModule,
   RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
     MatSelectModule,
     MatTabsModule,
     MatSnackBarModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'ai-legal-system'),
    AngularFirestoreModule
  ],
  providers: [FsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
