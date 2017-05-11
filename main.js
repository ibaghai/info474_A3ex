d3.csv('data2.csv', function(error, data) {
  if (error) {
      console.error('Error getting or parsing the data.');
      throw error;
  }

  var chart = bubbles().strength(-100).range([5,30]).title('Purchases By card type').
  columnForRadius('purchaseAmount').identifer("id").columnForColors('cardType');


  var wrapper = d3.select('#chart').data(data).call(chart);

  
});
