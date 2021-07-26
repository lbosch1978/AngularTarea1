import { Component, Input, OnInit } from '@angular/core';
import { Panels } from '../parameters/Columns';
import { Tasks } from '../parameters/Tasks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() panel?: Panels;
  statusSeleccionado: string = '';
 
  columns : Array<Panels> = [
    {
      id: 1,
      title: 'SIN CATALOGAR'
    },
    {
      id: 2,
      title: 'INICIADAS'
    },
    {
      id: 3,
      title: 'BLOQUEADAS'
    },
    {
      id: 4,
      title: 'FINALIZADAS'
    },
  ];

  tasks : Array<Tasks> = [
    {
      id: 1,
      displayText: 'Tarea 1',
      status: 1
    },
    {
      id: 2,
      displayText: 'Tarea 2',
      status: 1
    },
    {
      id: 3,
      displayText: 'Tarea 3',
      status: 2
    },
    {
      id: 4,
      displayText: 'Tarea 4',
      status: 2
    },
    {
      id: 5,
      displayText: 'Tarea 5',
      status: 3
    },
  ]

  actions = [
    {
      id: 1,
      title: 'TAREA',
      button: 'Agregar Nueva Tarea'
    },
    {
      id: 2,
      title: 'COLUMNA',
      button: 'Agregar Nueva Columna'
    }
  ]; 

  constructor() { }

  ngOnInit(): void {
  }
  
  ChangeTask(action : number) 
  {
    if (action == 1)
      this.newTask();
    
    if (action == 2)
      this.newColumn(); 
  }

  newTask()
  {
    const lastId = this.tasks.map(element => element.id),
    newId        = Math.max(...lastId) + 1,
    NameTask     = (<HTMLInputElement>document.getElementById("1")).value;
    
    if (NameTask != '')
    {
      this.tasks.push(
        {
          id: newId,
          displayText: NameTask,
          status: 1
        }
      );

      (<HTMLInputElement>document.getElementById("1")).value = '';
    }
  }

  newColumn()
  {
    const lastId   = this.columns.map(element => element.id),
    newId          = Math.max(...lastId) + 1,
    NameColumn     = (<HTMLInputElement>document.getElementById("2")).value;

    if (NameColumn != '')
    {
      this.columns.push(
        {
          id: newId,
          title: NameColumn
        }
      );
      (<HTMLInputElement>document.getElementById("2")).value = '';
    }
  }

  changeTaskStatus()
  {
    const splitted = this.statusSeleccionado.split('_'),
    idTask         = Number(splitted[0]),
    idColumn       = Number(splitted[1]);

    const tasks = this.tasks.map(element => {      
      if (idTask == element.id)
        element.status = idColumn;      
    });
  }
}