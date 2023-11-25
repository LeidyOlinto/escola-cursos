import { Course } from './entities/Course'
import { Discipline } from './entities/Discipline'
import { Menu } from './entities/Menu'

const main = () => {
    new Menu().start()
}

const listCourses = [new Course("Back end", [new Discipline("lógica", 20), new Discipline("POO", 30)])]

// console.log( 'ta dando certo');
// const system = new Menu([], [], listCourses);
// console.log( system);

main()