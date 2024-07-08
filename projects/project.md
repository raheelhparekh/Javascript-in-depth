# Project related to dom

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ugvtmh?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# solutions

## project 1- color changer

```javascript
const buttons= document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach(function(b){
  b.addEventListener('click',function(e){
    if(e.target.id=='grey'){
      body.style.backgroundColor=e.target.id

    }
    if(e.target.id=='white'){
      body.style.backgroundColor=e.target.id

    }
    if(e.target.id=='blue'){
      body.style.backgroundColor=e.target.id
      
    }
    if(e.target.id=='yellow'){
      body.style.backgroundColor=e.target.id
      
    }
  })
})

```

## project 2- BMI Generator
```javascript
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault()

  // bcoz value string me milegi and we have to parse it to integer
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const result=document.querySelector('#results')

  if(height=='' || height<0 || isNaN(height)){
    result.innerHTML="Please enter valid height"
  }
  else if(weight=='' || weight<0 || isNaN(weight)){
    result.innerHTML="Please enter valid weight"
  }
  else{
    const bmi=(weight/ ((height*height)/10000)).toFixed(2)
    if(bmi<=18.6){
      results.innerHTML=`Your BMI is ${bmi} and you are Under Weight`

    }
    else if(bmi>18.6 && bmi<=24.9){
      results.innerHTML=`Your BMI is ${bmi} and you are Normal Range`
      
    }
    else{
      results.innerHTML=`Your BMI is ${bmi} and you are Over Weight`

    }
    
  }
})
```

## project3 - digital clock
```javascript
const clock=document.querySelector('#clock')

setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)

```
