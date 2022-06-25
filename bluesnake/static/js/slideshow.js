var slideshows, slides, leftarrow, rightarrow;
slideshows =$(".slideshow");


var activated = {};
var checked = {};
var navElements = [];


function getPrevSlideIndex(numberOfSlides, slideIndex)
{  
    if (slideIndex == 0) return numberOfSlides-1;
    return slideIndex-1;
}


function getNextSlideIndex(numberOfSlides, slideIndex)
{  
    if (slideIndex == numberOfSlides-1) return 0;
    return slideIndex+1;
}


function DeactivateSlide(slideshowId, slideList, slideIndex)
{  
    $("#" + slideList[slideIndex].id).css("display", "none");
    $("#" + slideList[slideIndex].id + "-navigationbar").css("background-color", "transparent");
    $("#" + slideList[slideIndex].id + "-navigationbar").css("color", "white");
    activated[slideshowId][slideIndex] = false;    
}


function countPercentage(hashmap, slideshowId)
{
    var checkedSlidesNumber=0;
    var SlidesNumber=0;
    for (var key in hashmap[slideshowId]) {
        if (hashmap[slideshowId][key]) checkedSlidesNumber++;
        SlidesNumber++;
    }
    return 100 * (checkedSlidesNumber / SlidesNumber);
}


function ActivateSlide(slideshowId, slideList, slideIndex, newAnimation="", activateleftright=true)
{
    checked[slideshowId][slideIndex]=true;
    activated[slideshowId][slideIndex] = true;
    $("#" + slideList[slideIndex].id).css("display", "block");
    $("#" + slideList[slideIndex].id+ "-progressbar").css("display", "block"); 
    if (newAnimation != "") $("#" + slideList[slideIndex].id).css("animation-name", newAnimation);
    $("#" + slideshowId + " .slideshow-percentage").get(0).innerHTML = Math.floor(countPercentage(checked, slideshowId).toString()) + "%";
    $("#" + slideList[slideIndex].id + "-navigationbar").css("background-color", "white"); 
    $("#" + slideList[slideIndex].id + "-navigationbar").css("color", "rgb(27, 35, 63)");

    var prevslide, nextslide;
    if (slides.length > 0 && activateleftright ) {  
        Left = document.getElementById(slideshowId).getElementsByClassName("left-side")[0];
        Right = document.getElementById(slideshowId).getElementsByClassName("right-side")[0];
        prevslide = document.getElementById(slides[getPrevSlideIndex(slides.length, slideIndex)].id).cloneNode(true);
        nextslide = document.getElementById(slides[getNextSlideIndex(slides.length, slideIndex)].id).cloneNode(true);
        prevslide.style.animationName = newAnimation;
        nextslide.style.animationName = newAnimation;
        prevslide.id += "-left";nextslide.id += "-right";
        prevslide.style.display = "block";nextslide.style.display = "block";
        Left.innerHTML= '';Right.innerHTML= '';
        if (slideIndex != 0 || countPercentage(checked, slideshowId) == 100) Left.appendChild(prevslide);
        Right.appendChild(nextslide);
    }
}

 
function ShowPreviousSlide()
{
    var slideshowId = this.id.toString().split("-")[0] + "-" + this.id.toString().split("-")[1];
    var slides = $("#" + slideshowId + " .content-zone .slideshow-item");

    var next;
    for (var slideIndex=0;slideIndex<slides.length;slideIndex++)
        if (activated[slideshowId][slideIndex]) {
            next=getPrevSlideIndex(slides.length, slideIndex);break; 
        }
    if (!(next == slides.length - 1 && countPercentage(checked, slideshowId) != 100)) {
        ActivateSlide(slideshowId, slides, next, "prev-slide");
        DeactivateSlide(slideshowId, slides, getNextSlideIndex(slides.length, next));
    }
}


function ShowNextSlide()
{
    var slideshowId = this.id.toString().split("-")[0] + "-" + this.id.toString().split("-")[1];
    var slides = $("#" + slideshowId + " .content-zone .slideshow-item");

    var next;
    for (var slideIndex=0;slideIndex<slides.length;slideIndex++)
        if (activated[slideshowId][slideIndex]) {
            next=getNextSlideIndex(slides.length, slideIndex);break; 
        }
    ActivateSlide(slideshowId, slides, next, "next-slide"); 
    DeactivateSlide(slideshowId, slides, getPrevSlideIndex(slides.length, next));   
}



function ActivateArrows(slideshowId)
{ 
    leftarrowId =  slideshowId + "-left";
    rightarrowId = slideshowId + "-right";
    $("#" + slideshowId + " .left-arrow-area div").get(0).id = leftarrowId;
    $("#" + slideshowId + " .right-arrow-area div").get(0).id = rightarrowId;
    $("#" + leftarrowId).on("click", ShowPreviousSlide);
    $("#" + rightarrowId).on("click", ShowNextSlide);
}


function NavigationClicked(navElementId, slideList) {
    var splitted = navElementId.split("-");
    var slideshowId = splitted[0] + "-" + splitted[1];
    var slideIndex = parseInt(splitted[3]);
    var lastIndex;
    for (var i=0;i<slideList.length;i++) {
        if (activated[slideshowId][i]==true) {
            lastIndex=i;
            break;
        }
    }
    DeactivateSlide(slideshowId, slideList, lastIndex);
    var newAnimation;
    if (lastIndex < slideIndex) newAnimation = "next-slide";
    else newAnimation = "prev-slide";
    ActivateSlide(slideshowId, slideList, slideIndex, newAnimation);
}


function InitSlideshows()
{
    for (var slideshowIndex=0;slideshowIndex<slideshows.length;slideshowIndex++) {
        var slideshowId = "slideshow-" + slideshowIndex.toString();
        slideshows[slideshowIndex].id = slideshowId;
        slides = slideshows[slideshowIndex].getElementsByClassName("content-zone")[0].getElementsByClassName("slideshow-item");
        slideshows[slideshowIndex].getElementsByTagName("nav")[0].id = slideshowId + "-navigation";
        var progressbar = slideshows[slideshowIndex].getElementsByClassName("slideshow-progressbar")[0];
        slideshows[slideshowIndex].getElementsByClassName("slideshow-percentage")[0].innerHTML="0%";
        var navigationbar = slideshows[slideshowIndex].getElementsByTagName("nav")[0];
        progressbar.id = slideshowId + "-progressbar";
        activated[slideshowId] = {};
        checked[slideshowId] = {};
        
        var barElement, navElement;
        for (var slideIndex=0;slideIndex<slides.length;slideIndex++) {
            checked[slideshowId][slideIndex] = false;
            slides[slideIndex].id = slideshowId + "-slide-" + slideIndex.toString();

            barElement = document.createElement("div");  
            barElement.id = slides[slideIndex].id + "-progressbar";

            navElement = document.createElement("div");
            navElement.id = slides[slideIndex].id + "-navigationbar";

            progressbar.appendChild(barElement);
            navElement.addEventListener("click", function(e) {NavigationClicked(this.id, slides);}, false);
            navigationbar.appendChild(navElement);

            DeactivateSlide(slideshowId, slides, slideIndex);
        }
    
        var prevslide, nextslide;
        if (slides.length > 0) { 
            if (slides.length > 1) {
                ActivateArrows(slideshowId);
                ActivateSlide(slideshowId, slides, 0, "next-slide");
            }
            else ActivateSlide(slideshowId, slides, 0, "next-slide", false);
        }
    }
}
InitSlideshows();
