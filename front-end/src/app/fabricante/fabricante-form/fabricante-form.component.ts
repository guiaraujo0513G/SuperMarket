import { Component, OnInit } from '@angular/core';
import { FabricanteService } from '../fabricante.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {​​​​ Location }​​​​ from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fabricante-form',
  templateUrl: './fabricante-form.component.html',
  styleUrls: ['./fabricante-form.component.scss']
})
export class FabricanteFormComponent implements OnInit {

    title : string = 'Novo Fabricante'

    fabricante : any = {}

  constructor(
      private fabricanteSrv : FabricanteService,
      private snackBar : MatSnackBar,
      private location : Location,
      private actRoute : ActivatedRoute
  ) { }

  async ngOnInit(){
      // Verificando se existe id na rota que trouxe ao formulário
      if(this.actRoute.snapshot.params['id']) {
          try{
          // 1) Trazer o registro do back-end para edição
            this.fabricante = await this.fabricanteSrv.obterUm(this.actRoute.snapshot.params['id'])
          // 2) Mudar o título da página
            this.title = 'Editando fabricante'
          }
          catch(erro) {
              console.log(erro)
              this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
              'Que pena!', { duration: 5000 })
          }
      }
  }

    async salvar(form : NgForm) {
    try {
        if(form.valid) {
            // 1) Enviar os dados para o back-end para serem salvos
            if(this.fabricante._id) {
                // _id existe, esse registro já foi salvo anteriormente
                // no BD e é caso de atualização
                await this.fabricanteSrv.atualizar(this.fabricante)
            }
            else {
                await this.fabricanteSrv.novo(this.fabricante)
            }
                
            // 2) Dar um feedback (mensagem) para o usuário
            this.snackBar.open('Dados salvos com sucesso. ', 'Entendi',
              { duration: 5000 })
            // 3) Voltar para a tela de listagem
            this.location.back()
        }    
    }
    catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível salvar os dados.', 'Que pena!',
        { duration: 5000 })
    }

  }

  voltar(form : NgForm) {
    let result = true
    // form.dirty = formulário "sujo", não salvo (via código)
    // form.touched = o conteúdo de algum campo foi alterado (via usuário)
    if(form.dirty && form.touched) {
      result = confirm('Há dados não salvos. Deseja realmente voltar?')
    }
    // Retorna à página anterior se resposta foi positiva ou se o formulário
    // estiver "limpo"
    if(result) this.location.back()
  }

}
