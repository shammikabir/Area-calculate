document.getElementById('blog-btn').addEventListener('click',function(){
     window.location.href= 'question.html';
     console.log("button");

})
document.getElementById('calculate-triangle').addEventListener('click',function(){
     const base=document.getElementById("b").value;
     const height=document.getElementById("h").value;
    //  console.log(height,base);

    // console.log("button");

    const areabasecalculate=document.getElementById('calculate-base');
    const areaheightcalculate=document.getElementById('calculate-height');
    const areabaseset=areabasecalculate.innerText;
    const areaheightset=areaheightcalculate.innerText;
    // const areastring=parseFloat(areaset);
    areaheightcalculate.innerText=height;
    areabasecalculate.innerText=base;
    // console.log(areaset);
    const result= 0.5*base*height;
    console.log(result);



})

