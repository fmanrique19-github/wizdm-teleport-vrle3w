import { Injectable, TemplateRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TeleportInstance {
  [target: string]: TemplateRef<Object|null>;
}

@Injectable()
export class TeleportService extends BehaviorSubject<TeleportInstance> {

  constructor() { super(null); }

  public activate(instance: TeleportInstance) {
    this.next(instance);
  }

  public clearAll() { 
    this.next(null);
  }
}