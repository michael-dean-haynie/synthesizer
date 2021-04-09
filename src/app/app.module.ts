import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SynthesizeComponent } from './components/synthesize/synthesize.component';


const routes: Routes = [
  { path: 'synthesize', component: SynthesizeComponent },
  { path: '', redirectTo: '/synthesize', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    SynthesizeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
