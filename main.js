

//  const reverseArray = ([arr])=>{
//     console.log(arr.split('').reverse().join(''))
//  }

//  document.getElementById('form').addEventListener('submit', myFunction);


//     function myFunction(e){
//         e.preventDefault()
//         let input1 = document.querySelector('#div1');
//         let input2 = document.querySelector('#div2');
//         let input3 = document.querySelector('#div3'); 
//         let btn = document.querySelector('.submit')
//         btn.classList.add('submitted')

//       //creating a div 
//       let result = document.querySelector('.result');
//       let child = document.createElement('div');
//       child.innerHTML = `<div>${input1.value}</div><div>${input2.value}</div><div>${input3.value}</div>`
//       result.appendChild(child)
//     };


//You are to build a todo app that receives an input and display it 
// Styling is unnecessary.


document.getElementById('form').addEventListener('submit', myFunction);


function myFunction(z){
   z.preventDefault()

   let input = document.getElementById('div1');
   if(input.value == ''){
      alert('Enter something')
   }else{
      let result = document.querySelector('.result');
   
   let btn = document.createElement('button')
   btn.innerHTML = 'lala'
   let huncho = document.createElement('p')// <p>input.value</p>

   huncho.innerText = input.value;

   result.append(huncho,  btn);
   
   input.value = ''

   }

};
    