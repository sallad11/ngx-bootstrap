/* tslint:disable: max-classes-per-file */
import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AccordionComponent } from './accordion.component';
import { AccordionConfig } from './accordion.config';
import { AccordionPanelComponent } from './accordion-group.component';
import { CollapseDirective } from 'ngx-bootstrap/collapse';

// todo: rewrite
@NgModule({
  declarations: [CollapseDirective],
  exports: [CollapseDirective]
})
export class CollapseModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: CollapseModule, providers: [] };
  }
}


@NgModule({
  imports: [CommonModule, CollapseModule],
  declarations: [AccordionComponent, AccordionPanelComponent],
  exports: [AccordionComponent, AccordionPanelComponent]
})
export class AccordionModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AccordionModule, providers: [AccordionConfig] };
  }
}
