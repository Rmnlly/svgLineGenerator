window.addEventListener("DOMContentLoaded", function(){
    let g = document.querySelector('.lines');

    let randLine = new svgliner.RandLines(60, g, svgliner.randColor(200), 180, 180); //180 is only for if you're using the curve lines that have been commented out
    //The randColor function is coming from the randColor.js module, the naming could be fixed


    //This is being used to animate the lines in and out
    var lineDrawing = anime({
      targets: '#lineDrawing .lines path',
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 750,
      delay: function(el, i) { return i * 250 },
      direction: 'alternate', //Makes lines go out and back in only when loop is set
      loop: true
    });
    //For the delay it accepts a function with args target and index, so in the library they use "el" to refer to the current target and i iterates over the total number of targets, here that is the total number of lines
});
