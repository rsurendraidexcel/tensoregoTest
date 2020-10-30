import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TensorGoComponent } from './tensor-go/tensor-go.component';
import { TensorGoService } from './tensor-go.service';
import { ReactiveFormsModule } from '@angular/forms';
import { TensoregoInterceptor } from './tensorego-interceptor';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    TensorGoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    TensorGoService,
    {provide: HTTP_INTERCEPTORS, useClass: TensoregoInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
