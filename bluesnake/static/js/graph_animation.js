function changeEdgeAnimation() {
    newEdgeDuration = RandomInt(leftEdgeDurationBorder, rightEdgeDurationBorder);
    $(this).css("animation-duration", newEdgeDuration.toString() + "s");
    $(this).css("animation-name", change[$(this).css("animation-name")]);
}

for (var i=0;i<document.getElementsByClassName("line").length;i++) {
    edges.push($("#" + "line-" + i.toString()+ "-background"));
}


for (var i=0;i<edges.length;i++) {
    newEdgeDuration = RandomInt(leftEdgeDurationBorder, rightEdgeDurationBorder);
    edges[i].css("animation-name", edgeAnimations[Math.floor(Math.random() * edgeAnimations.length)]);
    edges[i].css("animation-duration", newEdgeDuration);
    edges[i].on("animationiteration", changeEdgeAnimation);
}
