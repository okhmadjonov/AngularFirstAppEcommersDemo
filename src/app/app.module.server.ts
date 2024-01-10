import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { RouterLink } from '@angular/router';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [AppModule, ServerModule, RouterLink],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
