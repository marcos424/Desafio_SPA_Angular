import { Component, Input, OnInit } from '@angular/core';
import { motoristas } from '../model/motoristas';

@Component({
  selector: 'spa-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class carroComponent implements OnInit {

  constructor() { }

  exibeTabela: boolean = false;

  listaMotoristas: motoristas[] = [
    {nome: 'Paulo José dos Santos', idade: 32, documento: 325457},
    {nome: 'Marcos Fernandes de Souza', idade: 48, documento: 254568},
    {nome: 'Adriano Barbosa Pereira', idade: 28, documento: 621394},
  ];

  displayedColumns: string[] = ['Nome', 'Idade', 'Documento'];

  ngOnInit(): void {
  }

 @Input() numeroInicial: number = 2;

  exibirTabela(){
    this.exibeTabela = true;
  }

}


