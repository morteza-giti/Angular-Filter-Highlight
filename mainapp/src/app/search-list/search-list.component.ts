import { Component } from '@angular/core';
import { Language } from '../language';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent
{
  searchTerm: string = '';
  public languages: Language[] = [
    { name: 'English' },
    { name: 'Spanish' },
    { name: 'Italian' },
    { name: 'French'  },
    { name: 'Farsi'},
    { name: 'Japanese'},
    { name: 'Chinese' }
  ];
  
  resetLanguages()
  {
    this.languages = [
      { name: 'English' },
      { name: 'Spanish' },
      { name: 'Italian' },
      { name: 'French'  },
      { name: 'Farsi'},
      { name: 'Japanese'},
      { name: 'Chinese' }
    ];
    this.searchTerm = '';
  }
  public async update(): Promise<void>
  {
   if (this.searchTerm == '') {
     this.resetLanguages();
   }
    this.languages = this.languages.filter(lang=>lang.name.includes(this.searchTerm));
  }
}
