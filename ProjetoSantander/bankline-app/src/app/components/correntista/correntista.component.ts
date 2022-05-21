import { Component, OnInit, TemplateRef } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-correntista',
  templateUrl: './correntista.component.html',
  styleUrls: ['./correntista.component.css']
})
export class CorrentistaComponent implements OnInit {

  modalRef?: BsModalRef;

  alert:boolean=false;

  cpf:any;
  nome:any;
  correntistas:any;
  correntista:any;

  constructor(
    private correntistaService: CorrentistaService,
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
    this.exibirCorrentistas();
  }
  
  closeAlert(){
    this.alert=false;
  }

  exibirCorrentistas(): void {
    this.correntistaService.list()
      .subscribe(
        data => {
          this.correntistas = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    const correntista = {
      cpf:this.cpf,
      nome:this.nome
    };
    console.log(correntista);
    this.correntistaService.create(correntista)
      .subscribe(
        response => {
          console.log(response);
          this.alert=true;
          this.exibirCorrentistas();
        },
        error => {
          console.log(error);
        });
  }

  delete(id:any) {
    this.correntistaService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.exibirCorrentistas();
        },
        error => {
          console.log(error);
        });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
