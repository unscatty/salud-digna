import {
  Chart as ChartJS,
  CategoryScale,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const labels = ['Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb', 'Dom'];

export default function LinePasos({ height, daysData }) {
  const offsetRatio = 0.15;

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
          stacked: false,
          grid: {
            display: false,
          },
          display: true,
          min: Math.round(Math.min(...daysData) * (1 - offsetRatio)),
          max: Math.round(Math.max(...daysData) * (1 + offsetRatio)),
          position: 'right',
          ticks: {
            font: {
              size: 8,
            },
            padding: 0,
          },
        },
      },
      layout: {
        padding: {
          left: 10,
          right: 0,
        },
      },
    }),
    [daysData],
  );

  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data:
            daysData ??
            labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235)',
          pointRadius: 3,
          tension: 0.35,
        },
      ],
    }),
    [daysData],
  );

  return <Line options={options} data={data} height={height} />;
}
