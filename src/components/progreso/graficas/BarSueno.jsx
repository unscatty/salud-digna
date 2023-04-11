import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  mantainAspectRatio: false,
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
        // backdropPadding: {
        //   x: 0
        // }
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
      display: false,
    },
  },
  layout: {
    padding: 8,
  },
};

const labels = ['Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb', 'Dom'];

export default function BarSueno({ height, daysData } = { height: 600 }) {
  const data = useMemo(
    () => ({
      labels,
      datasets: [
        {
          label: false,
          data: daysData,
          backgroundColor: '#fedb87',
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barPercentage: 0.75,
        },
        {
          data: Array(7).fill(8),
          backgroundColor: '#f2f2f2',
          borderRadius: Number.MAX_VALUE,
          borderSkipped: false,
          barPercentage: 0.5,
        },
      ],
    }),
    [daysData],
  );

  return <Bar options={options} data={data} height={height} />;
}
