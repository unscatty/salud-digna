import Like from './Like';
import Comentario from './Comentario';

const people = [
  {
    name: 'Emma Dorsey',
    logro: 'Bajo 10 kilos en 3 meses',
    imageUrl:
      'https://img.freepik.com/vector-gratis/ilustracion-concepto-funcionamiento_114360-8048.jpg?w=826&t=st=1680915833~exp=1680916433~hmac=3edd4ee790c6f75a6ed020e921c78367e9bb59afe254939323780f466e79b05f',
    descripcion: 'era gorda y ahora ya no ',
    twitterUrl: '#',
    instagramUrl: '#',
  },
  // More people...
];

export default function Publicacion() {
  return (
    <>
      <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8 mt-5 bg-white rounded-2 ">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <img
                        className="object-cover shadow-lg rounded-lg"
                        src={person.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.logro}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.descripcion}</p>
                    </div>

                    <ul role="list" className="flex space-x-5">
                      <li></li>
                      <li></li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-20 w-full flex items-center gap-3 bg-iconActive rounded-md">
        <Like />
        <Comentario />
      </div>
    </>
  );
}
