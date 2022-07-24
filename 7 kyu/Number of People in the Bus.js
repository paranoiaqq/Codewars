var number = function (busStops) {
  let cur = busStops[0][0];
  for (let i = 1; i < busStops.length; i++) {
    cur += busStops[i][0];
    cur -= busStops[i][1];
  }
  return cur;
};
