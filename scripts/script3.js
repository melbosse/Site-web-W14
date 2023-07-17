// Fonction pour faire un zoom sur l'image
function agrandir(e){
    var grandir = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/grandir.offsetWidth*100
    y = offsetY/grandir.offsetHeight*100
    grandir.style.backgroundPosition = x + '% ' + y + '%';
}