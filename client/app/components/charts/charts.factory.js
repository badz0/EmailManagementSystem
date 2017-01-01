function chartsFactory() {
  const items = [
    {id: 1, label: 'Item 0'},
    {id: 2, label: 'Item 1'}
  ];
  const currentNavItem = 1;
  const elemsStatus = [
      {name: 'Number of letters sorted by date', status: true, value: 0},
      {name: 'Sorted by Groups', status: true, value: 1},
      {name: 'Sorted by Categoty', status: true, value: 2},
      {name: 'Muliple Charts example', status: true, value: 3}
  ];
  const lineChart = {
    'type': 'pie',
    'theme': 'light',
    'dataProvider': [ {
      'Group': 'Group 1',
      'letters': 500
    }, {
      'Group': 'Group 2',
      'letters': 312
    }, {
      'Group': 'Group 3',
      'letters': 201
    }, {
      'Group': 'Group 4',
      'letters': 165
    }, {
      'Group': 'Group 5',
      'letters': 139
    }, {
      'Group': 'Group 6',
      'letters': 128
    }, {
      'Group': 'Group 7',
      'letters': 99
    }, {
      'Group': 'Group 8',
      'letters': 600
    } ],
    'valueField': 'letters',
    'titleField': 'Group',
    'balloon':{
      'fixedPosition':true
  }};

  return {
    list() {
      return items;
    },
    lineChart() {
      return lineChart;
    },
    columnChart() {
      return columnChart;
    },
    currentNavItem() {
      return currentNavItem;
    },
    elemsStatus() {
      return elemsStatus;
    }
  };
}

export default chartsFactory;
