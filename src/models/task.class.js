import { LEVELS } from './levels.enum';

export class TaskClass {
	name = '';
	descripcion = '';
	completed = false;
	level = LEVELS.NORMAL;

  constructor(name, descripcion, completed, level){
    this.name=name
    this.description=descripcion
    this.completed=completed
    this.level=level
  }

}
