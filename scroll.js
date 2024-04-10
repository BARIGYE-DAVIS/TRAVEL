function scrollHorizontally(e) {
    var delta = Math.max(-1,min(1, (e.wheelDelta||-e.detail)));
document.querySelector('.dog').scrollLeft-=(delta * 40);
e.preventDefault();
}