import { Component } from '@angular/core';

import { LifecycleComponent } from './lifecycle/lifecycle';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.html',
    imports: [LifecycleComponent]
})
export class AppComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  onToggleLifecycleComponentVisibility() {
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
