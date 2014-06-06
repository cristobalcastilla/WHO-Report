jQuery(document).ready(function($) {
  var type, id, c, h, data, options;

  var $container = $('.container:first');
  var containerWidth = $container.width();
  columnWidth = containerWidth/12;

  var sans = 'Droid Sans';
  var serif = 'Droid Serif';

  // VIZ 1  
  id = 'viz-4-1-2';
  type = 'bar';
  c = 6;
  h = 500;

  data = {
    labels : ["Acceso a Agua Potable",],
    datasets : [
      {
        fillColor : "rgba(213,113,106,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [73]
      },
      {
        fillColor : "rgba(245,227,138,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [88]
      },
      {
        fillColor : "rgba(82,118,160,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [90]
      },
      {
        fillColor : "rgba(119,171,115,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [90]
      },
      {
        fillColor : "rgba(239,145,105,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [93]
      },
      {
        fillColor : "rgba(153,80,128,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [97]
      }
    ]
  };

  options = {
    scaleOverlay : false,
    scaleOverride : true,
    scaleSteps : 9,
    scaleStepWidth : 10,
    scaleStartValue : 10,
  }

  createChart(type, id, c, h, data, options);

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