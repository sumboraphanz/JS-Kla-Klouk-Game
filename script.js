var kla = document.querySelector('#kla');
var klouk = document.querySelector('#klouk');
var morn = document.querySelector('#morn');
var pkorng = document.querySelector('#trey');
var kdam = document.querySelector('#kdam');
var trey = document.querySelector('#trey');

var luy = document.querySelector('#luy');
var luy1 = document.querySelector('#luy1');
var luy2 = document.querySelector('#luy2');
var luy3 = document.querySelector('#luy3');
var luy4 = document.querySelector('#luy4');
var luy5 = document.querySelector('#luy5');
var luy6 = document.querySelector('#luy6');

var plate = document.querySelector('#plate');
var btn_open = document.querySelector('#btn_open');

var kla_clicked = false;
var klouk_clicked = false;
var morn_clicked = false;
var pkorng_clicked = false;
var kdam_clicked = false;
var trey_clicked = false;
var plate_clicked = false;



var money = 0;
money = parseInt(luy.innerText);


var img1 = document.querySelector('#img1');
var img2 = document.querySelector('#img2');
var img3 = document.querySelector('#img3');

var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var p3 = document.querySelector('#p3');
var p4 = document.querySelector('#p4');
var p5 = document.querySelector('#p5');
var p6 = document.querySelector('#p6');

var pp1 = 0;
var pp2 = 0;
var pp3 = 0;
var pp4 = 0;
var pp5 = 0;
var pp6 = 0;

var moneys = 0;
var audio = new Audio('audio2.mp3');  		

function play(){
			var result1 = Math.floor(Math.random() * 6);
    var result2 = Math.floor(Math.random() * 6);
    var result3 = Math.floor(Math.random() * 6);
    
    
    plate.style.top = '-300px'; 
    
    
    luy1.style.display = 'none'	;	
    luy2.style.display = 'none'	;	
    luy3.style.display = 'none'	;	
    luy4.style.display = 'none'	;	
    luy5.style.display = 'none'	;	
    luy6.style.display = 'none'	;	
    
    
    var total = 0;        
    var total1 = 0;
    var total2 = 0;
    var total3 = 0;
    var total4 = 0;
    var total5 = 0;
    var total6 = 0;
         
    var win = 0;
    var win1 = 0;
    var win2 = 0;
    var win3 = 0;
    var win4 = 0;
    var win5 = 0;
    var win6 = 0;   
    
        
    switch (result1) {
    				case 0:
    				img1.src = 'kla.jpg';
    				win1 +=1;
    				break;
    				case 1:
    				img1.src = 'klouk.jpg';
    				win2+=1;
    				break;
    				case 2:
    				img1.src = 'morn.jpg';
    				win3+=1;
    				break;
    				case 3:
    				img1.src = 'pkorng.jpg';
    				win4+=1;
    				break;
    				case 4:
    				img1.src = 'kdam.jpg';
    				win5+=1;
    				break;
    				case 5:
    				img1.src = 'trey.jpg';
    				win6+=1;
    				break;    				
    }
        
    switch (result2) {
    				case 0:
    				img2.src = 'kla.jpg';
    				win1 +=1;
    				break;
    				case 1:
    				img2.src = 'klouk.jpg';
    				win2+=1;
    				break;
    				case 2:
    				img2.src = 'morn.jpg';
    				win3+=1;
    				break;
    				case 3:
    				img2.src = 'pkorng.jpg';
    				win4+=1;
    				break;
    				case 4:
    				img2.src = 'kdam.jpg';
    				win5+=1;
    				break;
    				case 5:
    				img2.src = 'trey.jpg';
    				win6+=1;
    				break;
    }				
    				switch (result3) {
    				case 0:
    				img3.src = 'kla.jpg';
    				win1 +=1;
    				break;
    				case 1:
    				img3.src = 'klouk.jpg';
    				win2+=1;
    				break;
    				case 2:
    				img3.src = 'morn.jpg';
    				win3+=1;
    				break;
    				case 3:
    				img3.src = 'pkorng.jpg';
    				win4+=1;
    				break;
    				case 4:
    				img3.src = 'kdam.jpg';
    				win5+=1;
    				break;
    				case 5:
    				img3.src = 'trey.jpg';
    				win6+=1;
    				break;
    				
    }     
    
    total1 = win1 * (pp1 + pp1);
    total2 = win2 * (pp2 + pp2);
    total3 = win3 * (pp3 + pp3);
    total4 = win4 * (pp4 + pp4);
    total5 = win5 * (pp5 + pp5);
    total6 = win6 * (pp6 + pp6);    
    
    
   /* alert(win1+" "+win2+" "+win3+" "+win4+" "+win5+" "+win6+" Pp "+pp1+" "+pp2+" "+pp3+" "+pp4+" "+pp5+" "+pp6+ " total "+ total1+" "+total2+" "+total3+" "+total4+" "+total5+" "+ total6); */
    
    total = total1+total2+total3+total4+total5+total6;
    
    money +=total;                    
    luy.innerText = money;
                
              
    pp1 = 0;
    p1.innerText = pp1;
    pp2 = 0;
    p2.innerText = pp2;    
    pp3 = 0;
    p3.innerText = pp3;
    pp4 = 0;
    p4.innerText = pp4;
    pp5 = 0;
    p5.innerText = pp5;
    pp6 = 0;
    p6.innerText = pp6;    
}

function kla_click(){
     
     plate.style.top = '-20px';
     money -= 100;
     btn_open.innerText = 'Open';
     luy.innerText = money;
				if (money >= 0) {
								pp1 += 100;
								luy1.style.display = 'block'	;	
								audio.play();								  
								p1.innerText = pp1;
				}else {
								money = 0;
								luy.innerText = money;
				}
				
				if (!kla_clicked) {
								kla_clicked = true;
								
				}	else{
								kla_clicked = false;
				}
				
}

function klouk_click(){ 
     plate.style.top = '-20px';
     money -= 100;
     btn_open.innerText = 'Open';
     luy.innerText = money;
				if (money >= 0) {
								pp2 += 100;
								luy2.style.display = 'block'	;	
								audio.play();   
								p2.innerText = pp2;
				}else {
								money = 0;
								luy.innerText = money;
				}
				
				if (!klouk_clicked) {
								klouk_clicked = true;								
				}	else{
								klouk_clicked = false;
				}
				
}

function morn_click(){  
     plate.style.top = '-20px';
     money -= 100;
     btn_open.innerText = 'Open';
     luy.innerText = money;
				if (money >= 0) {
								pp3 += 100;
								luy3.style.display = 'block'	;	
								audio.play();   
								p3.innerText = pp3;
				}else {
								money = 0;
								luy.innerText = money;
				}
				
				if (!morn_clicked) {
								morn_clicked = true;
				}	else{
								morn_clicked = false;
				}
				
}

function pkorng_click(){ 
     plate.style.top = '-20px';
     money -= 100;
     btn_open.innerText = 'Open';
     luy.innerText = money;
				if (money >= 0) {
								pp4 += 100;
								luy4.style.display = 'block'	;	
								audio.play();   
								p4.innerText = pp4;
				}else {
								money = 0;
								luy.innerText = money;
				}
				
				if (!pkorng_clicked) {
								pkorng_clicked = true;
				}	else{
								pkorng_clicked = false;
				}
				
}

function kdam_click(){
     plate.style.top = '-20px';
     btn_open.innerText = 'Open';
     money -= 100;
     luy.innerText = money;
				if (money >= 0) {
								pp5 += 100;
								luy5.style.display = 'block'	;	
								audio.play();   
								p5.innerText = pp5;
				}else {
								money = 0;
								luy.innerText = money;
				}
				
				if (!kdam_clicked) {
								kdam_clicked = true;
				}	else{
								kdam_clicked = false;
				}
				
}

function trey_click(){
     plate.style.top = '-20px';
     btn_open.innerText = 'Open';   
     money -= 100;
     luy.innerText = money;
				if (money >= 0) {
								pp6 += 100;
								luy6.style.display = 'block'	;	
								audio.play();   
								p6.innerText = pp6;
				}else {
								money = 0;
								luy.innerText = money;
				}				
				if (!trey_clicked) {
								trey_clicked = true;
				}	else{
								trey_clicked = false;
				}
			
}



