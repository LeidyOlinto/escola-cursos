import { Course } from "./Course";
import { Discipline } from "./Discipline";
import { Student } from "./Student";

export class ViewMenus {
  static mainMenu(): string {
    return `
    +=========== MENU: =============+
    | 1 - Gerenciar ALUNOS          |
    | 2 - Gerenciar DISCIPLINAS     |
    | 3 - Gerenciar CURSOS          |
    | 4 - SAIR                      |
    +===============================+
    `;
  }
  static studentsMainMenu(): string {
    return `
    +========== MENU ALUNOS: ===========+
    |  1 - Cadastrar ALUNO              |
    |  2 - Consultar ALUNO              |
    |  3 - Remover ALUNO                |
    |  4 - Atualizar ALUNO              |
    |  5 - Voltar ao menu principal     |
    |  6 - Sair                         |
    +===================================+
    `;
  }
  static studentInfo(student: Student | undefined): string {
    if (student) {
      return `
      Informações do aluno:
      Nome: ${student.getName()}
      Telefone: ${student.getPhoneNumber()}
      Email: ${student.getEmail()}
      Idade: ${student.getAge()}
      `;
    }
    return "\nAluno não encontrado.\n";
  }
  static studentUpdate(): string {
    return `
    Opções de atualização:
    +==========================+
    | 1 - Atualizar telefone   |
    | 2 - Atualizar email      |
    | 3 - Voltar               |
    +==========================+
    `;
  }
  static disciplinesMainMenu(): string {
    return `
    +====== MENU DICIPLINAS: =======+
    | 1- Cadastrar DISCIPLINA       |
    | 2- Consultar DISCIPLINA       |
    | 3- Remover DISCIPLINA         |
    | 4- Atualizar DISCIPLINA       |
    | 5 - Voltar ao menu principal  |
    | 6 - Sair                      |
    +===============================+
    `;
  }
  static disciplineInfo(discipline: Discipline | undefined): string {
    if (discipline) {
      return `
    Nome: ${discipline.getName()}
    Carga-horária: ${discipline.getWokload()}
    Nota obtida: ${discipline.getGrade()}
    `;
    }
    return `\nDisciplina não cadastrada.\n`
  }
  static disciplineUpdate(): string {
    return `
    Opções de atualização para disciplina:
    +==============================================+
    |  1 - Atualizar a carga-horária da disciplina |
    |  2 - Atualizar a nota da disciplina          |
    |  3 - Voltar                                  |
    +==============================================+
    `;
  }
  static coursesMainMenu(): string {
    return `
    +========= MENU CURSOS: ===========+
    |  1 - Cadastrar CURSO             |
    |  2 - Consultar CURSO             |
    |  3 - Remover CURSO               |
    |  4 - Atualizar CURSO             |
    |  5 - Voltar ao menu principal    |
    | 6 - Sair                         |
    +==================================+
    `;
  }
  static cousesInfo(courses: Course|undefined):string {
    if (courses) {
      return `
      Nome: ${courses.getName()}
      Lista de cursos: ${courses.getListOfDicipline()}
      Turno: ${courses.getWorkload()}
      `;
    }
    return `\nCurso não cadastrado.\n`
  }
  static cousesUpdate(): string{
    return `

    Opções de atualização para cursos:
  +==============================================+  
  |  1 - Visualizar lista de cursos              |
  |  2 - Atualizar turno                         |
  |  3 - Voltar                                  |
  +==============================================+
    `;
  }
  static addDiciplineInCouseMenu(): string{
    return `

    Opções de adição de diciplinas em um cursos:
  +==============================================+  
  |  1 - Adicionar diciplina                     |
  |  2 - Voltar                                  |
  +==============================================+
    `;
  }
}