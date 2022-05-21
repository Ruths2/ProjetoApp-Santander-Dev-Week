import { Component, OnInit } from '@angular/core';
import { CorrentistaService } from 'src/app/services/correntista.service';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';

@Component({
  selector: 'app-movimentacao-new',
  templateUrl: './movimentacao-new.component.html',
  styleUrls: ['./movimentacao-new.component.css']
})
export class MovimentacaoNewComponent implements OnInit {

  alert:boolean=false;

  correntistas:any;
  correntista:any;

  dataHora:any;
  valor:any;
  descricao:any;
  tipo:any;

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,
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
        dataHora => {
          this.correntistas = dataHora;
          console.log(dataHora);
        },
        error => {
          console.log(error);
        });
  }

  save(): void {
    console.log(this.correntista)
    const movimentacao = {
      valor:this.valor,
      descricao:this.descricao,
      tipo:this.tipo,
      idConta:this.correntista.id,
      dataHora:this.dataHora
    };

    console.log(movimentacao);
    this.movimentacaoService.create(movimentacao)
      .subscribe(
        response => {
          console.log(response);
          this.alert=true;
        },
        error => {
          console.log(error);
        });
  }

}

