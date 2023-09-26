import { Component } from '@angular/core';
import { Picture, picture } from '../picture';

@Component({
  selector: 'page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})


export class Page2Component {
  // public pic = picture
  public pictures: Picture[];

  constructor(){
    this.pictures=[
      picture,
      new Picture(2, "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg", "大港墘公園", "Anita"),
      new Picture(3, "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg", "遠眺社子島", "Anita"),
      new Picture(4, "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg", "大雨過後", "Anita"),
      new Picture(5, "https://raw.githubusercontent.com/anitaloggg/git/main/277671026_10159641399788608_4946370506060413057_n.jpg", "t-Hub 會議中心", "Anita")
    ]}
  
}
