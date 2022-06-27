
var connections = {};

var fieldWidth=$("#random-graph-field").width(), fieldHeight=$("#random-graph-field").height();
var middle= (fieldWidth + fieldHeight)/2;
var nodeSize = $("#random-graph-field .node").width();
var spawnZoneRadius=(16/$("#random-graph-field .node").length)*(nodeSize/ middle)*100;
var borderOffsetPercentage=15;
var xRange=[borderOffsetPercentage, nodeSpawnRight=100-borderOffsetPercentage];
var yRange=[borderOffsetPercentage, nodeSpawnBottom=100-borderOffsetPercentage];


var leftEdgeDurationBorder=3, rightEdgeDurationBorder=5;
var edgeAnimations = ["flowing-energy-left", "flowing-energy-right"];
var change = {'flowing-energy-right':'flowing-energy-left', 'flowing-energy-left':'flowing-energy-right'}
var edges = [];
var newEdgeDuration;
