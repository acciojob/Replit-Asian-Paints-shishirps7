//your JS code here. If required.
let boxes=document.querySelectorAll(".grid-item");
let num=document.querySelector("#block_id");
let col=document.querySelector("#colour_id");
let btn=document.querySelector("#change_button");
let reset=document.querySelector("#Reset");
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
reset.addEventListener("click",(e)=>{
	e.preventDefault();
	for(let z = 0; z < boxes.length; z++){
       
        boxes[z].style.backgroundColor = "transparent";
    }
})


