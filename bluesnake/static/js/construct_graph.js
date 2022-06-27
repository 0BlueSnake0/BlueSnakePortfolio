function CheckIfCanSpawn(x, y, xCheck, yCheck)
{
    var distance = Math.sqrt(Math.pow(xCheck-x, 2) + Math.pow(yCheck-y,2));
    if (PixelsToPercents(distance,fieldWidth)  <= spawnZoneRadius) return false;
    return true;
}


function Spawn(nodeId, nodes)
{
    var x, y;
    var canSpawn=false;
    while (!canSpawn) {
        x = PercentsToPixels(RandomInt(xRange[0], xRange[1]), fieldWidth);
        y = PercentsToPixels(RandomInt(yRange[0], yRange[1]), fieldHeight);
        canSpawn=true;
        for (var node of nodes) {
            if (nodeId != node.id && !CheckIfCanSpawn(
            x, y,
            PercentsToPixels(parseInt(node.style.left), fieldWidth),
            PercentsToPixels(parseInt(node.style.top), fieldHeight))
            ) {
                canSpawn=false;
                break;
            }
        }
    }
        $("#" + nodeId).css("left", PixelsToPercents(x, fieldWidth) + "%");
        $("#" + nodeId).css("top",  PixelsToPercents(y, fieldHeight) + "%");
}

var nodes = $("#random-graph-field .node");

for (var node of nodes) {
    connections[node.id] = {};
    Spawn(node.id, nodes);
    node.style.animationName = "node-appear";
    node.style.display = "flex";
}

for (var node1 of nodes) {
    for (var node2 of nodes) {
        if (node1 != node2 && !(connections[node1.id][node2.id] || connections[node2.id][node1.id])) {
            connections[node1.id][node2.id] = true;
            CreateEdge(node1, node2);
        }
    }
}
