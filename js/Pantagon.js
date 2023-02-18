document.getElementById('calculate-pentagon').addEventListener('click',function(){
    const valueofp=document.getElementById("getvalueofp").value;
    const valueofb=document.getElementById("getvalueofb").value;
    count+=1;

   const areabasecalculate=document.getElementById('calculateofp');
   const areaheightcalculate=document.getElementById('calculateofb');
   setTextElementById('calculateofp',valueofp);
   setTextElementById('calculateofb',valueofb);
   const result= 0.5*valueofp*valueofb;

//     display the calculate area
   const shapename=document.getElementById('shape-pentagon');
   const getshapename=shapename.innerText;

//     call the function to display the area
   displayArea(getshapename,result);


});