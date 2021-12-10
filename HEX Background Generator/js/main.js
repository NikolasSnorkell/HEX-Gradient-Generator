let color = document.getElementById("colorCode").innerText;

let code1="",code2="";

let codeMas = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F",]


// Generate and set random color
function setColor(){
    code1="";
    code2="";

    for(let i=0;i<6;i++){
        code1+=codeMas[Math.floor(Math.random()*15)];
        code2+=codeMas[Math.floor(Math.random()*15)];
    }
    color = "linear-gradient(to right,#"+code1+",#"+code2+")";

    document.querySelector("#colorCode").innerHTML=color;
   

    document.getElementById("container").style.background = color;

    // console.log(color);
}


// Adding click event for saving function
document.querySelector("#save").addEventListener("click",saveConfig);

function saveConfig(){
    document.querySelector("#configs").innerHTML+="<option selected>"+"background: "+color+"</option>"
}


//Select color from saved list

let color_copy = "";
let color_index = 0;

function getConfig(sel){
    color_copy = 'background: <span id="colorCode">'+(sel.options[sel.selectedIndex].text).slice(12,)+'</span>';
    color_index = sel.selectedIndex;
    document.querySelector("#curConf").innerHTML=color_copy;
    document.getElementById("container").style.background = (sel.options[sel.selectedIndex].text).slice(12,);
    // console.log(color_copy.slice(14,));
}



// Copy selected config to clipboard
function copyConfig(){
   
    const cp = navigator.clipboard;
    const selector = document.querySelector('#configs');

   
    cp.writeText(selector.children[color_index].innerText).then(() => {

        document.querySelector("#copy").innerHTML = "Copied";
      
        setTimeout(function(){
            document.querySelector("#copy").innerHTML = "Copy Config";
        },1500)
    });
   

}
