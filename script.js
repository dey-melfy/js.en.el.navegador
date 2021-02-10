// 
// const title=Array.from(document.querySelectorAll('li'))    
// title.map(el=>el.style.background='red') 
    
//       console.log(title)

// const title=document.querySelector('h1')


// //para leer
// console.log(title.textContent) //hola  mundo
// console.log(title.innerHTML) //hola <span> mundo</span>
// console.log(title.outerHTML)//<h1>hola <span> mundo</span></h1>


// //para escribir
// title.textContent=`<h1><b>Así es como se pone un texto en negrita</b> hola</h1>`
// title.innerHTML=`<h1><b>Así es como se pone un texto en negrita</b>hola</h1>`
// title.outerHTML=`<h1><b>Así es como se pone un texto en negrita</b>hola</h1>`


//crear elementos
// const profesor=document.createElement('h1')


//los eventos
//los on son eventos
//forma tradicional
// function holaMundo(){
//     alert('hola mundo')
// }
// const cli=document.getElementById('cli')
// cli.addEventListener('mouseenter',(e)=>{
//     cli.innerHTML=`<h1><b>Así es como se pone un texto en negrita</b>hola</h1>`
//     cli.style.color='red'
//     console.log(e.target.textContent)
// })

// let padin=document.getElementById('padin')
// padin.style="margin:50px"


//evento del mouse

// const createMenu=(e)=>{
//     const menu=document.createElement('div')
//     const prevMenu=document.getElementById('context-menu')
//     menu.id='context-menu'
//     menu.textContent='configuraciones de la aplicacion'
//     if (prevMenu)document.body.removeChild(prevMenu)
    
//     document.body.appendChild(menu)

//     menu.style.padding='1em'    
//     menu.style.background='#eee'
//     menu.style.position='fixed'
//     menu.style.top=`${e.pageY}px`
//     menu.style.left=`${e.pageX}px`
    
    
// }


// document.addEventListener('contextmenu', e=>{
    
//     createMenu(e)
    

//     e.preventDefault()//desactiva el menu contextual

//eventos del teclados 


//  const input=document.getElementById('input')
//  input.addEventListener('keyup', e=>{
//     //  console.log(e.key)//captura la tecla
//      console.log(e)//captura la tecla
//      console.log(e)//captura la tecla
     
      
//  })

//eventos de formulrio



// const check=document.getElementById('check')
// const div=document.createElement('div')
// check.addEventListener('change',(e)=>{
//     // console.log(e.target.checked)
//     if (e.target.checked) return   div.textContent='verdadero'    
        
    
// }) 

//eventos del dom
// El DOMContentLoadedevento se activa cuando el documento HTML inicial se ha cargado y analizado por completo, sin esperar a que las hojas de estilo, las imágenes y los subcuadros terminen de cargarse.

// addEventListener('DOMContentLoaded', (event) => {


//     const form=document.getElementById('form')
//     form.addEventListener('submit',()=>{
//     console.log('enviaste el formulario')
// })
     
// });


//eventos scroll


// addEventListener('scroll', e=>{
//     let bgcolor=document.getElementById('bgcolor')
    
//     if (e.target.scrollY<5000 & e.target.scrollY>1000 ){
//         return bgcolor.style.background='blue'

// }
//    else{
//     return bgcolor.style.background='red'
//    }   
    
// })
// let bgcolor=document.getElementById('bgcolor')

// addEventListener('resize',e=>{
//     if (e.target.outerHeight==1540) {
        
//         bgcolor.style.background='black'

//         console.log('ya cambio')
//     }else{
//         console.log('falta')
//     }
// })

// let check=document.getElementById('check')
// let bgcolor=document.getElementById('bgcolor')

// check.addEventListener('change',(e)=>{
//     console.log(e.target.checked)
//     if (e.target.checked) {
//         bgcolor.style.background='blue'
//     }else{
//         bgcolor.style.background='white'
//     }
//     console.log(e.target.checked)
        
    
// })

//evento multimedia

// let play=document.getElementById('play'), 
//     pause=document.getElementById('pause'),
//     video=document.getElementById('video')


// play.addEventListener('click', e=>{
//     video.play()

// })
// pause.addEventListener('click', e=>{
//     video.pause()

// })

// document.querySelectorAll('div').forEach(el=>{
//     el.addEventListener('click',(e)=>{
//         console.log('hize click')
//         e.stopPropagation()
//     })
// })


//delegacion de eventos
// const galerry=document.getElementById('galerry')

// galerry.addEventListener('click', e=>{
// const t =e.target,
//       images=Array.from(galerry.querySelectorAll('img')),
//       i=images.indexOf(t)
//       console.log(`hisicite click en la imagen ${i+1}`)

// })
//el DOM traversing
// const parent=document.getElementById('parent')

// console.log(parent.querySelectorAll('div'))
// console.log(parent.childNodes)
// console.log(parent.children) 

// console.log(parent.firstElementChild)
// console.log(parent.firstChild)

//insertar elemento
const parent=document.getElementById('parent')
const newElemnt=document.createElement('h2')
newElemnt.textContent='soy dey melfy'
parent.appendChild(newElemnt)
