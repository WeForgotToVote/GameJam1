var oldx = 0,
    deltax = 0,
    mousemovemethod = function (e) {
    
    deltax = e.pageX - oldx;
    oldx = e.pageX;
}

document.addEventListener('mousemove', mousemovemethod);