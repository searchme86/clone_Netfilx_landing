(function () {
	
	const inputs = Array.from(document.querySelectorAll('.form-input input'))
	const labels = Array.from(document.querySelectorAll('.form-input label'))
	const Signbtn = document.querySelector('.form-actions .btn-signIn')

	const validateform = (e) => {
		
		inputs.forEach((input)=> input.classList.remove())
		labels.forEach((label)=> label.classList.remove())
		
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

		for (let i = 0; i < inputs.length; i++) {
			inputs[i].addEventListener('input', function (e) {
				if (!!e.target.value.length) {
					e.target.parentNode.parentNode.classList.add('on')
					if (e.target.parentNode.parentNode.querySelector('.alert') !== null) {
							e.target.parentNode.parentNode.classList.remove('inValid');
							console.log(e.target.parentNode.nextElementSibling)
							e.target.parentNode.nextElementSibling.remove()
						}
				} else {
					e.target.parentNode.parentNode.classList.remove('on')
				}
				e.stopPropagation();
			})
		}

		for(let i=0; i<inputs.length; i++){
			inputs[i].addEventListener('blur', function (e) {
				e.target.parentNode.parentNode.classList.remove('on');
				if(!!e.target.value.length){
					e.target.previousElementSibling.style.opacity=0;
					e.target.previousElementSibling.style.transition='all .5s';
				}
				e.stopPropagation();	
			})
		}


		Signbtn.addEventListener('click', function (e) {
			const boxes = Array.from(document.querySelectorAll('.form-info'))
			boxes.forEach((box) => box.classList.remove())
			const warning= document.querySelectorAll('.alert')
			const list = [];

			if (!warning.length) {
				const errorDiv = (i) => {
					const errorDiv = document.createElement('div');
					errorDiv.appendChild(document.createTextNode('입력값을 넣어주세요'))
					errorDiv.classList.add('alert')
					boxes[i].insertAdjacentElement('beforeEnd',errorDiv)
				}
				for (let i=0; i < inputs.length; i++){
					if (inputs[i].className='required' && !inputs[i].value) {
						inputs[i].parentNode.parentNode.classList.add('inValid');
						errorDiv(i)
					}else{
						console.log('모두 값이 있다')
						list.push(i)
					}
				}
			}
			if (list.length === inputs.length) {
				alert('축하합니다. 다음 페이지로 이동하세요')
			}
			e.stopPropagation();
		})



	}

	validateform();

}())
