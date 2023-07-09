function displayArea(shapename,Arearesult){
    

    const tr =document.createElement("tr");
    tr.innerHTML= `
  
     <td >${count}</td>
     <td>${shapename}</td>
     <td>${Arearesult}</td>
     <td>${unit}</td>
     

    `;
    container.appendChild(tr);


}
 function setTextElementById(elemenetid,value){
    const element=document.getElementById(elemenetid);

    element.innerText=value;
   
 }

//  function getRandomColor(){
//     var letters="0123456789ABCDEF";
//     var color ="#";

//     for(var i=0;i<6;i++){
//         color+=letters[Math.floor(Math.random()*16)];

//     }
//     return color;
//  }

//  document.section.style.background=getRandomColor();

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  
  
