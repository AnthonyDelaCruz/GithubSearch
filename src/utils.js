export const transformChartData = (arr) => {
  let keys = arr.map((i) => i.language).filter((i) => !!i);
  let keyTally = keys.reduce((a, b) => {
    if (a[b]) {
      a[b] = a[b] + 1;
    } else {
      a[b] = 1;
    }
    return a;
  }, {});
  return Object.keys(keyTally)
    .map((i) => ({ label: i, value: keyTally[i] }))
    .sort((a, b) => (b.value > a.value ? 1 : -1))
    .slice(0, 5);
};
