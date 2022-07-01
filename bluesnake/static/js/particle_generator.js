var particleSet = [];


function particleGenerator(backgroundId, particlesNumber, particleClassName, particleColor)
{
    var newParticle;
    var background = document.getElementById(backgroundId);
    var lastId = background.getElementsByClassName(particleClassName).length; 
    for (var i=lastId;i<lastId+particlesNumber;i++) {
        newParticle = document.createElement("div");
        newParticle.id = "p-" + i.toString(); 
        newParticle.style.backgroundColor = particleColor;
        newParticle.style.boxShadow = "-8px 18px 66px 15px " + particleColor;
        newParticle.className = particleClassName;
        background.appendChild(newParticle);
        particleSet.push($("#p-" + i.toString()));
    }
}  