# Project related to dom

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ugvtmh?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# solutions

## project 1- color changer

```
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


