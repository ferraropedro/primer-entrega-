
const personas = [];
const bebidas = [];

class Persona {
  constructor(nombre, apellido, bebida) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.bebida = bebida;
  }
}

class Bebida {
  constructor(nombre, valor) {
    this.nombre = nombre;
    this.valor = valor;
    this.cantidadAlumnos = 0;
  }
}

bebidas.push(new Bebida("fernet", "1500"));
bebidas.push(new Bebida("vodka", "1500"));
bebidas.push(new Bebida("champagne", "2000"));
bebidas.push(new Bebida("vino", "1000"));
bebidas.push(new Bebida("cocacola", "300"));
bebidas.push(new Bebida("speed", "200"));

function encotrarBebida(arrayBebidas, bebidaAEncontrar) {
  for (const bebida of arrayBebidas) {
    if (bebidaAEncontrar == bebida.nombre) return bebida;
  }
}

function encontrarIndice(arrayBebidas, bebidaAEncontrar) {
    for (const bebida of arrayBebidas) {
      if (bebidaAEncontrar == bebida.nombre) return arrayBebidas.indexOf(bebida);
    }
}


function ingresarPersonas() {
  let nombre;
  do {
    nombre = prompt("Ingrese su nombre");
    if (nombre == "") {
      break;
    }

    let apellido = prompt("Ingrese su apellido");
    let bebida = prompt("Ingrese la bebida que va a comprar");
    let persona = new Persona(nombre, apellido, bebida);
    let bebidaEncontrado = encotrarBebida(bebidas, bebida); //find

    if (bebidaEncontrado) {
      if (bebidaEncontrado.cantidadAlumnos < 3) {
        personas.push(persona);
        let indice = encontrarIndice(bebidas, bebida); //findIndex
        bebidas[indice].cantidadAlumnos += 1;
        alert(
          "el valor de la bebida es " +
            bebidas[indice].valor +
            " y la cantidad botellas es " +
            bebidas[indice].cantidadAlumnos
        );
      } else {
        alert("no quedan mas bebidas");
      }
    } else {
      alert("la bebida no existe");
    }
  } while (nombre != "");
}

ingresarPersonas();
