var newSize, newDuration, newAnimationName; 


function changeAnimation() {  
    newSize = RandomInt(leftSizeBorder, rightSizeBorder);
    newDuration = RandomInt(leftDurationBorder, rightDurationBorder);
    newAnimationName = animations[Math.floor(Math.random() * animations.length)]; 

    $(this).css("width", newSize);
    $(this).css("height", newSize); 
    $(this).css("animationDuration", newDuration.toString() + "s");  
    $(this).css("animationName", newAnimationName);   

    $(this).css("left", $(window).width() * RandomInt(0, 100 - newSize) / 100); 
    $(this).css("top", $(window).height()* RandomInt(0, 100 - newSize) / 100);  
}


for (var i=0;i<particleSet.length;i++) {
    newSize = RandomInt(leftSizeBorder, rightSizeBorder);
    newDuration = RandomInt(leftDurationBorder, rightDurationBorder); 
    newAnimationName = animations[Math.floor(Math.random() * animations.length)]

    particleSet[i].css("width", newSize);
    particleSet[i].css("height", newSize);  
    particleSet[i].css("left", $(window).width() * RandomInt(0, 100 - newSize) / 100); 
    particleSet[i].css("top", $(window).height() * RandomInt(0, 100 - newSize) / 100);  

    particleSet[i].css("animationName", newAnimationName);   
    particleSet[i].css("animationDuration", newDuration.toString() + "s"); 

    particleSet[i].on('animationiteration', changeAnimation);
}