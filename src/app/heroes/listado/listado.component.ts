import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
 
})

export class ListadoComponent{
  heroes:string[]=['Ironman','Spiderman','Superman','Hulk','Thor'];
  heroeBorrado:string='';
  borrandoHeroe(){   
     this.heroeBorrado= this.heroes.shift()||'';
  }
  
}
