function time(){
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm= document.getElementById('AM_PM');
    var title_set1 = document.getElementById('title_set1');
    if(hour>=12 && hour<=15){
        title_set1.innerHTML =  "LET'S HAVE SOME LUNCH !!";
    }else if(hour>=16 && hour<=19){
        title_set1.innerHTML =  "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
       
    }else if(hour>=20 && hour<=23){
        title_set1.innerHTML =  "CLOSE YOUR EYES AND GO TO SLEEP";
        
    }else if(hour>=4 && hour<=11){
        title_set1.innerHTML =  "GRAB SOME HEALTHY BREAKFAST!!!";
        
    }else{
        console.log('error')
    }
    if(hour>=12){
        am_pm.innerHTML = 'PM';
    }else{
        am_pm.innerHTML = 'AM';
    }

    if(hour>12){
        hour = hour - 12;
    }
    if(hour<=9){
        hour= '0'+hour;
    }
    if(min<=9){
        min= '0'+min;
    }
    if(sec<=9){
        sec= '0'+sec;
    }
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;
}

function alarm(){
    var time = new Date();
    var hour = time.getHours();
    var ok;
    if(hour>=12){
        ok = 'PM';
    }else{
        ok = 'AM';
    }
    if(hour>12){
        hour = hour - 12;
    }
    if(hour<=9){
        hour= '0'+hour;
    }
    
    let wake_up = document.getElementById('wake_up');
    let lunch = document.getElementById('lunch');
    let nap = document.getElementById('nap');
    let night = document.getElementById('night');
    let wake_up1 = document.getElementById('wake_up1');
    let lunch1= document.getElementById('lunch1');
    let nap1= document.getElementById('nap1');
    let night1= document.getElementById('night1');

    wake_up1.innerHTML=wake_up.value;
    lunch1.innerHTML=lunch.value;
    nap1.innerHTML=nap.value;
    night1.innerHTML=night.value;

    var title_set =  document.getElementById('title_set0');
    var main_img = document.getElementById('main_img');
    let main_img2  =    document.getElementById('main_img2');

    let wake=wake_up.value.split(' ');
    let lun=lunch.value.split(' ');
    let nape=nap.value.split(' ');
    let nigh=night.value.split(' ');

    if(wake_up.value!='Default'){
        title_set.innerHTML = "GOOD MORNING!! WAKE UP !!";
        if(hour==wake[0] && ok==wake[1]){
            main_img2.src = 'img/Component 30 - 1.jpg';
        }else{
            console.log("error")
            main_img2.src = 'https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg';
        }
    }else if(lunch.value!='Default'){
        title_set.innerHTML = "GOOD AFTERNOON ";
        if(hour==lun[0] && ok==lun[1]){
            main_img2.src = 'img/Component 31 - 1.jpg';
        }else{
            console.log("error")
            main_img2.src = 'https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg';
        }
        
    }else if(nap.value!='Default'){
        title_set.innerHTML = "GOOD EVENING !!";
        if(hour==nape[0] && ok==nape[1]){
            main_img2.src = 'img/even_time';
        }else{
            main_img2.src = 'https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg';
        }
        
    }else if(night.value!='Default'){
        title_set.innerHTML = "GOOD NIGHT !! TAKE SOME SLEEP";
        if(hour==nigh[0] && ok==nigh[1]){
            main_img2.src = 'img/Component 31 - 2.jpg';
        }else{
            main_img2.src = 'https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg';
        }
    }
    else{
        title_set.innerHTML = "Set Time for good Will.";
        console.log("err")
        main_img2.src = 'https://live.staticflickr.com/4190/34501106431_ab8bce08ee_h.jpg';
    }
}

let alarm_ok=document.getElementById("btn_ok");
alarm_ok.addEventListener("click", alarm);

setInterval(()=>{
    time();
},1000)