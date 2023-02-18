document.getElementById('calculate-ellipse').addEventListener('click',function(){
    const Aaxis=document.getElementById("getvaluea").value;
    const Baxis=document.getElementById("getvalueb").value;
    count+=1;

   const areabasecalculate=document.getElementById('cvalueofa');
   const areaheightcalculate=document.getElementById('cvalueofb');
   setTextElementById('cvalueofa',Aaxis);
   setTextElementById('cvalueofb',Baxis);
   const result= 3.14*Aaxis*Baxis;

//     display the calculate area
   const shapename=document.getElementById('shape-ellipse');
   const getshapename=shapename.innerText;

//     call the function to display the area
   displayArea(getshapename,result);


});