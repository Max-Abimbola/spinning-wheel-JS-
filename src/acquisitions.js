import Chart from 'chart.js/auto';

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
      }
    );
  })();