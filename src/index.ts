import { Course } from './entities/Course'
import { Discipline } from './entities/Discipline'
import { Menu } from './entities/Menu'

const main = () => {
    new Menu().start()
}
const d1 = new Discipline ("back end" , 18, 10);
const d2 = new Discipline ("Logica de Programação", 25,90);
const d3 = new Discipline ("Banco de dados", 30,80);
const d4 = new Discipline ("MVC", 20,60);
const L1 = [ d1,d2]
const L2 = [d3, d4]
const C1 = new Course ("TI dados",L1 );
const C2 = new Course ( "Dados",[...L2 ,...L1]);




// TESTE COM DADOS

// console.log( 'ta dando certo');
// const system = new Menu([], [], listCourses);
// console.log( system);

main()