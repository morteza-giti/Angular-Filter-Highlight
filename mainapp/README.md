# Mainapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

# Angular Highlight Search

## This Angular project showcases a search functionality that allows users to search for specific languages and highlights the matching letters. The heart of this project lies in the custom Angular pipe named "HighlightFilterPipe," which dynamically highlights letters in the displayed list based on the user's search term.

## How it Works
The SearchListComponent in this project is responsible for managing the search term and list of languages. When a user types in the search input, the update() method is triggered, which filters the languages based on the search term using the "HighlightFilterPipe."

##Code Structure
search-list.component.ts: Defines the SearchListComponent, managing the list of languages and handling search functionality.
search-list.component.html: Contains the HTML template for the SearchListComponent, including the search input and language list display.
highlight-filter.pipe.ts: Implements the HighlightFilterPipe, a custom Angular pipe that highlights matching letters in the languages.
