window.addEventListener('load', function(){
	
	let inp1 = document.querySelector('.input1');
	let inp2 = document.querySelector('.input2');
	let btn = document.querySelector('.go');
	let resBox = document.querySelector('.result');
	let oper = document.querySelector('.operation');

	btn.addEventListener('click', function(){
		let num1 = parseInt(inp1.value);
		let num2 = parseInt(inp2.value);
		let res;

		switch(oper.value){
			case 'sum':
				res = num1 + num2;
				break;
			case 'sub':
				res = num1 - num2;
				break;
			case 'mult':
				res = num1 * num2;
				break;
			case 'div':
				res = num1 / num2;
				break;
		}

		if(isNaN(res)){
			res = 'Error';
		}

		resBox.innerHTML = res;
		btn.disabled = true;
	});

    inp1.addEventListener('input', btnEnable);
    inp2.addEventListener('input', btnEnable);
    oper.addEventListener('input', btnEnable);

    inp1.addEventListener('input', cleanInput);
    inp2.addEventListener('input', cleanInput);

    function cleanInput() {
        this.value = this.value.replace(/[^0-9]/g, '');
    }

    function btnEnable() {
        btn.disabled = false;
    }

});