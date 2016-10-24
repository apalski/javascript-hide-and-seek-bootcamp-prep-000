function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
    const rankUp = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (let i = 0, l = rankUp.length; i < l; i++) {
      rankUp[i].innerHTML = parseInt(rankUp[i].innerHTML) + n;
    }
}

function deepestChild() {
  const deepC = document.getElementById('grand-node').querySelectorAll('div');
  var hold = [];
  for (let i = 0, l = deepC.length; i < (l-1); i++) {
    hold.push(deepC[i]);
  }
  return hold.pop();
}
