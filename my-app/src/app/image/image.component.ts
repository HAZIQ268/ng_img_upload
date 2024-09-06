import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [FormsModule , HttpClientModule , CommonModule],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
  providers : [ImageService]
})
export class ImageComponent {
  image : string = '';



constructor(private ss : ImageService){}
selected_image : File | null = null;

fileselected(abc:any){
  this.selected_image = abc.target.files[0];
}

formdatas(){

  const formdata = new FormData;

  formdata.append('image',this.selected_image as File);

  this.ss.abc(formdata).subscribe(xyz => {
    console.log('success' , xyz);
  })
}

abc(){
  alert("hello");
}
}
