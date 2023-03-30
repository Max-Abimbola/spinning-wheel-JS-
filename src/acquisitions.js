import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

(async function() {
    const data = {
      labels: [
        'A',
        'B',
        'C',
        'D'
      ],
      datasets: [{
        data:[40,40,40,40]
      }]
    }
  
    new Chart(
      document.getElementById('acquisitions'),
      {
        type: 'pie',
        data: data,
        plugins: [ChartDataLabels]
      }
    );
  })();