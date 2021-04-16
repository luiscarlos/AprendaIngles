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
  public instrucao: string='Aprendendo Inglês'
  public resposta: string=''

  public rodada: number = 0
  
  
  public progresso: number = 0
  public rodadaFrase:Frase
  constructor() {
    this.rodadaFrase = this.frases[0]
    this.atualizaRodada()
     }

  ngOnInit(): void {
  }
  public atualizaResposta(resposta: Event): void{
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
    
  }

  public verificarRespostas(): void {
    
    if(this.rodadaFrase.frasePtBr.toLowerCase() == this.resposta.toLowerCase()){
    
      alert('A tradução esta correta')
   
      // trocar pergunta da rodada
      this.rodada++

      // atualiza o objeto da rodada frase
      this.atualizaRodada()
   

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      

    }else{
      alert('A tradução esta errada')

      
    }
 
  }

  public atualizaRodada(): void{
    // define a frase da rodada com base em alguma logica
    this.rodadaFrase = this.frases[this.rodada]

    // limpar resposta
    this.resposta=''
    
  }
}
