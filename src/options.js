export default {
  title: 'Mentions des concepts par sessions',
  axes: {
    bottom: {
      title: 'Sessions',
      mapsTo: 'key',
      scaleType: 'labels',
    },
    left: {
      mapsTo: 'value',
      title: 'Occurence des concepts',
      scaleType: 'linear',
    },
  },
  height: '400px',
};
