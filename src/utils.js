export const transformChartDataRepos = (arr) => {
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

export const transformChartDataStars = (arr) => {
  let starCount = arr.reduce((prev, next) => {
    if (!next.language) return prev;
    if (prev[next.language]) {
      prev[next.language] = prev[next.language] + next.stargazers_count;
    } else {
      prev[next.language] = next.stargazers_count;
    }
    return prev;
  }, {});

  return Object.keys(starCount)
    .map((i) => ({ label: i, value: starCount[i] }))
    .sort((a, b) => (b.value > a.value ? 1 : -1))
    .slice(0, 5);
};

export const transformChartDataPopularRepos = (arr) => {
  let starCountPerRepo = arr.reduce((prev, next) => {
    if (prev[next.name]) {
      prev[next.name] = prev[next.name] + next.stargazers_count;
    } else {
      prev[next.name] = next.stargazers_count;
    }
    return prev;
  }, {});
  return Object.keys(starCountPerRepo)
    .map((i) => ({ label: i, value: starCountPerRepo[i] }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
};

export const transformChartDataMostForked = (arr) => {
  let forkedRepos = arr.reduce((total, item) => {
    if (total[item.name]) {
      total[item.name] = total[item.name] + item.forks_count;
    } else {
      total[item.name] = item.forks_count;
    }
    return total;
  }, {});

  return Object.keys(forkedRepos)
    .map((i) => ({ label: i, value: forkedRepos[i] }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
};
