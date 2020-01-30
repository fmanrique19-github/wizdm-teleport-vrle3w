import { Component, Attribute, Input, TemplateRef } from '@angular/core';
import { switchMap, filter, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { TeleportService } from './teleport.service';

@Component({
  selector: 'wm-portal',
  template: '<ng-container *ngTemplateOutlet="template$ | async; context: context"></ng-container>'
})
export class TeleportComponent {

  readonly template$: Observable<TemplateRef<Object|null>>;

  @Input() context: Object|null = null;
  
  constructor(@Attribute('name') name: string, private teleport: TeleportService) {

    // Builds the template observable
    this.template$ = teleport.pipe(
      
      // Filters only those instances targetting this very portal
      filter( instance => !instance || (name in instance) ), 
      
      // Returns the template or null
      map( instance => instance && instance[name] )
    );
  }
}