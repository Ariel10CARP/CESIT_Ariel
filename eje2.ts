class Alumno {
  constructor(public nombre: string) {}
}

class Curso {
  alumnos: Alumno[] = [];

  constructor(public nombre: string) {}

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }
}

class Escuela {
  cursos: Curso[] = [];

  agregarCurso(curso: Curso): void {
    this.cursos.push(curso);
  }
}

const alumno1 = new Alumno("Ariel");
const alumno2 = new Alumno("Jesus");

const curso1 = new Curso("Programación");
const curso2 = new Curso("Programa");

curso1.agregarAlumno(alumno1);
curso1.agregarAlumno(alumno2);
curso2.agregarAlumno(alumno1);

const escuela = new Escuela();

escuela.agregarCurso(curso1);
escuela.agregarCurso(curso2);
// FIN CREOOOOOO
// Prueba de fucionamiento
for (const curso of escuela.cursos) {
  console.log(`Curso: ${curso.nombre}`);
  console.log("Alumnos:");
  for (const alumno of curso.alumnos) {
    console.log(`- ${alumno.nombre}`);
  }
}
