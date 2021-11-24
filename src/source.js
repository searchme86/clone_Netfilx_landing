(function () {
     const labels = Array.from(document.querySelectorAll('.form-info label'))
    
     const validateform = (e)=>{
          const states = ['valid', 'inValid']
               
          if (e.target.previousElementSibling.value.length === 0) {
               classes= states[0]
          }else{
               classes = states[1]
          }

          e.target.parentNode.classList.remove(...states)
          e.target.parentNode.classList.add(classes)
          console.log(classes)

          if(classes = 'inValid'){
               if(e.target.parentNode.className!=='alert'){
               const errorDiv = document.createElement('div');
               errorDiv.appendChild(document.createTextNode('this is a mandatory'))
               errorDiv.classList.add('alert');
               e.target.parentNode.parentNode.insertAdjacentElement('beforeEnd', errorDiv)	
               }
          }

     }
	labels.forEach((label)=>{
		label.addEventListener('click',validateform)
		label.addEventListener('blur',validateform)
     })
     console.log(labels)
}())