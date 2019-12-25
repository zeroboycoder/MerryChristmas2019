const tree = (row) => {
    for(i=1; i<=row; i++){
        for(j=row-1; j>=i; j--){
            document.write(" ");
        }
        for(k=0; k<(i*2)-1; k++){
            document.write("&");
        }
        document.write("<br>")
    }

    for(i=1; i<=row-2; i++){
        for(j=row-2; j>i; j--){
            document.write(" ");
        }
        for(k=1; k<=((i+2)*2)-1; k++){
            document.write("&");
        }
        document.write("<br>")
    }

    for(i=1; i<=row-2; i++){
        for(j=row-2; j>i; j--){
            document.write(" ");
        }
        for(k=1; k<=((i+2)*2)-1; k++){
            document.write("&");
        }
        document.write("<br>")
    }

    for(i=0; i<row/2; i++){
        for(j=0; j<row-2; j++){
            document.write(" ");
        }
        for(k=0; k<row/3; k++){
            document.write("&");
        }
        document.write("<br>")
    }
}

tree(12);


const text = document.querySelector("h1");
const treeDoc = document.querySelector("pre");

setInterval(function(){
    const firstColorCode = Math.ceil(Math.random()*255);
    const secondColorCode = Math.ceil(Math.random()*255);
    const thirdColorCode = Math.ceil(Math.random()*255);
    text.style.color = "rgb("+firstColorCode+","+secondColorCode+","+thirdColorCode+")";
}, 500)

setInterval(function(){
    const firstColorCode = Math.ceil(Math.random()*255);
    const secondColorCode = Math.ceil(Math.random()*255);
    const thirdColorCode = Math.ceil(Math.random()*255);
    treeDoc.style.color = "rgb("+firstColorCode+","+secondColorCode+","+thirdColorCode+")";
}, 500)