
var connections = {};

var fieldWidth=$("#graph-field").width(), fieldHeight=$("#graph-field").height();
var middle= (fieldWidth + fieldHeight)/2;
var nodeSize = $("#graph-field .node").width();
var spawnZoneRadius=(16/$("#graph-field .node").length)*(nodeSize/ middle)*100;
var borderOffsetPercentage=15;
var xRange=[borderOffsetPercentage, nodeSpawnRight=100-borderOffsetPercentage];
var yRange=[borderOffsetPercentage, nodeSpawnBottom=100-borderOffsetPercentage];


var leftEdgeDurationBorder=3, rightEdgeDurationBorder=5;
var edgeAnimations = ["flowing-energy-left", "flowing-energy-right"];
var change = {'flowing-energy-right':'flowing-energy-left', 'flowing-energy-left':'flowing-energy-right'}
var edges = [];
var newEdgeDuration;
