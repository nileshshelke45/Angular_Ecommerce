import { Component} from '@angular/core';

@Component({
  selector: 'app-material-ui',
  templateUrl: './material-ui.component.html',
  styleUrls: ['./material-ui.component.css']
})
export class MaterialUiComponent {

  players = ['Rohit', 'Virat', 'Dhoni', 'Surya'];           // For Checkbox
  selectValue: string= "";


  seasons = ['Winter', 'Summer', 'Spring', 'Autumn']        // For Radio Buttons
  favoriteSeason!: string;





}
