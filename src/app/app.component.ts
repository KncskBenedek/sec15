import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('f') signupForm: NgForm ;
  suggestUserName() {
    const suggestedName = 'Superuser';
  }


  /* onSubmit(frm: NgForm){
    console.log(frm);
    
  } */
  
  onSubmit(){
    console.log(this.signupForm);
    
  }
}
