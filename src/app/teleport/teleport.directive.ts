import { Directive, OnChanges, SimpleChanges, OnDestroy, Input, TemplateRef } from '@angular/core';
import { TeleportService, TeleportInstance } from './teleport.service';

@Directive({
  selector: 'ng-template[wmTeleport]'
})
export class TeleportDirective implements OnChanges, OnDestroy {

  constructor(private teleport: TeleportService, private template: TemplateRef<any>) {}

  @Input('wmTeleport') target: string;

  ngOnChanges(changes: SimpleChanges) {

    const target = changes.target;
    if(!target) { return; }

    // Clears the previous target, if any
    target.previousValue && this.teleport.activate({ [target.previousValue]: null });

    // Teleports the template to the new target portal
    target.currentValue && this.teleport.activate({ [target.currentValue]: this.template });
  }

  ngOnDestroy() {
    // Clears the portal on destroy
    this.target && this.teleport.activate({ [this.target]: null });
  }
}