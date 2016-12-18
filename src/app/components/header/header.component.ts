import {Component} from "@angular/core";

interface menuItem{
  title: string,
  link: string
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{
  header_title: string = "La tortuga Sabia";
  menu_list: menuItem[] = [{title:"Inicio",link:"#"}, {title:"Login",link:"#"}, {title:"Acerca de",link:"#"}, {title:"Contacto",link:"#"}];

}
