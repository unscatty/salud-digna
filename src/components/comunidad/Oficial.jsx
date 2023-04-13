import PublicacionNew from './PublicacionNew';

export default function Oficial() {
  return (
    <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 mt-4">
      <a href="#">
        <img className="rounded-t-lg" src="/images/plato-comer.jpg" alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 text-sm">
            Plato del buen comer: Mitos y realidades
          </h5>
        </a>
        <p className="font-normal text-gray-700 mb-3 text-xs">
          Aquí te cuento algunos de los mitos y realidades sobre el plato del
          buen comer. ¿Qué es el plato del buen comer? ¿Qué alimentos debe
          contener? ¿Cuántas porciones de cada alimento debe tener? ¿Qué
          cantidad de agua debe tomar? Y otras preguntas que te harás.
        </p>
        <a
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
          href="#"
        >
          <span className="text-3">Leer más</span>
        </a>
      </div>
    </div>
  );
}
