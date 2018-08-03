import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencySelectorComponent } from './currency-selector.component';

import { SharedModule } from '../shared/shared.module';
import { ConfigService } from '../../../config.service';

@NgModule({
  imports: [CommonModule, SharedModule.forRoot(ConfigService)],
  declarations: [CurrencySelectorComponent],
  exports: [CurrencySelectorComponent],
  providers: [ConfigService]
})
export class CurrencySelectorModule {}
