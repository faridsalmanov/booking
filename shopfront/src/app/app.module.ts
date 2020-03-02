import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatDialogModule, MatProgressSpinnerModule, MatButtonModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { ConfirmationPopover Module } from 'angular-confirmation-popover';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule ,
    MatDialogModule, 
    MatProgressSpinnerModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType:'succes',cancelButtonType:'danger',
      confirmText:'Tesdiq',cancelText:'Legv'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ ]
})
export class AppModule { }
