document.getElementById('calculate-Rhombus').addEventListener('click',function(){
    const diagonal1=document.getElementById("getd1").value;
    const diagonal2=document.getElementById("getd2").value;
    count+=1;

   const areabasecalculate=document.getElementById('calculate-d1');
   const areaheightcalculate=document.getElementById('calculate-d2');
   setTextElementById('calculate-d1',diagonal1);
   setTextElementById('calculate-d2',diagonal2);
   const result= 0.5*diagonal1*diagonal2;

//     display the calculate area
   const shapename=document.getElementById('shape-Rhombus');
   const getshapename=shapename.innerText;

//     call the function to display the area
   displayArea(getshapename,result);


});
