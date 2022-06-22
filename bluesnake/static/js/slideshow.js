var slideshows, slides, leftarrow, rightarrow;
slideshows = document.getElementsByClassName("slideshow");


var activated = {};
var checked = {};
var allSlidesWereSeen=false;


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
    document.getElementById(slideList[slideIndex].id).style.display = "none";
    document.getElementById(slideList[slideIndex].id + "-navigationbar").style.backgroundColor = "rgb(27, 35, 63)";
    document.getElementById(slideList[slideIndex].id + "-navigationbar").style.color = "white";
    activated[slideshowId][slideIndex] = false;    
}


function ActivateSlide(slideshowId, slideList, slideIndex, newAnimation="", activateleftright=true)
{ 
    document.getElementById(slideList[slideIndex].id).style.display = "block";  
    document.getElementById(slideList[slideIndex].id + "-progressbar").style.display = "block";
    if (newAnimation != "none") document.getElementById(slideList[slideIndex].id).style.animationName = newAnimation;  
    if (checked[slideshowId] < slideList.length) checked[slideshowId]+=1;
    document.getElementById(slideshowId).getElementsByClassName("slideshow-percentage")[0].innerHTML = 
        Math.floor(100*(checked[slideshowId] /  slideList.length)).toString() + "%";  
    document.getElementById(slideList[slideIndex].id + "-navigationbar").style.backgroundColor = "white";
    document.getElementById(slideList[slideIndex].id + "-navigationbar").style.color = "rgb(27, 35, 63)";
    activated[slideshowId][slideIndex] = true;    

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
        if (slideIndex != 0 || allSlidesWereSeen) Left.appendChild(prevslide);
        Right.appendChild(nextslide);   
    }
}

 
function ShowPreviousSlide()
{
    var slideshowId = this.id.toString().split("-")[0] + "-" + this.id.toString().split("-")[1];
    var slides = document.getElementById(slideshowId).getElementsByClassName("content-zone")[0].getElementsByClassName("slideshow-item"); 

    var next;
    for (var slideIndex=0;slideIndex<slides.length;slideIndex++)
        if (activated[slideshowId][slideIndex]) {
            next=getPrevSlideIndex(slides.length, slideIndex);break; 
        }   
    if (next != slides.length -1 || allSlidesWereSeen) {
        ActivateSlide(slideshowId, slides, next, "prev-slide"); 
        DeactivateSlide(slideshowId, slides, getNextSlideIndex(slides.length, next));  
    }
}


function ShowNextSlide()
{
    var slideshowId = this.id.toString().split("-")[0] + "-" + this.id.toString().split("-")[1];
    var slides = document.getElementById(slideshowId).getElementsByClassName("content-zone")[0].getElementsByClassName("slideshow-item"); 

    var next;
    for (var slideIndex=0;slideIndex<slides.length;slideIndex++)
        if (activated[slideshowId][slideIndex]) {
            next=getNextSlideIndex(slides.length, slideIndex);break; 
        }  
    if (next == slides.length-1) allSlidesWereSeen=true;
    ActivateSlide(slideshowId, slides, next, "next-slide"); 
    DeactivateSlide(slideshowId, slides, getPrevSlideIndex(slides.length, next));   
}



function ActivateArrows(slideshowId)
{ 
    leftarrow =  slideshowId + "-left";rightarrow = slideshowId + "-right";
    document.getElementById(slideshowId).getElementsByClassName("left-arrow-area")[0].getElementsByTagName("div")[0].id = leftarrow;
    document.getElementById(slideshowId).getElementsByClassName("right-arrow-area")[0].getElementsByTagName("div")[0].id = rightarrow;
    document.getElementById(leftarrow).addEventListener("click", ShowPreviousSlide, false);
    document.getElementById(rightarrow).addEventListener("click", ShowNextSlide, false);
}


function InitSlideshows()
{
    for (var slideshowIndex=0;slideshowIndex<slideshows.length;slideshowIndex++) {
    
        slideshows[slideshowIndex].id = "slideshow-" + slideshowIndex.toString();
        slides = slideshows[slideshowIndex].getElementsByClassName("content-zone")[0].getElementsByClassName("slideshow-item");
        slideshows[slideshowIndex].getElementsByTagName("nav")[0].id = slideshows[slideshowIndex].id + "-navigation";
        var progressbar = slideshows[slideshowIndex].getElementsByClassName("slideshow-progressbar")[0];
        slideshows[slideshowIndex].getElementsByClassName("slideshow-percentage")[0].innerHTML="0%";
        var navigationbar = slideshows[slideshowIndex].getElementsByTagName("nav")[0];
        progressbar.id = slideshows[slideshowIndex].id + "-progressbar"; 
        activated[slideshows[slideshowIndex].id] = {};
        checked[slideshows[slideshowIndex].id] = 0;
        
        var barElement, navElement; 
        for (var slideIndex=0;slideIndex<slides.length;slideIndex++) {
            slides[slideIndex].id = slideshows[slideshowIndex].id + "-slide-" + slideIndex.toString();   

            barElement = document.createElement("div");  
            barElement.id = slides[slideIndex].id + "-progressbar";

            navElement = document.createElement("div");
            navElement.id = slides[slideIndex].id + "-navigationbar";

            progressbar.appendChild(barElement);
            navigationbar.appendChild(navElement);
            document.getElementById(navElement.id).addEventListener("click", ()=> {
                console.log("click on ", navElement.id);
                ActivateSlide(slideshows[slideshowIndex].id, slides, slideIndex, "none");
            });

            DeactivateSlide(slideshows[slideshowIndex].id, slides, slideIndex); 
        } 
    
        var prevslide, nextslide;
        if (slides.length > 0) { 
            if (slides.length > 1) {
                ActivateArrows(slideshows[slideshowIndex].id);
                ActivateSlide(slideshows[slideshowIndex].id, slides, 0, "next-slide");
            }
            else ActivateSlide(slideshows[slideshowIndex].id, slides, 0, "next-slide", false);
        }
    }
}
InitSlideshows();