import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2';
import { rotateArrayTo } from '~/utils/rotate-array';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

const labels = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre',
];

export default function LinePesoPerdido(
  { height, daysData: monthsData, month, goal } = { month: labels[3] },
) {
  const monthLabels = useMemo(() => {
    return rotateArrayTo(labels, month);
  }, [month]);

  const max = useMemo(() => Math.round(Math.max(...monthsData) * 1.05), [monthsData])
  
  const options = useMemo(
    () => ({
      mantainAspectRatio: true,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
        filler: {
          propagate: false,
        },
        'samples-filler-analyser': {
          target: 'chart-analyser',
        },
      },
      responsive: true,
      scales: {
        x: {
          stacked: true,
          grid: {
            display: false,
            drawTicks: false,
            tickBorderDashOffset: 50,
          },
          ticks: {
            display: true,
            padding: 0,
            font: {
              size: 8,
            },
          },
          border: {
            display: false,
          },
        },
        y: {
          stacked: true,
          grid: {
            display: true,
          },
          display: true,
          min: goal,
          max
        },
      },
      layout: {
        padding: 0,
      },
    }),
    [monthsData, goal],
  );

  const data = useMemo(
    () => ({
      labels: monthLabels,
      datasets: [
        {
          data:
            monthsData ??
            monthLabels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          borderColor: 'rgb(9, 211, 130)',
          backgroundColor: 'rgb(9, 211, 130, 0.35)',
          pointRadius: 4.5,
          tension: 0.25,
          fill: 'origin',
        },
      ],
    }),
    [monthsData, monthLabels],
  );

  return <Line options={options} data={data} height={height} />;
}
