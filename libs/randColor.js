var svgliner = function(svgliner) {
    svgliner.randColor = function(numColors){
        let colorArr = [];

        for (let i = 0; i<numColors; i++){
            let color = {
                r : Math.floor(Math.random() * (250 - 0)) + 0,
                g : Math.floor(Math.random() * (250 - 0)) + 0,
                b : Math.floor(Math.random() * (250 - 0)) + 0,
            }
            colorArr[i] = color;
        }
        return colorArr;
    }
    return svgliner;
}(svgliner || {});
