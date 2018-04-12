import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rastreamento',
  templateUrl: './rastreamento.component.html',
  styleUrls: ['./rastreamento.component.css']
})
export class RastreamentoComponent implements OnInit {

  public rastreamentoList = [
    {
      title: 'Recebido na sucursal',
      step: 1,
      date: 1522954833057,
      user: 'Wellington.melo'
    },
    {
      title: 'Enviado para Matriz',
      step: 2,
      date: 1522954833057,
      user: 'Wellington.melo'
    },
    {
      title: 'Recebido na Matriz',
      step: 3,
      date: 1522954833057,
      user: 'Wellington.melo'
    },
    {
      title: 'Enviado para Processamento',
      step: 4,
      date: 1522954833057,
      user: 'Wellington.melo'
    },
    {
      title: 'Processamento Iniciado',
      step: 5,
      date: 1522954833057,
      user: 'Wellington.melo'
    },
    {
      title: 'Processamento finalizado',
      step: 6,
      date: 1522954833057,
      user: 'Wellington.melo'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
