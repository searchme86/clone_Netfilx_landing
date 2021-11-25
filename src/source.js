(function () {
	const boxes = Array.from(document.querySelectorAll('.form-info'))
	const inputs = Array.from(document.querySelectorAll('.form-input input'))
	const labels = Array.from(document.querySelectorAll('.form-input label'))

	const states = ['valid', 'invalid'];
	let classes = '';	

	const validateform = (e) => {
		
		inputs.forEach((input)=> input.classList.remove())
		labels.forEach((label)=> label.classList.remove())
		boxes.forEach((box)=> box.classList.remove())

		for(let i=0; i<labels.length; i++){
			labels[i].addEventListener('click',function(e){
				e.target.parentNode.parentNode.classList.add('on');
				e.stopPropagation();
			})
		}

		for(let i=0; i<inputs.length; i++){
			inputs[i].addEventListener('focus',function(e){
				if(e.target.parentNode.querySelector('label').style.opacity==0){
					e.target.parentNode.parentNode.classList.add('on');
					e.target.parentNode.querySelector('label').style.opacity=1;
					e.stopPropagation();
				}
			})
		}

		for(let i=0; i<inputs.length; i++){
			inputs[i].addEventListener('blur',function(e){
				e.target.parentNode.parentNode.classList.remove('on');
				e.stopPropagation();
			})
		}

		for(let i=0; i<inputs.length; i++){
			inputs[i].addEventListener('input',function(e){
				if(!!e.target.value.length){
					e.target.parentNode.parentNode.classList.add('on')
				}else{
					e.target.parentNode.parentNode.classList.remove('on')
				}
				e.stopPropagation();
			})
		}

		for(let i=0; i<inputs.length; i++){
			inputs[i].addEventListener('blur',function(e){
				if(!!e.target.value.length){
					e.target.previousElementSibling.style.opacity=0;
					e.target.previousElementSibling.style.transition='all .5s';
					e.stopPropagation();	
				}
			})
		}

		for(let i=0; i<inputs.length; i++){
			inputs[i].addEventListener('click',function(e){
				e.target.parentNode.parentNode.classList.add('on');
				// let currentIdx = i;
				// let newArray = [];
				// let anotherItem;
				// anotherItem = inputs.splice(currentIdx,1)
				// newArray.push(anotherItem);
				// console.log(inputs)
				// console.log(currentIdx)
				// console.log(newArray)
				e.stopPropagation();
			})
		}
	}

	validateform();
}())