import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Advice} from "../model/advice.model";
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

/**
 * Created by Marrarichy Da Silva Garcia on 3/01/17.
 * E-mail: dasilvagarciam@gmail.com
 */

const BASE_URL = "http://localhost:8080/frases";

@Injectable()
export class AdviceService{

  constructor(private http:Http){
  }

  private getAdvices():Observable<Advice[]>{
    return this.http.get(BASE_URL+'/')
      .map((response: Response) => response.json() as Advice[])
      .catch(error => this.handleError(error));
  }

  getAdvice():Observable<Advice>{
    return this.http.get(BASE_URL+'/random')
      .map((response: Response) => response.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    console.error(error);
    return Observable.throw("Server error ("+error.status+" ): "+error.text());
  }

}
