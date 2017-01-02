function globalHardcodeConfigFactory() {
  const chartConfig = {
    buttons: {
      next: `Next`,
      prev: `Prev`
    },
    tags: [
      {name: `Number of letters sorted by date`, id: `columnchart`, label: `Column Chart Global`,
        status: true, value: 0},
      {name: `Sorted by Groups`, id: `piechart`, label: `Pie Chart`,
        status: true, value: 1},
      {name: `Sorted by Categoty`, id: `linechart`, label: `Line Chart`,
        status: true, value: 2},
      {name: `Muliple Charts example`, id: `multiple`, label: `Multiple Chart`,
        status: true, value: 3}
    ],
    currentNavItem: 0,
  };
  return {
    chartConfigs() {
      return chartConfig;
    }
  };
}

export default globalHardcodeConfigFactory;
