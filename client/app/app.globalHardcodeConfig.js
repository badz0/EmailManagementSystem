function globalHardcodeConfigFactory() {
    return {
      buttons: {
        next: `Next`,
        prev: `Prev`
      },
      tags: [
        {name: `Number of letters sorted by date`, id: `columnchart`, label: `Column Chart`,
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
};

export default globalHardcodeConfigFactory;
