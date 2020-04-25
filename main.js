console.log("script response: OK")
var formattedText = [];
var i = 0;
function formatter(){
    formattedText[i]=`{
    "writer": "${document.getElementById("inpt1").value}",
    "name": "${document.getElementById("inpt2").value}",
    "language": "${document.getElementById("inpt3").value}",
    "subject": "${document.getElementById("inpt4").value}",
    "page": "${document.getElementById("inpt5").value}",
    "link": "${document.getElementById("inpt6").value}",
    "terms": "${document.getElementById("inpt7").value}" ,
   }
   `
   console.log(formattedText);
   document.getElementById("input-container").innerHTML = `<p class="inpt-amount">Books Inputted: ${formattedText.length}</p>`
   i++;
}

function saveBlob(){
    var blob = new Blob([formattedText],
        {type:"text/plain;charset=utf-8"}
        );
        saveAs(blob, "Output.txt");
}


