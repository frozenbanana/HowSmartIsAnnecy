google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

var dataArray2d_0 = [
    ['Year', 'Sales', 'Expenses'],
    ['2004',  1000,      400],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540],
    ['2008',  1040,      640],
    ['2009',  1000,      400],
    ['2010',  1170,      460],
    ['2011',  1180,      1120],
    ['2012',  1230,      340],
    ['2013',  1340,      240]
  ];

var dataArray2d_1 = [
    ['Year', 'Sales', 'Killed employees'],
    ['2004',  108,      40],
    ['2005',  118,      40],
    ['2006',  74,       120],
    ['2007',  108,      50],
    ['2008',  108,      60],
    ['2009',  108,      40],
    ['2010',  118,      40],
    ['2011',  118,      120],
    ['2012',  128,      30],
    ['2013',  138,      20]
  ];

  var listOfCharts = [dataArray2d_0, dataArray2d_1];
  var titlesOfCharts = ["Company Performance" , "Another test"]
function drawChart(index = 0) {
  var data = google.visualization.arrayToDataTable(listOfCharts[index]);

  var options = {
    title: titlesOfCharts[index],
    curveType: 'function',
    backgroundColor: '#FAE4D9',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}
