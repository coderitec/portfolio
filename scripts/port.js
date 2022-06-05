// main agrid
let main = document.querySelector('.port')
let last = document.querySelectorAll('.port aside:last-of-type')

// heading titles
let otu = document.getElementsByClassName('title')[0]
let abuo = document.getElementsByClassName('title')[1]
let ato = document.getElementsByClassName('title')[2]
let ano = document.getElementsByClassName('title')[3]
let ise = document.getElementsByClassName('title')[4]

// section titles
let un = document.getElementsByClassName('of')[0]
let deux = document.getElementsByClassName('wd')[0]
let trois = document.getElementsByClassName('da')[0]
let quatre = document.getElementsByClassName('ui')[0]

let heading1 = () =>{
    un.style.display = 'grid'
    deux.style.display = 'grid'
    trois.style.display = 'grid'
    quatre.style.display = 'grid'
    last[0].style.display = 'none'
    last[1].style.display = 'none'
    last[2].style.display = 'none'
    last[3].style.display = 'none'

    
   otu.style.backgroundColor = 'blueviolet'
   otu.style.color = 'white'
   abuo.style.backgroundColor = 'transparent'
   abuo.style.color = 'black'
   ato.style.backgroundColor = 'transparent'
   ato.style.color = 'black'
   ano.style.backgroundColor = 'transparent'
   ano.style.color = 'black'
   ise.style.backgroundColor = 'transparent'
   ise.style.color = 'black'

    un.style.gridTemplateColumns = 'repeat(5, 1fr)'
    un.style.gridTemplateRows = '180px'

    deux.style.gridTemplateColumns = 'repeat(5, 1fr)'
    deux.style.gridTemplateRows = '180px'

    trois.style.gridTemplateColumns = 'repeat(5, 1fr)'
    trois.style.gridTemplateRows = '180px'

    quatre.style.gridTemplateColumns = 'repeat(5, 1fr)'
    quatre.style.gridTemplateRows = '180px'
}
let heading2 = () =>{
    un.style.display = 'none'
    deux.style.display = 'grid'
    trois.style.display = 'none'
    quatre.style.display = 'none'
    last[3].style.display = 'grid'

    deux.style.gridTemplateColumns = 'repeat(3, 1fr)'
    deux.style.gridTemplateRows = 'repeat(2, 200px)'

    otu.style.backgroundColor = 'transparent'
   otu.style.color = 'black'
   abuo.style.backgroundColor = 'blueviolet'
   abuo.style.color = 'white'
   ato.style.backgroundColor = 'transparent'
   ato.style.color = 'black'
   ano.style.backgroundColor = 'transparent'
   ano.style.color = 'black'
   ise.style.backgroundColor = 'transparent'
   ise.style.color = 'black'
   
}
let heading3 = () =>{
    un.style.display = 'none'
    deux.style.display = 'none'
    trois.style.display = 'none'
    quatre.style.display = 'grid'
    last[1].style.display = 'grid'

    quatre.style.gridTemplateColumns = 'repeat(3, 1fr)'
    quatre.style.gridTemplateRows = 'repeat(2, 200px)'
   
    otu.style.backgroundColor = 'transparent'
   otu.style.color = 'black'
   abuo.style.backgroundColor = 'transparent'
   abuo.style.color = 'black'
   ato.style.backgroundColor = 'blueviolet'
   ato.style.color = 'white'
   ano.style.backgroundColor = 'transparent'
   ano.style.color = 'black'
   ise.style.backgroundColor = 'transparent'
   ise.style.color = 'black'
}
let heading4 = () =>{
    un.style.display = 'none'
    deux.style.display = 'none'
    trois.style.display = 'grid'
    quatre.style.display = 'none'
    last[2].style.display = 'grid'

    trois.style.gridTemplateColumns = 'repeat(3, 1fr)'
    trois.style.gridTemplateRows = 'repeat(2, 200px)'
   
    otu.style.backgroundColor = 'transparent'
   otu.style.color = 'black'
   abuo.style.backgroundColor = 'transparent'
   abuo.style.color = 'black'
   ato.style.backgroundColor = 'transparent'
   ato.style.color = 'black'
   ano.style.backgroundColor = 'blueviolet'
   ano.style.color = 'white'
   ise.style.backgroundColor = 'transparent'
   ise.style.color = 'black'
}
let heading5 = () =>{
    un.style.display = 'grid'
    deux.style.display = 'none'
    trois.style.display = 'none'
    quatre.style.display = 'none'
    last[0].style.display = 'grid'

    un.style.gridTemplateColumns = 'repeat(3, 1fr)'
    un.style.gridTemplateRows = 'repeat(2, 200px)'
   
    otu.style.backgroundColor = 'transparent'
   otu.style.color = 'black'
   abuo.style.backgroundColor = 'transparent'
   abuo.style.color = 'black'
   ato.style.backgroundColor = 'transparent'
   ato.style.color = 'black'
   ano.style.backgroundColor = 'transparent'
   ano.style.color = 'black'
   ise.style.backgroundColor = 'blueviolet'
   ise.style.color = 'white'
}

otu.addEventListener('mouseover', heading1)
abuo.addEventListener('mouseover', heading2)
ato.addEventListener('mouseover', heading3)
ano.addEventListener('mouseover', heading4)
ise.addEventListener('mouseover', heading5)
