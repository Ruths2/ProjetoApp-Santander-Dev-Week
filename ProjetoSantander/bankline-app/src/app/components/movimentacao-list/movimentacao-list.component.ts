import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';
import { CorrentistaService } from 'src/app/services/correntista.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  movimentacoes:any;
  correntista:any;
  correntistas:any;

  constructor(
    private movimentacaoService: MovimentacaoService,
    private correntistaService: CorrentistaService,) { }

  ngOnInit(): void {
    this.exibirCorrentistas()
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

  listMovimentacoes(): void {
    this.movimentacaoService.findByIdConta(this.correntista.id)
    .subscribe(
        dataHora => {
          this.movimentacoes = dataHora;
          console.log(dataHora);
        },
        error => {
          console.log(error);
        });
  }

}
