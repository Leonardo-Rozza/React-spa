import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublishers = ["DC Comics, Marvel Comics"];

  //Supuestamente esta funcion, es con la condicion negativa en ValidPublishers, pero da un error automatico que no se que es.
  if (validPublishers.includes(publisher)) {
    throw new Error("Hola como estas?");
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
