// crear las clases Edificio, Piso y Departamento aquí
class Departamento {
  nombre: string;
  constructor(nombre: string) {
    this.nombre = nombre;
  }

  getName() {
    return this.nombre;
  }
}

class Piso {
  nombre: string;
  departamentos: Departamento[];
  constructor(nombre: string) {
    this.nombre = nombre;
    this.departamentos = [];
  }

  pushDepartamento(depto: Departamento) {
    this.departamentos.push(depto);
  }

  getDepartamentos() {
    return this.departamentos;
  }
}

class Edificio {
  pisos: Piso[];
  constructor(arrayPiso: Piso[]) {
    this.pisos = arrayPiso;
  }

  addDepartamentoToPiso(nombreDePiso: string, departamento: Departamento) {
    this.pisos.forEach((pisos) => {
      if (pisos.nombre === nombreDePiso) {
        pisos.departamentos.push(departamento);
      } else {
        return `No se encontró el piso ${nombreDePiso}`;
      }
    });
  }

  getDepartamentosByPiso(nombreDePiso: string): Departamento[] {
    for (let piso of this.pisos) {
      if (piso.nombre === nombreDePiso) {
        return piso.departamentos;
      }
    }
    return [];
  }
}

function testClaseEdificio() {
  const unPiso = new Piso("planta baja");
  const otroPiso = new Piso("primer piso");
  const unEdificio = new Edificio([unPiso, otroPiso]);
  const deptoUno = new Departamento("depto uno");
  const deptoDos = new Departamento("depto dos");
  const deptoTres = new Departamento("depto tres");
  unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
  unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
  unEdificio.addDepartamentoToPiso("planta baja", deptoTres);

  const deptos = unEdificio.getDepartamentosByPiso("planta baja");
  const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");

  if (
    Array.isArray(deptosEmpty) &&
    deptosEmpty.length == 0 &&
    deptos.length == 3 &&
    deptos[2].getName() == "depto tres"
  ) {
    console.log("testClaseBandaApartment passed");
  } else {
    throw "testClaseBandaApartment not passed";
  }
}

function main() {
  testClaseEdificio();
}
main();
