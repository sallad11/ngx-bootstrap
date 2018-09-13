/* tslint:disable: max-classes-per-file */
import { AccordionModule } from './accordion/src/accordion.module';
import { AlertModule } from './alert/src/alert.module';
import { ButtonsModule } from './buttons/src/buttons.module';
import { CarouselModule } from './carousel/src/carousel.module';
import { CollapseModule } from './collapse/src/collapse.module';
import { BsDaterangepickerConfig } from './datepicker/src/bs-daterangepicker.config';
import { DatepickerModule } from './datepicker/src/datepicker.module';
import { BsDropdownModule } from './dropdown/src/bs-dropdown.module';
import { ModalModule } from './modal/src/modal.module';
import { PaginationModule } from './pagination/src/pagination.module';
import { PopoverModule } from './popover/src/popover.module';
import { ProgressbarModule } from './progressbar/src/progressbar.module';
import { RatingModule } from './rating/src/rating.module';
import { SortableModule } from './sortable/src/index';
import { TabsModule } from './tabs/src/tabs.module';
import { TimepickerModule } from './timepicker/src/timepicker.module';
import { TooltipModule } from './tooltip/src/tooltip.module';
import { TypeaheadModule } from './typeahead/src/typeahead.module';

export { listLocales } from './chronos/src/locale/locales';
export { setTheme } from './utils/src/theme-provider';

export {
  AccordionComponent,
  AccordionConfig,
  AccordionModule,
  AccordionPanelComponent
} from './accordion/src/index';

export { AlertComponent, AlertConfig, AlertModule } from './alert/src/index';

export {
  ButtonCheckboxDirective,
  ButtonRadioDirective,
  ButtonsModule
} from './buttons/src/index';

export {
  CarouselComponent,
  CarouselConfig,
  CarouselModule,
  SlideComponent
} from './carousel/src/index';

export { CollapseDirective, CollapseModule } from './collapse/src/index';

export {
  DateFormatter,
  DatePickerComponent,
  DatepickerConfig,
  DatepickerModule,
  DayPickerComponent,
  MonthPickerComponent,
  YearPickerComponent,
  BsDatepickerModule,
  BsDatepickerConfig,
  BsDaterangepickerConfig,
  BsLocaleService,
  BsDaterangepickerDirective,
  BsDatepickerDirective
} from './datepicker/src/index';

export {
  ModalDirective,
  ModalOptions,
  ModalBackdropOptions,
  ModalBackdropComponent,
  ModalModule,
  BsModalRef,
  BsModalService
} from './modal/src/index';

export {
  BsDropdownModule,
  BsDropdownConfig,
  BsDropdownState,
  BsDropdownContainerComponent,
  BsDropdownDirective,
  BsDropdownMenuDirective,
  BsDropdownToggleDirective
} from './dropdown/src/index';

export {
  PagerComponent,
  PaginationComponent,
  PaginationConfig,
  PaginationModule,
  PageChangedEvent
} from './pagination/src/index';

export {
  BarComponent,
  ProgressbarComponent,
  ProgressbarConfig,
  ProgressbarModule
} from './progressbar/src/index';

export { RatingComponent, RatingModule } from './rating/src/index';

export {
  DraggableItem,
  DraggableItemService,
  SortableItem,
  SortableComponent,
  SortableModule
} from './sortable/src/index';

export {
  NgTranscludeDirective,
  TabDirective,
  TabHeadingDirective,
  TabsetComponent,
  TabsetConfig,
  TabsModule
} from './tabs/src/index';

export {
  TimepickerComponent,
  TimepickerConfig,
  TimepickerModule
} from './timepicker/src/index';

export {
  TooltipConfig,
  TooltipContainerComponent,
  TooltipDirective,
  TooltipModule
} from './tooltip/src/index';

export {
  TypeaheadOptions,
  TypeaheadContainerComponent,
  TypeaheadDirective,
  TypeaheadMatch,
  TypeaheadModule
} from './typeahead/src/index';

export {
  PopoverConfig,
  PopoverContainerComponent,
  PopoverDirective,
  PopoverModule
} from './popover/src/index';

export { OnChange, LinkedList, isBs3, Trigger, Utils } from './utils/src/index';

export {
  ComponentLoader,
  ComponentLoaderFactory,
  ContentRef
} from './component-loader/src/index';

export {
  Positioning,
  PositioningOptions,
  PositioningService,
  positionElements
} from './positioning/src/index';

export { defineLocale, getSetGlobalLocale, LocaleData } from './chronos/src/index';

export * from './locale';
