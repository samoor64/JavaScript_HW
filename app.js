// from data.js
var tableData = data;

console.log(data)

var tbody = d3.select("tbody");
data.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

var button = d3.select('#filter-btn');
var forms = d3.select('form');

button.on('click', function() {
  d3.event.preventDefault();

  var dateValue = d3.select('#datetime').property('value')
  var filterData = tableData.filter (row => row.datetime = dateValue )
  var tbody = d3.select("tbody");
  tbody.html('')
filterData.forEach((item) => {
    var row = tbody.append("tr");
    Object.entries(item).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});