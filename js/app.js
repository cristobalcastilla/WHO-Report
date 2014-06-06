jQuery(document).ready(function($) {
  var type, id, c, h, data, options;

  var $container = $('.container:first');
  var containerWidth = $container.width();
  columnWidth = containerWidth/12;

  var sans = 'Droid Sans';
  var serif = 'Droid Serif';

  // VIZ 1  
  id = 'viz01';
  type = 'bar';
  c = 12;
  h = 400;

  data = {    
    labels: ["hombres", "mujeres"],
    datasets: [
      {
        fillColor: "#80dfd9",
        data: [74, 80]
      },
      {
        fillColor: "#fd2399",
        data: [59, 58]
      },
      {
        fillColor: "#122363",
        data: [69, 78]
      },
      {
        fillColor: "#fdff63",
        data: [78, 90]
      }
    ]
  };

  options = {
    // // Escala manual
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 5,
    scaleStartValue: 50,
    scaleLabel: "<%=value%> years",

    scaleFontFamily: sans,
    // scaleFontStyle: 700,
    // scaleFontColor: "#000",
    
    // scaleShowGridLines: false, ///Boolean - Whether grid lines are shown across the chart
    // scaleGridLineColor: "rgba(0,0,0,.1)", //String - Colour of the grid lines
    // scaleGridLineWidth: 1, //Number - Width of the grid lines
    // barShowStroke: false, //Boolean - If there is a stroke on each bar  
    // barStrokeWidth: 0, //Number - Pixel width of the bar stroke  
    // barValueSpacing: 10, //Number - Spacing between each of the X value sets
    // barDatasetSpacing: 5, //Number - Spacing between data sets within X values
    // animation: true, //Boolean - Whether to animate the chart
    // animationSteps: 60, //Number - Number of animation steps
    // animationEasing: "easeOutQuart", //String - Animation easing effect
  }

  createChart(type, id, c, h, data, options);

  
  // new Chart(document.getElementById(id).getContext("2d")).Bar(data, options);

  // ---
  // VIZ 2
  data = [
    { value: 28978374, color:"#80dfd9" },
    { value: 8211415.5, color: "#6db2d8" },
    { value: 4387469.5, color: "#5986d7" },
    { value: 3727145.5, color: "#4659d5" },
    { value: 3634825.2, color: "#322dd4" },
    { value: 3330838.8, color: "#1f00d3" },
    { value: 2948084.5, color: "#1927a9" },
    { value: 2357453.5, color: "#134e7f" },
    { value: 2174696.2, color: "#0c7654" },
    {value: 1632304.5, color: "#069d2a"}
  ];

  options = {
    segmentShowStroke: false,
    segmentStrokeColor: "#dddddd",
    percentageInnerCutout: 80,
    animation: true,
    animationSteps: 60,
    animationEasing: "easeOutQuart",
    animateRotate: true,
  };

  new Chart(document.getElementById("viz02").getContext("2d")).Doughnut(data, options);

  data = [
    { value: 8374177, color:"#fd2363" },
    { value: 3482283, color: "#fd4a63" },
    { value: 3297584, color: "#fd7163" },
    { value: 3297218, color: "#fd9763" },
    { value: 3218251.8, color: "#fdbe63" },
    { value: 1706003.5, color: "#fde563" },
    { value: 1639901.6, color: "#fdce82" },
    { value: 1580238.2, color: "#feb7a1" },
    { value: 1575622.2, color: "#fea1c1" },
    { value: 1302382, color: "#ff8ae0" }
  ];

  // options from prev

  new Chart(document.getElementById("viz03").getContext("2d")).Doughnut(data, options);

});

function createChart (type, id, columns, height, data, options) {
  if (!type) throw new Error('Chart needs type');
  if (!id) throw new Error('Chart needs id');
  if (!data) throw new Error('Chart needs data');
  if (!options) options = {};

  console.log('creo chart', id, columns, height);
  $('#'+id).attr({ width: columns * columnWidth, height: height });

  var context = document.getElementById(id).getContext("2d");

  switch (type) {
    case 'line':
    new Chart(context).Line(data, options);
    break;

    case 'bar':
    new Chart(context).Bar(data, options);
    break;

    case 'radar':
    new Chart(context).Radar(data, options);
    break;

    case 'polar':
    new Chart(context).PolarArea(data, options);
    break;

    case 'pie':
    new Chart(context).Pie(data, options);
    break;

    case 'doughnut':
    new Chart(context).Doughnut(data, options);
    break;

    default:
    throw new Error('Wrong chart type');
  }
}