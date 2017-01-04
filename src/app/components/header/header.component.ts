import {Component} from "@angular/core";

interface menuItem{
  title: string,
  link: string
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  header_title: string = "La tortuga Sabia";
  menu_list: menuItem[] = [{title:"Inicio",link:"/home"}, {title:"Login",link:"login"}, {title:"Acerca de",link:"about"}, {title:"Contacto",link:"contact"}];
}
