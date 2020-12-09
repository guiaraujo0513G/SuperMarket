import { FabricanteService } from './../../fabricante/fabricante.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProdutoService } from './../produto.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TransportadoraService } from 'src/app/transportadora/transportadora.service';
import { FornecedorService } from 'src/app/fornecedor/fornecedor.service';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  title : string = 'Novo produto'

  produto : any = {} // Objeto vazio, nome da entidade no SINGULAR
  
  fabricantes : any = []

  fornecedores : any = []

  transportadoras : any = []

  constructor(
    private produtoSrv : ProdutoService,
    private fabricanteSrv : FabricanteService,
    private fornecedorSrv : FornecedorService,
    private transportadoraSrv : TransportadoraService,
    private snackBar : MatSnackBar,
    private location : Location,
    private actRoute : ActivatedRoute
  ) { }

  async ngOnInit() {
    // Verificando se existe id na rota que trouxe ao formulário
    if(this.actRoute.snapshot.params['id']) {
      try {
        // 1) Trazer o registro do back-end para edição
        this.produto = await this.produtoSrv.obterUm(this.actRoute.snapshot.params['id'])
        // 2) Mudar o título da página
        this.title = 'Editando produto'
      }
      catch(erro) {
        console.log(erro)
        this.snackBar.open('ERRO: não foi possível carregar os dados para edição.',
          'Que pena!', { duration: 5000 })
      }
    }
    try {
      this.fabricantes = await this.fabricanteSrv.listar()
      this.fornecedores = await this.fornecedorSrv.listar()
      this.transportadoras = await this.transportadoraSrv.listar()
    }
    catch(erro) {
      console.log(erro)
      this.snackBar.open('ERRO: não foi possível carregar todos os dados do formulário.',
        'Que pena!', { duration: 5000 })
    }
  }

   async salvar(form : NgForm) {
    try {
      if(form.valid) {
        // 1) Enviar os dados para o back-end para serem salvos
        if(this.produto._id) {
          // _id existe, esse registro já foi salvo anteriormente
          // no BD e é caso de atualização
          await this.produtoSrv.atualizar(this.produto)
        }
        else {
          await this.produtoSrv.novo(this.produto)
        }
        // 2) Dar um feedback (mensagem) para o usuário
        this.snackBar.open('Dados salvos com sucesso.', 'Entendi',
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