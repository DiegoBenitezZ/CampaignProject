import './style.css'
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
    Legend
);

interface Props {
    labels: Array<String>,
    values: Array<Number>
    title: string;
    label: string
}

export const BarVerticalChar = ({labels, values, title, label} : Props) => {
    const data = {
        labels,
        datasets: [
            {
                label: label,
                data: labels.map((month, index) => values[index]),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    
    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: title,
        },
        },
    };

    return (
        <>
            <Bar options={options} data={data} />;
        </>
    );
};