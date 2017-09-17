/*
* @Author: 木木
* @Date:   2017-09-17 19:51:35
* @Last Modified by:   木木
* @Last Modified time: 2017-09-17 20:00:32
*/
let info=document.getElementById('info');
let time=setInterval(function(){
     if(info.innerText<=0){
           clearInterval(time);
           location.replace('location.html')
     }
           info.innerText-=1;
}
, 1000);