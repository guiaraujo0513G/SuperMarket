import { Component, OnInit } from '@angular/core';
import { TransportadoraService } from '../transportadora.service';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-transportadora-list',
  templateUrl: './transportadora-list.component.html',
  styleUrls: ['./transportadora-list.component.scss']
})
export class TransportadoraListComponent implements OnInit {
 
    transportadoras: any = [] // Vetor vazio
 
    displayedColumns : string[] = ['nome','endereco','cnpj','telefone','email','editar','excluir']
 
  constructor(
      private transportadoraSrv : TransportadoraService,
      private snackBar : MatSnackBar
      ) { }
 
   async ngOnInit() {
      return this.transportadoras = await this.transportadoraSrv.listar()
      console.log(this.transportadoras)
  }
 
  async excluir(id : string){
      if(confirm('Deseja realmente excluir este item?')){
        try{
            // 1) Efetuar a exclusão
            await this.transportadoraSrv.excluir(id)
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
