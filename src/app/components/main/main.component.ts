import {Component} from "@angular/core";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  advice: string = "Elige las fresas como si de tu avuela se tratase, no te digo que será fácil te digo que no te debo pasta, cuidado con la luna llena pues en la vida hay cosas más importantes que trabajar.";
  button_text: string = "Nuevo Consejo";
  img_route: string = "../../../assets/turtle_images/turtle_1.jpg";
}
