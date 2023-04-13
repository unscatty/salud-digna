import { PaperClipIcon } from '@heroicons/react/solid';
import Pacientes from '~/db/datos/pacientes.json';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Paciente() {
  const { pacienteId } = useParams();

  const paciente = useMemo(() => {
    return Pacientes.find((paciente) => paciente.id === pacienteId);
  }, [pacienteId]);

  return (
    <>
      <div className="min-h-full">
        <main className="py-10">
          {/* Page header */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
            <div className="flex items-center space-x-5">
              <Link to="/nutriologo/">
                <div className="i-heroicons:arrow-left-circle-20-solid text-white h-15 w-15"></div>
              </Link>
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={paciente.imageUrl}
                    alt=""
                  />
                  <span
                    className="absolute inset-0 shadow-inner rounded-full"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {paciente.nombre}
                </h1>
              </div>
            </div>
            <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Mensaje
                <div className="i-heroicons:chat-bubble-bottom-center ml-2 -mr-0.5" />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
              >
                Agendar cita
                <div className="i-heroicons:calendar ml-2 -mr-0.5" />
              </button>
            </div>
          </div>

          <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
            <div className="space-y-6 lg:col-start-1 lg:col-span-2">
              {/* Description list*/}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Información de paciente
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">
                      Personal details and application.
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Correo electrónico
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.email}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Fecha de nacimiento
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {new Date(
                            paciente.fechaNacimiento,
                          ).toLocaleDateString()}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Dirección
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.direccion}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Alergias
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <div className="flex flex-wrap gap-2">
                            {paciente.alergias.map((alergia) => (
                              <span
                                key={alergia}
                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                              >
                                {alergia}
                              </span>
                            ))}
                          </div>
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Observaciones
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.observaciones}
                        </dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          Archivos adjuntos
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          <ul
                            role="list"
                            className="border border-gray-200 rounded-md divide-y divide-gray-200"
                          >
                            {paciente.attachments.map((attachment) => (
                              <li
                                key={attachment}
                                className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                              >
                                <div className="w-0 flex-1 flex items-center">
                                  <div
                                    className="i-heroicons:paper-clip-20-solid flex-shrink-0 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-2 flex-1 w-0 truncate">
                                    {attachment}
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href="#"
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                  >
                                    Descargar
                                  </a>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Datos antropometricos */}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Datos antropométricos
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Estatura
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosAntropometricos.estatura} metros
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Peso
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosAntropometricos.peso} kg
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Cintura
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosAntropometricos.cintura} cm
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Cadera
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosAntropometricos.cadera} cm
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Brazo
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosAntropometricos.brazo} cm
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Muslo
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosAntropometricos.muslo} cm
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Pantorrilla
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosAntropometricos.pantorrilla} cm
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Datos médicos */}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Datos médicos
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Presión arterial
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.presion_arterial} ppm
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Colesterol
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.colesterol}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Glucosa
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.glucosa}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Triglicéridos
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.trigliceridos}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Frecuencia cardiaca
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.frecuenciaCardiaca} ppm
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Frecuencia respiratoria
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.frecuenciaRespiratoria} ppm
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Índice de masa corporal
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.indiceMasaCorporal}
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Porcentaje de grasa
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.porcentajeGrasa} %
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Porcentaje de músculo
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.porcentajeMusculo} %
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Porcentaje de agua
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.porcentajeAgua} %
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Porcentaje de osteoporosis
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.porcentajeOsteoporosis} %
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Porcentaje metabolismo basal
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.porcentajeMetabolismoBasal} %
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Porcentaje metabolismo actividad
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.porcentajeMetabolismoActividad}{' '}
                          %
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Porcentaje metabolismo total
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosMedicos.porcentajeMetabolismoTotal} %
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>

              {/* Datos de Evaluación */}
              <section aria-labelledby="applicant-information-title">
                <div className="bg-white shadow sm:rounded-lg">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="applicant-information-title"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Datos de evaluación
                    </h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Flexibilidad
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.flexibilidad}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Resistencia
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.resistencia}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Fuerza
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.fuerza}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Agilidad
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.agilidad}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Equilibrio
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.equilibrio}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Velocidad
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.velocidad}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Coordinación
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.coordinacion}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Potencia
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.potencia}/100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Reactividad
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          {paciente.datosEvaluacion.reactividad}/100
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </section>
            </div>

            <section
              aria-labelledby="timeline-title"
              className="lg:col-start-3 lg:col-span-1"
            >
              <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6 mb-6">
                <h2
                  id="timeline-title"
                  className="text-lg font-medium text-gray-900"
                >
                  Línea de tiempo
                </h2>

                {/* Activity Feed */}
                <div className="mt-6 flow-root">
                  <ul role="list" className="-mb-8">
                    {paciente.lineaDeTiempo.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <div className="relative pb-8">
                          {itemIdx !== paciente.lineaDeTiempo.length - 1 ? (
                            <span
                              className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                              aria-hidden="true"
                            />
                          ) : null}
                          <div className="relative flex space-x-3">
                            <div>
                              <span
                                className={classNames(
                                  'bg-green-500',
                                  'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                                )}
                              >
                                <div
                                  className="i-heroicons:check-20-solid w-5 h-5 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                              <div>
                                <p className="text-sm text-gray-500">
                                  {item.evento}{' '}
                                  <a
                                    href="#"
                                    className="font-medium text-gray-900"
                                  >
                                    {/* {item.target} */}
                                  </a>
                                </p>
                              </div>
                              <div className="text-right text-sm whitespace-nowrap text-gray-500">
                                <time dateTime={item.fecha}>
                                  {new Date(item.fecha).toLocaleDateString(
                                    'es-ES',
                                    { month: 'short', day: 'numeric' },
                                  )}
                                </time>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 flex flex-col justify-stretch">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-first"
                  >
                    Ver más
                  </button>
                </div>
              </div>

              {/* Notas */}
              <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
                <div className="divide-y divide-gray-200">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="notes-title"
                      className="text-lg font-medium text-gray-900"
                    >
                      Notas
                    </h2>
                  </div>
                  <div className="px-4 py-6 sm:px-6">
                    <div>
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-5 divide-y divide-gray-200"
                        >
                          {paciente.notas.map((nota) => (
                            <li key={nota.id} className="py-5">
                              <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
                                <h3 className="text-sm font-semibold text-gray-800">
                                  <a
                                    href="#"
                                    className="hover:underline focus:outline-none"
                                  >
                                    {/* Extend touch target to entire panel */}
                                    <span
                                      className="absolute inset-0"
                                      aria-hidden="true"
                                    />
                                    {nota.titulo}
                                  </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-600 ">
                                  {nota.contenido}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-6 sm:px-6">
                  <div className="flex space-x-3">
                    <div className="min-w-0 flex-1">
                      <form action="#">
                        <div>
                          <label htmlFor="comment" className="sr-only">
                            About
                          </label>
                          <textarea
                            id="comment"
                            name="comment"
                            rows={3}
                            className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                            placeholder="Agrega una nota"
                            defaultValue={''}
                          />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-first"
                          >
                            Agregar nota
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
