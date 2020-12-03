import { Component, OnInit } from '@angular/core';
import { FabricanteService } from '../fabricante.service';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-fabricante-list',
  templateUrl: './fabricante-list.component.html',
  styleUrls: ['./fabricante-list.component.scss']
})
export class FabricanteListComponent implements OnInit {
 
    fabricantes: any = [] // Vetor vazio
 
    displayedColumns : string[] = ['nome','endereco','cnpj','telefone','email','editar','excluir']
 
  constructor(
      private fabricanteSrv : FabricanteService,
      private snackBar : MatSnackBar
      ) { }
 
   async ngOnInit() {
      return this.fabricantes = await this.fabricanteSrv.listar()
      console.log(this.fabricantes)
  }
 
  async excluir(id : string){
      if(confirm('Deseja realmente excluir este item?')){
        try{
            // 1) Efetuar a exclusão
            await this.fabricanteSrv.excluir(id)
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