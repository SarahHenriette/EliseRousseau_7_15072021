export default class TagFilter {
    constructor(){
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")
       
        this.test = []
        
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

    //je rend visible les items liée aux card actives
    itemDropdownVisible(){
        for (const i of document.querySelectorAll('.listCard .active')) {
            for (const e of i.querySelectorAll(".card-ingredients_name")) {
                document.getElementById(e.innerHTML.replace(/ /g, "")).parentElement.classList.add('active')
            }
            for (const e of i.querySelectorAll(".card-appliance")) {
                document.getElementById(e.innerHTML.replace(/ /g, "")).parentElement.classList.add('active')
            }
            for (const e of i.querySelectorAll(".card-ustensil")) {
                document.getElementById(e.innerHTML.replace(/ /g, "")).parentElement.classList.add('active')
            }
        }
    }

    createTag(item, className, array) {
        //au click d'un des filtres je crée le tag
        document.querySelectorAll(item).forEach(element => {
            element.addEventListener("click", (e)=> {
                //je crée le tag
                document.querySelector('.tags').innerHTML += `
                <span class="tags-tag ${className} ${e.target.innerHTML.replace(/ /g, "-")} active">${e.target.innerHTML}</span>
                ` 
                //items dropdown invisible
                this.itemDropdownInvisible()

                //s'il y a des card active
                if(document.querySelectorAll('.listCard .active').length > 0) {
                     //je boucle sur chaque card et tag
                    for (const card of array) { 
                       for (const tag of document.querySelector('.tags').children) {
                           //si la car ne contient pas le tag alors la card est desactivé
                            if(!document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                                document.getElementById(card.id).classList.remove('active')        
                            }
                           
                       }
                    }

                    this.itemDropdownVisible()
     
                    this.close(array) 

                    return
                }

                this.itemDropdownInvisible()

                for (const card of array) {  
                    for (const tag of document.querySelector('.tags').children) {
                        if(document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                            document.getElementById(card.id).classList.add('active')
                        }
                    }
                }

                this.itemDropdownVisible()

                this.close(array) 
            })
        });
    }




    close(array){
        for (const tag of document.querySelectorAll('.tags-tag')) {
            tag.addEventListener("click", (e)=>{
                console.log("je feeeeeeeerme cetttte meeeeeerde")
                document.querySelector(`.tags .${e.target.innerHTML.replace(/ /g, "-")}`).remove()
              
                this.itemDropdownInvisible()


                    for (const card of array) {  
                        if(document.getElementById('principal-search').value.length >= 3){
                            document.getElementById(card.id).classList.add('active')
                          
                            
                        }else {
                            document.getElementById(card.id).classList.remove('active')
                        }
                      
                        for (const tag of document.querySelector('.tags').children) {
                            if(document.getElementById('principal-search').value.length >= 3){
                                if(!document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                                    document.getElementById(card.id).classList.remove('active')
                                }
                            }else {
                                if(document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                                    document.getElementById(card.id).classList.add('active')
                                }
                            }

                        }
                        
                    }

                    this.itemDropdownVisible()

            })
        }
    }
}