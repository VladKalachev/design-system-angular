import { NgModule, ModuleWithProviders } from '@angular/core';
import { DesignSystemAngularComponent } from './design-system-angular.component';
import { RowDirective } from './row.directive';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [DesignSystemAngularComponent, RowDirective, FormComponent],
  imports: [
  ],
  exports: [DesignSystemAngularComponent, FormComponent, RowDirective]
})
export class DesignSystemAngular {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DesignSystemAngular
    }
  }
 }
