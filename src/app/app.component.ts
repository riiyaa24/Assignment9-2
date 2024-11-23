import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MyAddPipe, MyMultPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment92';
}
