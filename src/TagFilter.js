export default class TagFilter {
    constructor(){
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")
        this.test = []
        
    }

    /**
     * creer un tag
     * @param {HTMLElement} filterItem - filtre/dropdown-menu dans lequel va être les dropdowns items
     * @param {string} className - nom de classe pour savoir de quel filtre à été créer le tag
     * @param {array} array - liste des recettes
     */
    createTag(filterItem, className, array) {
        //au click d'un des filtres je crée le tag
        filterItem.querySelectorAll('.dropdown-item').forEach(element => {
            element.addEventListener("click", (e)=> {
                //je crée le tag
                document.querySelector('.tags').innerHTML += `
                <span class="tags-tag ${className} ${e.target.innerHTML.replace(/ /g, "-")} active">${e.target.innerHTML}</span>
                ` 
                //items dropdown invisible
                this.itemDropdownInvisible()

                this.verifyTagInCards(array)

                this.itemDropdownVisible()

                this.close(array) 
                
            })
        });
    }

    //tout les items des dropdown sont invisibles
    itemDropdownInvisible(){
                      
        for (const i of this.filterIngredients.children) {
            i.classList.remove("active")
        }
        for (const i of this.filterAppareils.children) {
            i.classList.remove("active")
        }
        for (const i of this.filterUstensiles.children) {
            i.classList.remove("active")
        }
    }

    //je rend visible les items des dropdown liée aux cards actives
    itemDropdownVisible(){
        const cardDOMactive = document.querySelectorAll('.listCard .active')
        for (const card of cardDOMactive) {
            for (const i of card.querySelectorAll(".card-ingredients_name")) {
                const valueIngredient = i.innerHTML.replace(/ /g, "")
                const itemDropdown = document.getElementById(valueIngredient).parentElement
                itemDropdown.classList.add('active')
            }
            for (const i of card.querySelectorAll(".card-appliance")) {
                const valueAppliance = i.innerHTML.replace(/ /g, "")
                const itemDropdown = document.getElementById(valueAppliance).parentElement
                itemDropdown.classList.add('active')
            }
            for (const i of card.querySelectorAll(".card-ustensil")) {
                const valueUstensil = i.innerHTML.replace(/ /g, "")
                const itemDropdown = document.getElementById(valueUstensil).parentElement
                itemDropdown.classList.add('active')
            }
        }
    }

    /**
     * verifie si les cards qui contiennent le tag et les affichent
     * @param {array} array - liste des recettes
     */
    verifyTagInCards(array) {
        const cardDOMactive = document.querySelectorAll('.listCard .active')
        for (const card of array) { 
            const cardDOM = document.getElementById(card.id)
            for (const tag of document.querySelector('.tags').children) {
                const valueTag = tag.innerHTML.replace(/ /g, "-")

                if(cardDOMactive.length > 0) {
                    if(!cardDOM.querySelector(`.${valueTag}`)){
                        cardDOM.classList.remove('active')        
                    }
                }else {
                    if(cardDOM.querySelector(`.${valueTag}`)){
                        cardDOM.classList.add('active')
                    }
                }    
            }
        }
    }

   

    /**
     * au click du tag, je supprime le tag ainsi que les card contenant le tag
     * @param {array} array - liste des recettes
     */
    close(array){
        const tags = document.querySelector('.tags').children
        for (const tag of tags ) {
            tag.addEventListener("click", ()=>{
                tag.remove()
                const principalSearch = document.getElementById('principal-search')
                //supprime tout les items des filtres/dropdown-menu
                this.itemDropdownInvisible()
                console.log('t ooou')
                for (const card of array) {  
                    const cardDOM = document.getElementById(card.id)
                    if(principalSearch.value.length >= 3){
                        cardDOM.classList.add('active')
                        for (const tag of tags) {
                            const valueTag = tag.innerHTML.replace(/ /g, "-")
                            if(!cardDOM.querySelector(`.${valueTag}`)){
                                cardDOM.classList.remove('active')
                            }
                        }
                    }else {
                        cardDOM.classList.remove('active')
                        for (const tag of tags) {
                            const valueTag = tag.innerHTML.replace(/ /g, "-")
                            if(cardDOM.querySelector(`.${valueTag}`)){
                                cardDOM.classList.add('active')
                            }
                        }
                    }
                        
                }
                //je rend visible les items des dropdown liée aux cards actives
                this.itemDropdownVisible()
            })
        }
    }
}