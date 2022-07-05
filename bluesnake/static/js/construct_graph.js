function Distance(x1, y1, x2, y2) { 
    return Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1,2));
}


function CheckIfCanSpawn(x1, y1, x2, y2)
{
    var distance = Distance(x1, y1, x2, y2);
    if (PixelsToPercents(distance, fieldWidth) <= spawnZoneRadius) return false;
    return true;
}


function Spawn(nodeId, nodes)
{
    var x1, y1, x2, y2;
    var canSpawn=false;
    while (!canSpawn) {
        x1 = PercentsToPixels(RandomInt(xRange[0], xRange[1]), fieldWidth);
        y1 = PercentsToPixels(RandomInt(yRange[0], yRange[1]), fieldHeight);
        canSpawn=true;
        for (var node of nodes) {
            x2 = PercentsToPixels(parseInt(node.style.left), fieldWidth);
            y2 = PercentsToPixels(parseInt(node.style.top), fieldHeight);
            if (nodeId != node.id && !CheckIfCanSpawn(x1, y1, x2, y2)) {
                canSpawn=false;
                break;
            }
        } 
    } 
    $("#" + nodeId).css("left", PixelsToPercents(x1, fieldWidth) + "%");
    $("#" + nodeId).css("top",  PixelsToPercents(y1, fieldHeight) + "%");
}

var nodes = $("#graph-field .node");

for (var node of nodes) {
    connections[node.id] = {};   
    Spawn(node.id, nodes);
    node.style.animationName = "node-grow";
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
