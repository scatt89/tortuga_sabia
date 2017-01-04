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
  menu_list: menuItem[] = [{title:"Inicio",link:"/home"}, {title:"Login",link:"login"}, {title:"Acerca de",link:"about"}, {title:"Contacto",link:"contact"}];
  hide_menu: boolean;
  hide_burger: boolean;

  constructor(){
    this.hide_menu = window.innerWidth <= 500?true:false;
    this.hide_burger = window.innerWidth > 500?true:false;
  }

  getBurgerStyle(){
    return this.hide_burger?{'display':'none'}:{'display':'initial'};
  }

  getMenuStyle(){
    return this.hide_menu?{'display':'none'}:{'display':'initial'};
  }

  toggleMenu(){
    this.hide_menu = !this.hide_menu;
  }

  onResize(){
    if(window.innerWidth > 500){
      this.hide_menu = false;
      this.hide_burger = true;
    }else{
      this.hide_burger = false;
      this.hide_menu = true;
    }
  }
}
