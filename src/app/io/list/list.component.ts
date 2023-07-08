import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  todos: {title: string, body: string}[] = [];

  constructor() { }

  ngOnInit(): void {
    this.todos.push({title: 'todo1', body: 'yapılacak1'});
    this.todos.push({title: 'todo2', body: 'yapılacak2'});
    this.todos.push({title: 'todo3', body: 'yapılacak3'});
  }

}
