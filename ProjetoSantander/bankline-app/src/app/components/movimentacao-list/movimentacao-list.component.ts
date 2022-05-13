import { Component, OnInit } from '@angular/core';
import { MovimentacaoService } from 'src/app/services/movimentacao.service';


@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  movimentacoes:any;

  constructor(private movimentacaoService: MovimentacaoService,) { }

  ngOnInit(): void {
    this.listMovimentacoes();
  }

  listMovimentacoes(): void {
    this.movimentacaoService.list()
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
