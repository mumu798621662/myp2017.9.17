/*
* @Author: 木木
* @Date:   2017-09-17 19:51:35
* @Last Modified by:   木木
* @Last Modified time: 2017-09-17 20:02:06
*/
let user=document.getElementById('user');
let pass=document.getElementById('pass');
let button=document.getElementById('button');

button.onclick=function (){
	let u=user.value.trim();
	let p=pass.value.trim();
	if(u=='zhangsan' && p=='12345'){
		alert('success');
	}else{
		location.replace('location2.html');
	}
	
};