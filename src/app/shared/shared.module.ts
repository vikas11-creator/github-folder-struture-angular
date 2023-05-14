import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
import { TabViewModule } from 'primeng/tabview';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { FileUploadModule } from 'primeng/fileupload';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';
import { StepsModule } from 'primeng/steps';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { AccordionModule } from 'primeng/accordion';
import { MenuModule } from 'primeng/menu';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SidebarModule } from 'primeng/sidebar';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { ErrorMessageComponent } from './component/error-message/error-message.component';

const IMP_EXP = [
  OverlayPanelModule,
  StepsModule,
  AccordionModule,
  CommonModule,
  TableModule,
  CalendarModule,
  SliderModule,
  DialogModule,
  MultiSelectModule,
  ContextMenuModule,
  DropdownModule,
  ButtonModule,
  InputTextModule,
  ProgressBarModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  InputSwitchModule,
  TreeModule,
  TreeTableModule,
  TabViewModule,
  RadioButtonModule,
  CheckboxModule,
  OrganizationChartModule,
  TreeModule,
  TreeModule,
  ConfirmDialogModule,
  FileUploadModule,
  InputNumberModule,
  ToggleButtonModule,
  PanelModule,
  MenuModule,
  TriStateCheckboxModule,
  SidebarModule,
];

@NgModule({
  declarations: [ErrorMessageComponent], //component, directive pipe
  imports: [...IMP_EXP], //module required
  exports: [...IMP_EXP,ErrorMessageComponent], //module required + some directive ,pipe and component that will be used in every module
  providers: [], //service
})
export class AppSharedModule {}
//Import this class AppSharedModule in root module & Other custom module by which we can use its directive ,component and pipe
