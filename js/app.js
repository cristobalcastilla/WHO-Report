jQuery(document).ready(function($) {
  var type, id, c, h, data, options;

  var $container = $('.container:first');
  var containerWidth = $container.width();
  columnWidth = containerWidth/12;

  var sans = 'Droid Sans';
  var serif = 'Droid Serif';

  // mortandad infantil
  type = 'line';
  id = 'viz-2-1';
  c = 12;
  h = 300;
  data = {
    labels : ["Africa","America","Eastern Mediterranean","Europa","South-East Asia","Western Pacific","Global"],
    datasets : [
      {
        fillColor : "rgba(140,140,140,0.5)",
        strokeColor : "rgba(140,140,140,1)",
        pointColor : "rgba(140,140,140,1)",
        pointStrokeColor : "#fff",
        data : [3893,418,1172,228,3156,848,9716]
      },
      {
        fillColor : "rgba(0,142, 196,0.5)",
        strokeColor : "rgba(0,142, 196,1)",
        pointColor : "rgba(0,142, 196,1)",
        pointStrokeColor : "#fff",
        data : [3129,239,915,141,1806,424,6640]
      }
    ]
  }

  // createChart(type, id, c, h, data);



  // inmunización
  type = 'radar';
  id = 'viz-2-2';
  c = 12;
  h = 300;
  data = {
    labels : ["2000","2006","2012"],
    datasets : [
      //Hepatisis B
      {
        fillColor : "rgba(245,227,138,0.5)",
        strokeColor : "rgba(245,227,138,1)",
        pointColor : "rgba(245,227,138,1)",
        pointStrokeColor : "#fff",
        data : [39,66,81]
      },
      //DTP3
      {
        fillColor : "rgba(245,227,138,0.5)",
        strokeColor : "rgba(245,227,138,1)",
        pointColor : "rgba(245,227,138,1)",
        pointStrokeColor : "#fff",
        data : [63,83,83]
      }
    ]
  }

  // createChart(type, id, c, h, data);


  // Alcohol
  type = 'bar';
  id = 'viz-3-1';
  c = 6;
  h = 300;
  data = {
    labels : ["Hombre","Mujer"],
    datasets : [
      {
        fillColor : "rgba(213,113,106,0.5)",
        strokeColor : "rgba(255,255,255,1)",
        data : [8.16,2.09]
      },
      {
        fillColor : "rgba(239,145,105,0.5)",
        strokeColor : "rgba(255,255,255,1)",
        data : [10.82,3.8]
      },
      {
        fillColor : "rgba(245, 227, 138,0.5)",
        strokeColor : "rgba(255,255,255,1)",
        data : [1.77,0.26]
      },
      {
        fillColor : "rgba(153, 80, 128,0.5)",
        strokeColor : "rgba(255,255,255,1)",
        data : [15.04,5.40]
      },
      {
        fillColor : "rgba(82, 118, 160,0.5)",
        strokeColor : "rgba(255,255,255,1)",
        data : [4.38,0.23]
      },
      {
        fillColor : "rgba(119, 171, 115,0.5)",
        strokeColor : "rgba(255,255,255,1)",
        data : [8.46,1.76]
      }
    ]
  }

  createChart(type, id, c, h, data);



  // violencia sexual
  type = 'line';
  id = 'viz-3-2';
  c = 6;
  h = 300;
  data = {
    // labels : ["Africa Region","Americas","Eastern Mediterranean Region","European Region","South-East Asia Region","Western Pacific Region"],
    labels: ['afr', 'amr', 'emr', 'eur', 'sear', 'wpr'],
    datasets : [
      {
        fillColor : "rgba(82,118,160,0.5)",
        // strokeColor : "rgba(255,255,255,1)",
        // pointColor : "rgba(140,140,140,0)",
        // pointStrokeColor : "#000000",
        data : [36.67,29.8,37.0,25.4,37.67,24.55]
      },      
      {
        fillColor : "rgba(173,45,164,0.5)",
        // strokeColor : "rgba(255,255,255,1)",
        // pointColor : "rgba(140,140,140,0)",
        // pointStrokeColor : "#000000",
        data : [11.91,10.69,0,5.24,4.94,6.81]
      }
    ]
  }

  createChart(type, id, c, h, data);


  // desnutricion + obesidad
  type = 'line';
  id = 'viz-3-3';
  c = 12;
  h = 300;
  data = {
    labels : ["África","Américas","Asia Sudoriental","Europa","Mediterráneo Oriental","Pacífico Occidental","Global"],
    datasets : [
      <!--//Bajo Peso: celeste-->
      {
        fillColor : "rgba(0,142,196,0.5)",
        strokeColor : "rgba(0,142,196,1)",
        pointColor : "rgba(0,142,196,1)",
        pointStrokeColor : "#fff",
        data : [36.3,1.5,46.9,0.8,9.8,4.8,98.6]
      },
      <!--//Obesos gris-->
      {
        fillColor : "rgba(140,140,140,0.5)",
        strokeColor : "rgba(140,140,140,1)",
        pointColor : "rgba(140,140,140,1)",
        pointStrokeColor : "#fff",
        data : [9.5,5.8,6.7,6.7,5.8,6.5,43.7]
      }
    ]
  }

  createChart(type, id, c, h, data);




  // agua potable y saneamiento - a 
  type = 'bar';
  id = 'viz-4-1-2-a';
  c = 6;
  h = 300;

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




  // agua potable y saneamiento - b
  id = 'viz-4-1-2-b';
  data = {
    labels : ["Acceso a saneamiento",],
    datasets : [
      {
        fillColor : "rgba(213,113,106,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [36]
      },
      {
        fillColor : "rgba(245,227,138,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [76]
      },

      {
        fillColor : "rgba(82,118,160,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [65]
      },
      {
        fillColor : "rgba(119,171,115,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [75]
      },
      {
        fillColor : "rgba(239,145,105,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [82]
      },
      {
        fillColor : "rgba(153,80,128,0.9)", 
        strokeColor : "rgba(255,255,255,1)", 
        data : [97]
      }
    ]
  };

  createChart(type, id, c, h, data, options);




  // Compromiso y Desembolso
  type = 'bar';
  id = 'viz-4-2-1-a';
  c = 6;
  h = 300;
  data = {
    <!-- // labels: Bolivia, Chile, Nigeria, Côte dIvoire, Egypt, Syrian Arab Republic,Turkey, The former Yugoslav Republic of Macedonia, India, Thailand, Papua New Guinea, China-->
    labels : ["l1"],
    datasets : [
      <!-- //Compromiso y Desembolso (intercalados)-->
      {
        fillColor : "rgba(239,145,105,1)",
        strokeColor : "#ffffff",
        data : [93.41]
        
      },
      {
        fillColor : "rgba(239,145,105,0.5)",
        strokeColor : "#ffffff)",
        data : [42.01]
      },
      {
        fillColor : "rgba(239,145,105,1)",
        strokeColor : "#ffffff",
        data : [0.72]
      },
      {
        fillColor : "rgba(239,145,105,0.5)",
        strokeColor : "#ffffff)",
        data : [3.45]
      },
      {
        fillColor : "rgba(213,113,106,1)",
        strokeColor : "#ffffff",
        data : [367.12]
      },
        {
        fillColor : "rgba(213,113,106,0.5)",
        strokeColor : "#ffffff)",
        data : [30.28]
      },
      {
        fillColor : "rgba(213,113,106,1)",
        strokeColor : "#ffffff",
        data : [9.75]
      },
      {
        fillColor : "rgba(213,113,106,0.5)",
        strokeColor : "#ffffff)",
        data : [15.31]
      },
      {
        fillColor : "rgba(245,227,138,1)",
        strokeColor : "#ffffff",
        data : [92.03]
      },
      {
        fillColor : "rgba(245,227,138,0.5)",
        strokeColor : "#ffffff)",
        data : [3.9]
      },
      {
        fillColor : "rgba(245,227,138,1)",
        strokeColor : "#ffffff",
        data : [0.88]
      },
      {
        fillColor : "rgba(245,227,138,0.5)",
        strokeColor : "#ffffff)",
        data : [0.78]
      },
      {
        fillColor : "rgba(153,80,128,1)",
        strokeColor : "#ffffff",
        data : [92.26]
      },
      {
        fillColor : "rgba(153,80,128,0.5)",
        strokeColor : "#ffffff)",
        data : [0.83]
      },
      {
        fillColor : "rgba(153,80,128,1)",
        strokeColor : "#ffffff",
        data : [1.18]
      },
      {
        fillColor : "rgba(153,80,128,0.5)",
        strokeColor : "#ffffff)",
        data : [10.52]
      },
      {
        fillColor : "rgba(82,118,160,1)",
        strokeColor : "#ffffff",
        data : [714.76]
      },
      {
        fillColor : "rgba(82,118,160,0.5)",
        strokeColor : "#ffffff)",
        data : [480.31]
      },
      {
        fillColor : "rgba(82,118,160,1)",
        strokeColor : "#ffffff",
        data : [6.73]
      },
      {
        fillColor : "rgba(82,118,160,0.5)",
        strokeColor : "#ffffff)",
        data : [22.39]
      },
      {
        fillColor : "rgba(119,171,115,1)",
        strokeColor : "#ffffff",
        data : [161.97]
      },
      {
        fillColor : "rgba(119,171,115,0.5)",
        strokeColor : "#ffffff)",
        data : [44.12]
      },
      {
        fillColor : "rgba(119,171,115,1)",
        strokeColor : "#ffffff",
        data : [80.9]
      },
      {
        fillColor : "rgba(119,171,115,0.5)",
        strokeColor : "#ffffff)",
        data : [173.58]
      }
    ] 
  }

  createChart(type, id, c, h, data);




  // cobertura salud
  type = 'polar';
  id = 'viz-4-2-1-b';
  c = 6;
  h = 300;

  data = [
    <!--//Africa-->
    {
      value : 38.4,
      color: "#D5716A"
    },
    <!--//Americas-->
    {
      value : 895.5,
      color: "#EF9169"
    },
    <!--//Asia Sudoriental-->
    {
      value : 19.5,
      color: "#5376A0"
    },
    <!--//Europa-->
    {
      value : 898.6,
      color: "#995080"
    },
    <!--//Mediterraneo Oriental-->
    {
      value : 81.9,
      color: "#F5E38A"
    },
    <!--//Pacifico Occidental-->
    {
      value : 188.9,
      color: "#7AB73A"
    },
    <!--//Global: gris institucional-->
    {
      value : 318.3,
      color: "#8C8C8C"
    }
  ];

  createChart(type, id, c, h, data);









  // personal calificado en el parto
  type = 'polar';
  id = 'viz-4-2-2';
  c = 12;
  h = 300;
  data = [
    {
      value : 51,
      color: "#D5716A"
    },
    {
      value : 70,
      color: "#EF9169"
    },
    {
      value : 69,
      color: "#F5E38A"
    },
    {
      value : 96,
      color: "#995080"
    },
    {
      value : 40,
      color: "#5376A0"
    },
    {
      value : 63,
      color: "#77AB77"
    }
  ];

  createChart(type, id, c, h, data);

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