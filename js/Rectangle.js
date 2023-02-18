// let count=0;
document.getElementById('calculate-rectangle').addEventListener('click',function(){
     const width=document.getElementById("w").value;
     const length=document.getElementById("l").value;
     count+=1;

    const areabasecalculate=document.getElementById('calculate-width');
    const areaheightcalculate=document.getElementById('calculate-length');
    setTextElementById('calculate-width',width);
    setTextElementById('calculate-length',length);
    const result= width*length;
    const unit="cm";
    

//     display the calculate area
    const shapename=document.getElementById('shape-rectangle');
    const getshapename=shapename.innerText;

//     call the function to display the area
    displayArea(getshapename,result);


});