let sum =0;
function onclick1(){
    
    
    const count =document.getElementById('count');
    sum +=1;
    count.innerText=sum;
    
}
document.getElementById('mineg-btn').addEventListener('click',function(){
    const coun2 = document.getElementById('count');
    sum -=1;
    coun2.innerText=sum;

    if(sum <0 ){
        coun2.removeEventListener('cilck',onclick1())
        
    }


})
