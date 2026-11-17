import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { OrderInformation } from './order-information/order-information';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';

@NgModule({
  declarations: [App, OrderInformation, Navbar, Footer],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration()],
  bootstrap: [App],
})
export class AppModule {}
