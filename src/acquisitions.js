import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import anime from 'animejs/lib/anime.es.js';


var spinnerArray = []

Chart.register(ChartDataLabels);

function getFormData(){
  const textBox = document.getElementById('userData')
  const textBoxValue = textBox.value
  return textBoxValue;
}

function showWinner(winner){
  alert(`The spinner chose ${winner}`)
}


function rotateCircle(){
  choice = Math.floor( Math.random() * (spinnerArray.length - 0) + 0)

  console.log(choice)
  console.log(chartInstance.data.labels)

  segSize = 360/spinnerArray.length
  rotation = 720 + (choice * segSize) + (segSize/2)

  anime({
    targets: '#acquisitions',
    rotate: [0,-rotation],
    duration: 3000,
    easing: 'cubicBezier(.37,0,.63,1)',
    complete: function(anime) {
      var spinnerChoice = chartInstance.data.labels[choice]
      chartInstance.update()
      showWinner(chartInstance.data.labels[choice])
    }
  }); 

  
}

function generateFauxData(length){
  var data = []
  for(let i = 0; i <= length.length-1; i++){
    data.push(1)
  }
  return data
}

function createNewChart(){
  var formData = getFormData()
  console.log(formData)

  var newVal = ''
  for(var i = 0; i<formData.length;i++){
    

    if(formData[i] == ','){
      console.log(newVal)
      spinnerArray.push(newVal)
      newVal = ''
      continue
    }

    newVal += formData[i]

  }
  spinnerArray.push(newVal)

  updateChart(spinnerArray)
}

function clearChart(){
  spinnerArray = []
  chartInstance.data.labels = [];
  chartInstance.data.datasets[0].data = [];
  chartInstance.update()

}
/*
let animation = anime({
  targets: '#acquisitions',
  rotate: [0,360],
  duration: 3000,
  easing: 'easeInOutSine'
}); 
*/


   
const data = {
  labels: ['a','b','c','d'],
  datasets: [{
    data: [1,1,1,1]
  }]
}

const chartInstance = new Chart(
  document.getElementById('acquisitions'),
  {
    type: 'pie',
    data: data,
    options: {
    plugins:{
      datalabels: {
        formatter: ((context,args) => {
          const index = args.dataIndex;
          return args.chart.data.labels[index];
        })
      },
      legend: {
        display:false
      },
      tooltip: {
        enabled:false
      }
    }
  }
  }
);

function updateChart(data){
  var fauxData = generateFauxData(data)
  chartInstance.data.labels = data;
  chartInstance.data.datasets[0].data = fauxData;
  chartInstance.update()
}

var submitButton = document.getElementById('submitButton')
submitButton.addEventListener('click',createNewChart)

var clearButton = document.getElementById("clearButton")
clearButton.addEventListener('click',clearChart)

var spinButton = document.getElementById('spinButton')
spinButton.addEventListener('click',rotateCircle)

var x = ['Apples','Oranges','Bananas']
for(var i = 0; i < x.length; i++){
  spinnerArray.push(x[i])
}

updateChart(x)

