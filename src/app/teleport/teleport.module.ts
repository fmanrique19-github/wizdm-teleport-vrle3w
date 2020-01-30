import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeleportService } from './teleport.service';
import { TeleportDirective } from './teleport.directive';
import { TeleportComponent } from './teleport.component';

@NgModule({
  imports: [ CommonModule ],
  providers: [ TeleportService ],
  declarations: [ TeleportDirective, TeleportComponent ],
  exports: [ TeleportDirective, TeleportComponent ]
})
export class TeleportModule { }