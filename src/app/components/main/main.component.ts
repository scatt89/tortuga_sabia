import {Component, OnInit} from "@angular/core";
import {AdviceService} from "../../services/advice.service";
import {Advice} from "../../model/advice.model";
import {Observable} from "rxjs";

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  advice: Observable<Advice>;
  advice_text: string;
  advice_author: string;
  button_text: string = "Nuevo Consejo";
  img_route: string = "../../../assets/turtle_images/turtle_1.jpg";

  constructor(private adviceService:AdviceService){}

  ngOnInit(): void{
    this.advice_text = "";
    this.advice_author = "";
    this.newAdvice();
  }

  newAdvice():void {
    this.advice = this.adviceService.getAdvice();
    this.advice.subscribe(
      res => {
        this.advice_text = res.advice;
        this.advice_author = res.author;
      },
      error => console.log(error),
      () => console.log("done!")
    );
  }
}
