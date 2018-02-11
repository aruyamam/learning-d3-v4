import prisonChart from './prisonChart';
import buttonPrisonChart from './buttonChart';
// import draggablePrisonChart from './draggableChart';
// import brushableChart from './brushableChart';
// import zoomMap from './zoomMap';

// Base chart
(async (enabled) => {
  if (!enabled) return;
  
  await prisonChart.init();
  const data = prisonChart.data;
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const randomChart = () => {
    try {
      const from = getRandomInt(0, data.length - 1);
      const to = getRandomInt(from, data.length - 1);
      prisonChart.update(data.slice(from, to));
    }
    catch (e) {
      console.error(e);
    }
  };

  prisonChart.update(data);
  setInterval(randomChart, 5000);
})(false);

// Button chart
(async (enabled) => {
  if (!enabled) return;

  // await buttonPrisonChart.resolveData();
  await buttonPrisonChart.init();
  buttonPrisonChart.addUIElements();
})(true);

(async (enabled) => {
  if (!enabled) return;

  await draggablePrisonChart.init();
  draggablePrisonChart.addDragBehavior();
})(false);

(async (enabled) => {
  if (!enabled) return;

  await brushableChart.init();
  brushableChart.addBrushBehavior();
})(false);

(async (enabled) => {
  if (!enabled) return;

  zoomMap.addZoomBehavior();
})(false);