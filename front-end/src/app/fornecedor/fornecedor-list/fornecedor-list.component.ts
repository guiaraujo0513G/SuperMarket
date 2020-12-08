import { Component, OnInit } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-fornecedor-list',
  templateUrl: './fornecedor-list.component.html',
  styleUrls: ['./fornecedor-list.component.scss']
})
export class FornecedorListComponent implements OnInit {
 
    fornecedors: any = [] // Vetor vazio
 
    displayedColumns : string[] = ['nome','endereco','cnpj','telefone','email','editar','excluir']
 
  constructor(
      private fornecedorSrv : FornecedorService,
      private snackBar : MatSnackBar
      ) { }
 
   async ngOnInit() {
      return this.fornecedors = await this.fornecedorSrv.listar()
      console.log(this.fornecedors)
  }
 
  async excluir(id : string){
      if(confirm('Deseja realmente excluir este item?')){
        try{
            // 1) Efetuar a exclusão
            await this.fornecedorSrv.excluir(id)
            // 2) Atualizar os dados da tabela
            this.ngOnInit()
            // 3) Dar um feedback de sucesso para o usuário
            this.snackBar.open('Item excluido com sucesso.','Entendi',{
                duration: 5000 // 5 segundos
            })
        }
        catch(erro){
            // 4) Dar um feedback de erro para o usuário
            this.snackBar.open('ERRO: não foi possivel excluir este item.','Que pena!',{
                duration: 5000 // 5 segundos
            })
        }
      }
  }
 
}