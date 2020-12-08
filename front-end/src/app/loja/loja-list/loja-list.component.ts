import { Component, OnInit } from '@angular/core';
import { LojaService } from '../loja.service';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-loja-list',
  templateUrl: './loja-list.component.html',
  styleUrls: ['./loja-list.component.scss']
})
export class LojaListComponent implements OnInit {
 
    lojas: any = [] // Vetor vazio
 
    displayedColumns : string[] = ['numero_franquia','endereco','telefone','produto','editar','excluir']
 
  constructor(
      private lojaSrv : LojaService,
      private snackBar : MatSnackBar
      ) { }
 
   async ngOnInit() {
      return this.lojas = await this.lojaSrv.listar()
      console.log(this.lojas)
  }
 
  async excluir(id : string){
      if(confirm('Deseja realmente excluir este item?')){
        try{
            // 1) Efetuar a exclusão
            await this.lojaSrv.excluir(id)
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