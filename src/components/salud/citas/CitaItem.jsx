export default function CitaItem({ appointment, id }) {
  const date = useMemo(() => new Date(appointment.date), [appointment.date]);
  //
  const today = new Date();

  const isAproaching = useMemo(() => {
    const diff = date.getTime() - today.getTime();
    const diffInDays = diff / (1000 * 3600 * 24);

    return diffInDays < 7;
  }, [date, today]);

  const dateFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const timeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  const { dateString, timeString } = useMemo(() => {
    const dateString = date.toLocaleDateString('es-MX', dateFormatOptions);
    const timeString = date.toLocaleTimeString('es-MX', timeFormatOptions);

    return {
      dateString,
      timeString,
    };
  }, [date]);

  return (
    <li key={id} className="py-2">
      <div className="py-2.5 flex gap-2 items-center">
        <img
          className="h-10 w-10 rounded-full"
          src={appointment.doctor.image}
          alt=""
        />
        <div className="flex flex-col justify-between">
          <p className="text-sm font-medium text-gray-900">
            {appointment.doctor.name}
          </p>
          <p className="text-3 text-gray-500">{appointment.subject}</p>
        </div>
        <div className="ml-auto">
          {isAproaching && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              <svg
                className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx={4} cy={4} r={3} />
              </svg>
              Próxima
            </span>
          )}
        </div>
      </div>
      <div className="inline-flex gap-2 items-center">
        <div className="i-heroicons:calendar-20-solid h-7 w-7" />
        <div className="flex flex-col justify-between">
          <p className="text-sm text-gray-500 text-xs">{timeString}</p>
          <p className="text-sm text-gray-500 text-xs">{dateString}</p>
        </div>
      </div>
    </li>
  );
}
