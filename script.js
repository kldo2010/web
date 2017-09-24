function myFunction() {
    document.getElementById('btn1').style.cssText = 'opacity:1;';
    var x1 = document.getElementById('myDIV');
	var x2 = document.getElementById('myDIV1');
	x2.style.display = 'none';
    x1.style.display = 'block';
	document.getElementById('btn2').style.cssText = 'opacity:0.3;';
    }
	function func1(){
		document.getElementById('all').style.cssText = 'opacity:1;';
		 var x1 = document.getElementById('all');
        x1.style.display = 'block';
	    var x2 = document.getElementById('all2');
	    x2.style.display = 'none';
    
	document.getElementById('btn4').style.cssText = 'opacity:0.3;';
	document.getElementById('btn3').style.cssText = 'opacity:1;';
	}
	
	function func2(){
		document.getElementById('all2').style.cssText = 'opacity:1;';
		 var x1 = document.getElementById('all2');
        x1.style.display = 'block';
	var x2 = document.getElementById('all');
	x2.style.display = 'none';
   
		document.getElementById('btn3').style.cssText = 'opacity:0.3;';
	document.getElementById('btn4').style.cssText = 'opacity:1;';
	}
	
	function myFunction2() {
	document.getElementById('btn2').style.cssText = 'opacity:1;';
    var x1 = document.getElementById('myDIV');
	var x2 = document.getElementById('myDIV1');
	x1.style.display = 'none';
   x2.style.display = 'block';
	document.getElementById('btn1').style.cssText = 'opacity:0.3;';
	
    }
function div1(){
	 document.getElementById('btn5').style.cssText = 'opacity:1;';
    var x1 = document.getElementById('div3');
	var x2 = document.getElementById('div4');
	x2.style.display = 'none';
    x1.style.display = 'block';
	document.getElementById('btn6').style.cssText = 'opacity:0.3;';
	
}
function div2(){
	 document.getElementById('btn6').style.cssText = 'opacity:1;';
    var x1 = document.getElementById('div4');
	var x2 = document.getElementById('div3');
	x2.style.display = 'none';
    x1.style.display = 'block';
	document.getElementById('btn5').style.cssText = 'opacity:0.3;';
	
}

function load()
{
	var x1 = document.getElementById('myDIV1');
	var x2 = document.getElementById('all2');
	var x3 = document.getElementById('div4');
		x1.style.display = 'none';
			x2.style.display = 'none';
				x3.style.display = 'none';
	
}
