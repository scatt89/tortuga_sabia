import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
/**
 * Created by Marrarichy Da Silva Garcia on 3/01/17.
 * E-mail: dasilvagarciam@gmail.com
 */

const IMG_FOLDER = "../../assets/turtle_images/";

@Injectable()
export class ImageService{

  getImage():Observable<string>{
    let img_path  = IMG_FOLDER+"turtle_"+Math.floor(Math.random()*7+1)+".jpg";
    return Observable.create(observer => {
      observer.next(img_path);
      observer.complete();
    });
  }

}
