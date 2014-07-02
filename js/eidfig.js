eid_data = [ 
  {
    key: 'Viruses and prions',
    color: '#d62728',
    values: [
      { 
        "label" : "Ungulates" ,
        "value" : 43
      } , 
      { 
        "label" : "Carnivores" ,
        "value" : 16
      } , 
      { 
        "label" : "Rodents" ,
        "value" : 50
      } , 
      { 
        "label" : "Non-mammals" ,
        "value" : 35
      } , 
      {
        "label" : "Primates" ,
        "value" : 35
      } , 
      { 
        "label" : "Other mammals" ,
        "value" : 13
      } , 
      { 
        "label" : "Bats" ,
        "value" : 16
      }
    ]
  },
  {
    key: 'Bacteria and rickettsiae',
    color: '#1f77b4',
    values: [
      { 
        "label" : "Ungulates" ,
        "value" : 112
      } , 
      { 
        "label" : "Carnivores" ,
        "value" : 64
      } , 
      { 
        "label" : "Rodents" ,
        "value" : 51
      } , 
      { 
        "label" : "Non-mammals" ,
        "value" : 41
      } , 
      {
        "label" : "Primates" ,
        "value" : 30
      } , 
      { 
        "label" : "Other mammals" ,
        "value" : 11
      } , 
      { 
        "label" : "Bats" ,
        "value" : 4
      }
    ]
  },
  {
    key: 'Fungi',
    color: '#d62728',
    values: [
      { 
        "label" : "Ungulates" ,
        "value" : 36
      } , 
      { 
        "label" : "Carnivores" ,
        "value" : 46
      } , 
      { 
        "label" : "Rodents" ,
        "value" : 9
      } , 
      { 
        "label" : "Non-mammals" ,
        "value" : 22
      } , 
      {
        "label" : "Primates" ,
        "value" : 9
      } , 
      { 
        "label" : "Other mammals" ,
        "value" : 3
      } , 
      { 
        "label" : "Bats" ,
        "value" : 1
      }
    ]
  },
  {
    key: 'Protozoa',
    color: '#d62728',
    values: [
      { 
        "label" : "Ungulates" ,
        "value" : 11
      } , 
      { 
        "label" : "Carnivores" ,
        "value" : 15
      } , 
      { 
        "label" : "Rodents" ,
        "value" : 17
      } , 
      { 
        "label" : "Non-mammals" ,
        "value" : 5
      } , 
      {
        "label" : "Primates" ,
        "value" : 13
      } , 
      { 
        "label" : "Other mammals" ,
        "value" : 8
      } , 
      { 
        "label" : "Bats" ,
        "value" : 0
      }
    ]
  },
  {
    key: 'Helminths',
    color: '#d62728',
    values: [
      { 
        "label" : "Ungulates" ,
        "value" : 61
      } , 
      { 
        "label" : "Carnivores" ,
        "value" : 105
      } , 
      { 
        "label" : "Rodents" ,
        "value" : 59
      } , 
      { 
        "label" : "Non-mammals" ,
        "value" : 70
      } , 
      {
        "label" : "Primates" ,
        "value" : 33
      } , 
      { 
        "label" : "Other mammals" ,
        "value" : 12
      } , 
      { 
        "label" : "Bats" ,
        "value" : 3
      }
    ]
  }
];

var mbchart;
nv.addGraph(function() {
  mbchart = nv.models.multiBarChart()
      .x(function(d) { return d.label })
      .y(function(d) { return d.value })
      .margin({top: 40, right: 20, bottom: 80, left: 20})
      .barColor(d3.scale.category20().range())
      .showControls(true);

    mbchart.multibar
      .hideable(true);

    /*var xTicks = d3.select('.nv-x.nv-axis > g').selectAll('g');
    xTicks
      .selectAll('text')
      .attr('transform', function(d,i,j) { return 'translate (-10, 25) rotate(-90 0,0)' }) ;
     */
    mbchart.yAxis
        .tickFormat(d3.format(',.0f'));

  d3.select('#eidfig .chart').append("svg")
      .attr("width", 800)
      .attr("height", 600)
      .datum(eid_data)
    .transition().duration(500)
      .call(mbchart);

  nv.utils.windowResize(mbchart.update);

  mbchart.dispatch.on('stateChange', function(e) { nv.log('New State:', JSON.stringify(e)); });

  return mbchart;
});

