/* This example requires Tailwind CSS v2.0+ */
import { classNames } from '~/utils/class-names';

const days = [
  { date: '2023-03-26' },
  { date: '2023-03-27' },
  { date: '2023-03-28' },
  { date: '2023-03-29' },
  { date: '2023-03-30' },
  { date: '2023-03-31' },
  { date: '2023-01-01', isCurrentMonth: true },
  { date: '2023-01-02', isCurrentMonth: true },
  { date: '2023-01-03', isCurrentMonth: true },
  { date: '2023-01-04', isCurrentMonth: true },
  { date: '2023-01-05', isCurrentMonth: true },
  { date: '2023-01-06', isCurrentMonth: true },
  { date: '2023-01-07', isCurrentMonth: true },
  { date: '2023-01-08', isCurrentMonth: true },
  { date: '2023-01-09', isCurrentMonth: true },
  { date: '2023-01-10', isCurrentMonth: true },
  { date: '2023-01-11', isCurrentMonth: true },
  { date: '2023-01-12', isCurrentMonth: true, isToday: true },
  { date: '2023-01-13', isCurrentMonth: true },
  { date: '2023-01-14', isCurrentMonth: true },
  { date: '2023-01-15', isCurrentMonth: true },
  { date: '2023-01-16', isCurrentMonth: true },
  { date: '2023-01-17', isCurrentMonth: true },
  { date: '2023-01-18', isCurrentMonth: true },
  { date: '2023-01-19', isCurrentMonth: true },
  { date: '2023-01-20', isCurrentMonth: true },
  { date: '2023-01-21', isCurrentMonth: true },
  { date: '2023-01-22', isCurrentMonth: true },
  { date: '2023-01-23', isCurrentMonth: true },
  { date: '2023-01-24', isCurrentMonth: true },
  { date: '2023-01-25', isCurrentMonth: true },
  { date: '2023-01-26', isCurrentMonth: true },
  { date: '2023-01-27', isCurrentMonth: true },
  { date: '2023-01-28', isCurrentMonth: true },
  { date: '2023-01-29', isCurrentMonth: true },
  { date: '2023-01-30', isCurrentMonth: true },
  { date: '2023-02-01' },
  { date: '2023-02-02' },
  { date: '2023-02-03' },
  { date: '2023-02-04' },
  { date: '2023-02-05' },
  { date: '2023-02-06' },
];

export default function Example() {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-500 hover:text-gray-600"
              q
            >
              <span className="sr-only">Previous month</span>
              <i
                className="i-heroicons:chevron-left-20-solid h-5 w-5"
                aria-hidden="true"
              />
            </button>
            <div className="flex-auto font-semibold">Abril</div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-500 hover:text-gray-600"
            >
              <span className="sr-only">Next month</span>
              <i
                className="i-heroicons:chevron-right-20-solid h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="my-0.5 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>L</div>
            <div>M</div>
            <div>M</div>
            <div>J</div>
            <div>V</div>
            <div>S</div>
            <div>D</div>
          </div>
          <div className="isolate grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  'py-1 hover:bg-gray-100 focus:z-10',
                  day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
                  (day.isSelected || day.isToday) && 'font-semibold',
                  day.isSelected && 'text-white',
                  !day.isSelected &&
                    day.isCurrentMonth &&
                    !day.isToday &&
                    'text-gray-900',
                  !day.isSelected &&
                    !day.isCurrentMonth &&
                    !day.isToday &&
                    'text-gray-400',
                  day.isToday && !day.isSelected && 'text-indigo-600',
                  dayIdx === 0 && 'rounded-tl-lg',
                  dayIdx === 6 && 'rounded-tr-lg',
                  dayIdx === days.length - 7 && 'rounded-bl-lg',
                  dayIdx === days.length - 1 && 'rounded-br-lg',
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    'mx-auto flex h-4 w-4 items-center justify-center rounded-full',
                    day.isSelected && day.isToday && 'bg-indigo-600',
                    day.isSelected && !day.isToday && 'bg-gray-900',
                  )}
                >
                  {day.date.split('-').pop().replace(/^0/, '')}
                </time>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
