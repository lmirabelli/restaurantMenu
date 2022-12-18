const foodMenu = document.getElementById('foodMenu')
const optionList = document.getElementById('optionList')
const menuH1 = document.getElementById('menuH1')
let number = 0
document.title = titleTab

let createCard = () => {
        foodMenu.innerHTML += `
        <div class="card">
            <img src="${item.photo}" alt="">
                <div>
                <h2>${item.title}</h2>
                <p>${item.description}</p>
                <h3>$ ${item.price}</h3>
                </div>
        </div>
        `
}
let menuComplete = () => {
    menuH1.innerHTML = 'Menu'

    foodItems = foodItems.sort((a,b) => {
        if(a.title > b.title){
            return 1
        }
        if(a.title < b.title){
            return -1
        }
        return 0
    })

    foodMenu.innerHTML = ''
    for(item of foodItems){
    createCard()
    }
}

let menufilter = (filterItem) => {
    let filterItemLC = filterItem.toLowerCase()
    foodMenu.innerHTML = ''
    menuH1.innerHTML = `Menu de ${filterItemLC}`
    
    for(item of foodItems){
        let itemTypeLC = item.type.toLowerCase()

        if(itemTypeLC == filterItemLC){
            createCard()
        }

    }
}



for(item of optionItems){
    optionList.innerHTML += `
    <li id="option${number}">${item}</li>
    `
    
    number++
}

menuComplete()

document.getElementById(`logo`).addEventListener('click', () => menuComplete())
document.getElementById(`option0`).addEventListener('click',() => menufilter(optionItems[0]))
document.getElementById(`option1`).addEventListener('click',() => menufilter(optionItems[1]))
document.getElementById(`option2`).addEventListener('click',() => menufilter(optionItems[2]))
document.getElementById(`option3`).addEventListener('click',() => menufilter(optionItems[3]))
document.getElementById(`option4`).addEventListener('click',() => menufilter(optionItems[4]))
