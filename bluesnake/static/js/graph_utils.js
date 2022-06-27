function PixelsToPercents(pixels, widthOrHeight) {return (pixels/widthOrHeight)*100;}
function PercentsToPixels(percents, widthOrHeight) {return widthOrHeight * (percents/100);}
function RandomInt(border1, border2) {return Math.floor(border1 + Math.random() * (border2 - border1));}


function DrawLine(start, end, lineSize, areaId)
{
    var Line = document.createElement("div");
    var LineBackground = document.createElement("div");
    LineBackground.classList.add("line-background");
    Line.classList.add("line");
    var length = Math.sqrt(Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2));
    Line.style.height = lineSize;
    Line.style.left = PixelsToPercents((start[0] + end[0])/2 - 0.5*length + 0.5*nodeSize, fieldWidth) + '%';
    Line.style.top = PixelsToPercents((start[1] + end[1]) / 2 + 0.5*nodeSize, fieldHeight) + '%';
    Line.id = "line-" + $("#" + areaId + " .line").length;
    LineBackground.id = Line.id + "-background";

    var degreesSin = Math.abs(end[1]-start[1]) / length;
    var rotateDirection;
    if (end[0]-start[0] == 0) rotateDirection=1;
    else rotateDirection = ((end[0]-start[0])*(end[1]-start[1])) / (Math.abs(end[0]-start[0])*Math.abs(end[1]-start[1]));
    var degrees = Math.asin(degreesSin)*(180/3.141);
    var rotation = rotateDirection*degrees;
    Line.style.transform= 'rotate(' + rotation + 'deg)';

    Line.appendChild(LineBackground);
    document.getElementById(areaId).appendChild(Line);
    Line.style.width = length;
    Line.style.width = PixelsToPercents(length, $("#" + Line.parentNode.parentNode.id).width()) + "%";
}


function CreateEdge(node1, node2)
{
    var coord1, coord2;
    coord1 = [
        PercentsToPixels(parseInt(node1.style.left), fieldWidth),
        PercentsToPixels(parseInt(node1.style.top), fieldHeight)
    ];
    coord2 = [
        PercentsToPixels(parseInt(node2.style.left), fieldWidth),
        PercentsToPixels(parseInt(node2.style.top), fieldHeight)
    ];
    DrawLine(coord1, coord2, "5px", "graph");
}
