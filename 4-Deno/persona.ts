interface PersonaI {
  nombre: string;
  apellido: string;
}

const Aida: PersonaI = {
  nombre: "Aidas",
  apellido: "Blaya"
};

const saludar = (persona: PersonaI): string => {
  return `Hola ${persona.nombre} ${persona.apellido}`;
};

console.log(saludar(Aida));
