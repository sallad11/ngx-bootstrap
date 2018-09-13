import { async, TestBed } from '@angular/core/testing';
import { AlertModule } from './alert/src/alert.module';
import { AccordionModule } from './accordion/src/accordion.module';
import { ButtonsModule } from './buttons/src/buttons.module';
import { CarouselModule } from './carousel/src/carousel.module';
import { CollapseModule } from './collapse/src/collapse.module';
import { DatepickerModule } from './datepicker/src/datepicker.module';
import { BsDropdownModule } from './dropdown/src/bs-dropdown.module';
import { ModalModule } from './modal/src/modal.module';
import { PaginationModule } from './pagination/src/pagination.module';
import { ProgressbarModule } from './progressbar/src/progressbar.module';
import { PopoverModule } from './popover/src/popover.module';
import { RatingModule } from './rating/src/rating.module';
import { TabsModule } from './tabs/src/tabs.module';
import { TimepickerModule } from './timepicker/src/timepicker.module';
import { TooltipModule } from './tooltip/src/tooltip.module';
import { TypeaheadModule } from './typeahead/src/typeahead.module';

describe('datepicker: [bsDatepickerDayDecorator]', () => {
  beforeEach(
    async(() => TestBed.configureTestingModule({
        imports: [
          AccordionModule.forRoot(),
          AlertModule.forRoot(),
          ButtonsModule.forRoot(),
          CarouselModule.forRoot(),
          CollapseModule.forRoot(),
          DatepickerModule.forRoot(),
          BsDropdownModule.forRoot(),
          ModalModule.forRoot(),
          PaginationModule.forRoot(),
          ProgressbarModule.forRoot(),
          PopoverModule.forRoot(),
          RatingModule.forRoot(),
          TabsModule.forRoot(),
          TimepickerModule.forRoot(),
          TooltipModule.forRoot(),
          TypeaheadModule.forRoot()
        ]
      }).compileComponents()
    ));
});
