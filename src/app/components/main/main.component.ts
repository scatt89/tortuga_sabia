import {Component, OnInit} from "@angular/core";
import {AdviceService} from "../../services/advice.service";
import {Advice} from "../../model/advice.model";
import {ImageService} from "../../services/image.service";

/**
 * Created by Marrarichy Da Silva Garcia on 3/01/17.
 * E-mail: dasilvagarciam@gmail.com
 */

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  advice: Advice;
  button_text: string;
  img_route: string;

  constructor(private adviceService:AdviceService, private imageService:ImageService){}

  ngOnInit(): void{
    this.advice = {"advice":"","author":""};
    this.button_text = "Nuevo Consejo";
    this.img_route = "../../../assets/turtle_images/turtle_1.jpg";
    this.newAdvice();
    this.updateImage();
  }

  newAdvice():void {
    this.adviceService.getAdvice().subscribe(
      res => {
        this.advice.advice = res.advice;
        this.advice.author = res.author;
      },
      error => console.log(error),
      () => console.log("Advice done!")
    );
  }

  updateImage():void{
    this.imageService.getImage().subscribe(
      res => this.img_route = res,
      error => console.log(error),
      () => console.log("Image done!")
    );
  }
}
