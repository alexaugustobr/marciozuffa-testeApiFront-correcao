import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ErrorHandlerService } from './error-handler.service';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { MessageService, ConfirmationService } from 'primeng/api';
import { LancamentoService } from '../lancamentos/lancamento.service';
import { PessoaService } from '../pessoas/pessoa.service';

import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [ NavbarComponent ],
  imports: [
    CommonModule,
    ToastModule,
    ConfirmDialogModule,
  ],

  exports: [ 
    NavbarComponent,
    ToastModule,
    ConfirmDialogModule
   ],

  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    ErrorHandlerService,
    LancamentoService,
    PessoaService,
    MessageService,
    ConfirmationService
  ]
})
export class CoreModule { }
