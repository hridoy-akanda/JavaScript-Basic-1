var image=document.querySelector("img");
var container=["images/food1.jpg","images/food2.jpg","images/food3.jpg"]
count=0;
function next(){
    if(count>=container.length-1){
        count=0;
        image.src=container[count];
    }
    else{
        count++;
        image.src=container[count];  
    }
}
function prev () {
    if(count<=0){
        count=container.length-1;
        image.src=container[count];
        
    }
    else{
        count--;
        image.src=container[count];   
    }
}
