function countStats(list) {
   return list.reduce((acc, curr) => ({
      matches: +curr.matches + acc.matches,
      tries: +curr.tries + acc.tries
   }), {
       matches: 0,
       tries: 0
   });
};

// remove later
console.log(countStats(require('../data.json').players))

module.exports = countStats;