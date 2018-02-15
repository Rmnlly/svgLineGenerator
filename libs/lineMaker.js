var svgliner = function(svgliner) {
    var xmlns = "http://www.w3.org/2000/svg";
    svgliner.RandLines = function(numLines, cont, colours, startX, startY){
        if (numLines == null) return; //They must pass in a number for lines
        if (cont == null) return; //We need a container to put lines in
        if (colours == null) return; //We need there to be an array of colours

        for (let i = 0; i < numLines; i++){
            startX = Math.floor(Math.random() * (180 - 20)) + 20;
            startY = Math.floor(Math.random() * (180 - 20)) + 20;
            let randCoordX = Math.floor(Math.random() * (-50 - 50)) + 50; //A max length of 50 for the lines with a min of 10
            let randCoordY = Math.floor(Math.random() * (-50 - 50)) + 50; //A max length of 50 for the lines with a min of 10

            let strWidth = Math.random(); //Randomizing line width
            let randColour = Math.floor(Math.random() * colours.length); //Choosing a random colour from object
            let path = document.createElementNS(xmlns, "path");

            path.setAttributeNS (null, 'd', "m " + startX + ", " + startY + " l " + randCoordX + ", " + randCoordY + " ");
            path.setAttributeNS (null, 'stroke-width', strWidth);
            path.setAttributeNS (null, 'stroke-dasharray', 304);
            path.setAttributeNS (null, 'stroke', "rgb(" + colours[randColour].r + ", " + colours[randColour].g + " , " + colours[randColour].b + ")");

            //Here the svg is being built with

            cont.appendChild(path);
        }

        // For the curvy lines
        // for (let i = 0; i < numLines; i++){
        //     //startX = Math.floor(Math.random() * (180 - 20)) + 20;
        //     //startY = Math.floor(Math.random() * (180 - 20)) + 20;
        //
        //     let randColour = Math.floor(Math.random() * colours.length);
        //     let randCoordX = Math.floor(Math.random() * (-360)); //A max length of 50 for the lines with a min of 10
        //     let randCoordY = Math.floor(Math.random() * (-360)); //A max length of 50 for the lines with a min of 10
        //     let randCoordCX = Math.floor(Math.random() * (150 - 25)) + 5; //A max length of 50 for the lines with a min of 10
        //     let randCoordCY = Math.floor(Math.random() * (250 - 50)) + 5; //A max length of 50 for the lines with a min of 10
        //
        //
        //     let path = document.createElementNS(xmlns, "path");
        //     let strWidth = Math.random();
        //
        //     path.setAttributeNS (null, 'd', "m " + startX + ", " + startY + " Q " + randCoordX + ", " + randCoordY + ", " + randCoordCX + ", " + randCoordCY + " ");
        //     path.setAttributeNS (null, 'stroke-width', strWidth);
        //     path.setAttributeNS (null, 'stroke-dasharray', 304);
        //     path.setAttributeNS (null, 'stroke', "rgb(" + colours[randColour].r + ", " + colours[randColour].g + " , " + colours[randColour].b + ")");
        //
        //     cont.appendChild(path);
        // }
    }
    return svgliner;
}(svgliner || {});
