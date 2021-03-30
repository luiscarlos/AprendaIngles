import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

//import { Console } from 'node:console';


import {Frase} from '../shared/frase.model'
import {FRASES} from './frase-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  public frases: Frase[] = FRASES
  public instrucao: String='Aprendendo Inglês'
  public resposta: String=''
  constructor() {console.log(this.frases) }

  ngOnInit(): void {
  }
  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
    
  }

  public verificarRespostas(): void {
    console.log('Verificar respostas', this.resposta)
  }
}
