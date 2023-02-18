document.getElementById('calculate-parallelogram').addEventListener('click',function(){
    const getbase=document.getElementById("getvaluebase").value;
    const getheight=document.getElementById("getvalueheight").value;
    count+=1;
    console.log(getbase,getheight)

   const areabasecalculate=document.getElementById('calculate-b');
   const areaheightcalculate=document.getElementById('calculate-h');
   setTextElementById('calculate-h',getheight);
   setTextElementById('calculate-b',getbase);
   const result=getbase*getheight;

//     display the calculate area
   const shapename=document.getElementById('shape-parallelogram');
   const getshapename=shapename.innerText;

//     call the function to display the area
   displayArea(getshapename,result);


});