document.getElementById('blog-btn').addEventListener('click',function(){
     window.location.href= 'question.html';
     console.log("button");

})
let count=0;
const unit="cm^2";
document.getElementById('calculate-triangle').addEventListener('click',function(){
     const base=document.getElementById("b").value;
     const height=document.getElementById("h").value;
     count+=1;

    const areabasecalculate=document.getElementById('calculate-base');
    const areaheightcalculate=document.getElementById('calculate-height');
    setTextElementById('calculate-height',height);
    setTextElementById('calculate-base',base);
    const result= 0.5*base*height;

//     display the calculate area
    const shapename=document.getElementById('shape');
    const getshapename=shapename.innerText;

//     call the function to display the area
    displayArea(getshapename,result);


});

// 



