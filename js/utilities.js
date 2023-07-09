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



  
  
