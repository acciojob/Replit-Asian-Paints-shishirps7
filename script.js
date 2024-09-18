//your JS code here. If required.
let boxes=document.querySelectorAll(".ccols");
let num=document.querySelector("#num");
let col=document.querySelector("#col");
let btn=document.querySelector("button");
btn.addEventListener("click",(e)=>{
	e.preventDefault()
	let x=col.value;
	let y=parseInt(num.value)-1;
	
	for(let z = 0; z < boxes.length; z++){
        if(z == y){
            continue;
        }
        boxes[z].style.backgroundColor = "transparent";
    }
	boxes[y].style.backgroundColor=x
});


