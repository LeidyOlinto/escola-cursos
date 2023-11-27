import { Course } from './entities/Course'
import { Discipline } from './entities/Discipline'
import { Menu } from './entities/Menu'
import { Student } from './entities/Student'

const main = (menu: Menu) => { menu.start(); }

const baseMenu = (): Menu => {
    const a1 = new Student("Marly", 992339954, "leidy@gmail.net", 28, []);
    const a2 = new Student("John", 992321254, "john@gmail.net", 27, []);
    const a3 = new Student("Larissa", 992339954, "lari@gmail.net", 22, []);
    const a4 = new Student("Kimberly", 932134954, "kinber@gmail.net", 21, []);
    const a5 = new Student("Amanda", 982339954, "aman@gmail.net", 30, []);
    const a6 = new Student("Tiego", 919254004, "tiego@gmail.net", 27, []);
    const a7 = new Student("Silvia", 991234564, "silvia@gmail.net", 25, []);
    const a8 = new Student("Djair", 992663954, "dj@gmail.net", 27, []);
    const a9 = new Student("Katrina", 9122132324, "katri@gmail.net", 26, []);

    const la1 = [a1, a2, a3, a4, a5, a6, a7, a8, a9];

    const d1 = new Discipline("Logica de Programação", 25, 90);
    const d2 = new Discipline("Poo", 18, 10);
    const d3 = new Discipline("Banco de dados", 30, 80);
    const d4 = new Discipline("Padrões de Projeto", 20, 60);

    const ld1 = [d1, d2]
    const ld2 = [d3, d4]
    const c1 = new Course("TI dados", ld1, "Manhã");
    // const c2 = new Course("Dados", [...ld2, ...ld1,]);

    const lc1 = [c1,];
    return new Menu(la1, undefined)
}

const withBase = 1;

if (withBase) {
    main(baseMenu());
} else
    main(new Menu())