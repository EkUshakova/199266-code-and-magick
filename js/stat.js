'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 15;
var BAR_GAP = 50;
var BAR_WIDTH = 40;
var DIAGRAM_HEIGHT = -150;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (atr) {
  var maxElement = atr[0];

  for (var i = 0; i < atr.length; i++) {
    if (atr[i] > maxElement) {
      maxElement = atr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP * 2, CLOUD_Y * 4);
  ctx.fillText('Список результатов:', CLOUD_X + GAP * 2, CLOUD_Y * 6);

  for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < times.length; j++) {
      var maxTime = getMaxElement(times);

      ctx.fillStyle = '#000';
      ctx.fillText(Math.floor(times[j]), CLOUD_X + BAR_WIDTH * j + BAR_GAP * (j + 1) + TEXT_GAP, CLOUD_Y * 26 + (DIAGRAM_HEIGHT * Math.floor(times[j]) / maxTime) - GAP);

      ctx.fillStyle = names[j] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() * 0.5 + ')';

      ctx.fillRect(CLOUD_X + BAR_WIDTH * j + BAR_GAP * (j + 1) + TEXT_GAP, CLOUD_Y * 26, BAR_WIDTH, DIAGRAM_HEIGHT * Math.floor(times[j]) / maxTime);
    }

    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_WIDTH * i + BAR_GAP * (i + 1) + TEXT_GAP, -DIAGRAM_HEIGHT + BAR_GAP * 2 + TEXT_GAP + GAP);
  }
};
