function ChartsFactory() {
 const items = [
      {id: 1, label: 'Item 0'},
      {id: 2, label: 'Item 1'}
    ];
    return {
      list() {
        return items;
      }
    };
}

export default ChartsFactory;
