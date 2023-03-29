import { NdbxIconModule } from '@allianz/ngx-ndbx/icon';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NxAccordionModule } from '@aposin/ng-aquila/accordion';
import { NxButtonModule } from '@aposin/ng-aquila/button';
import { NxCheckboxModule } from '@aposin/ng-aquila/checkbox';
import { NxCircleToggleModule } from '@aposin/ng-aquila/circle-toggle';
import { NxDatefieldModule, NxNativeDateModule } from '@aposin/ng-aquila/datefield';
import { NxDynamicTableModule } from '@aposin/ng-aquila/dynamic-table';
import { NxFooterModule } from '@aposin/ng-aquila/footer';
import { NxGridModule } from '@aposin/ng-aquila/grid';
import { NxHeaderModule } from '@aposin/ng-aquila/header';
import { NxHeadlineModule } from '@aposin/ng-aquila/headline';
import { NxIconModule } from '@aposin/ng-aquila/icon';
import { NxImageModule } from '@aposin/ng-aquila/image';
import { NxInputModule } from '@aposin/ng-aquila/input';
import { NxLinkModule } from '@aposin/ng-aquila/link';
import { NxListModule } from '@aposin/ng-aquila/list';
import { NxMessageModule } from '@aposin/ng-aquila/message';
import { NxModalModule } from '@aposin/ng-aquila/modal';
import { NxNumberStepperModule } from '@aposin/ng-aquila/number-stepper';
import { NxPopoverModule } from '@aposin/ng-aquila/popover';
import { NxProgressStepperModule } from '@aposin/ng-aquila/progress-stepper';
import { NxRadioModule } from '@aposin/ng-aquila/radio-button';
import { NxRatingModule } from '@aposin/ng-aquila/rating';
import { NxSliderModule } from '@aposin/ng-aquila/slider';
import { NxSwitcherModule } from '@aposin/ng-aquila/switcher';
import { NxTableModule } from '@aposin/ng-aquila/table';
import { NxTabsModule } from '@aposin/ng-aquila/tabs';
import { NxTaglistModule } from '@aposin/ng-aquila/taglist';

import { AppComponent } from './app.component';
import { ListOrderedComponent } from './list-ordered/list-ordered.component';
import { MoreAboutUsComponent } from './more-about-us/more-about-us.component';
import { PizzaCrustComponent } from './pizza-crust/pizza-crust.component';
import { PizzaDiameterComponent } from './pizza-diameter/pizza-diameter.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ServiceRatingComponent } from './service-rating/service-rating.component';
import { SpecialWishesComponent } from './special-wishes/special-wishes.component';
import { StepButtonContainerComponent } from './step-button-container/step-button-container.component';
import { SummaryComponent } from './summary/summary.component';
import { WayOfDeliveryComponent } from './way-of-delivery/way-of-delivery.component';

@NgModule({
    declarations: [
        AppComponent,
        SampleFormComponent,
        ListOrderedComponent,
        WayOfDeliveryComponent,
        MoreAboutUsComponent,
        StepButtonContainerComponent,
        PizzaCrustComponent,
        SpecialWishesComponent,
        PizzaDiameterComponent,
        ServiceRatingComponent,
        SummaryComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NxHeaderModule,
        NxLinkModule,
        NxImageModule,
        NxFooterModule,
        NxInputModule,
        NxGridModule,
        NxPopoverModule,
        NxMessageModule,
        NxIconModule,
        NxButtonModule,
        NxTabsModule,
        NxSwitcherModule,
        NxAccordionModule,
        NxCheckboxModule,
        NxListModule,
        NxNumberStepperModule,
        NxDatefieldModule,
        NxNativeDateModule,
        NxTaglistModule,
        NxTableModule,
        NxProgressStepperModule,
        NxRadioModule,
        NxDynamicTableModule,
        NxHeadlineModule,
        NxRatingModule,
        NxCircleToggleModule,
        NxSliderModule,
        NxModalModule.forRoot(),
        NdbxIconModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
