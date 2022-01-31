import { stock } from "../constantes/constantes";

export const pedirDatos = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 2000);
  });
}