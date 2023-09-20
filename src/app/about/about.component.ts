import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  skills: string[];
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  vectImage: string = 'assets/myi.JPG';
 
  

  changeImage() {
    this.vectImage = 'assets/vect.avif';

  }

  revImage() {
    this.vectImage = 'assets/myi.JPG';

  }
}
