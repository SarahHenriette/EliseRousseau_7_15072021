export default class TagFilter {
    constructor(){
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")
       
        this.test = []
        
    }

    createTag(item, className, array) {
        //au click d'un des filtres je crée le tag
        // console.log("oooooooorororoiorskljfdrkjngretiogùnktbjatgnbr")

        document.querySelectorAll(item).forEach(element => {
            element.addEventListener("click", (e)=> {
                //creer le balise 
            console.log("ta raa")
                document.querySelector('.tags').innerHTML += `
                <span class="tags-tag ${className} ${e.target.innerHTML.replace(/ /g, "-")} active">${e.target.innerHTML}</span>
                `            
                for (const i of this.filterIngredients.children) {
                    i.classList.remove("active")
                }
                for (const i of this.filterAppareils.children) {
                    i.classList.remove("active")
                }
                for (const i of this.filterUstensiles.children) {
                    i.classList.remove("active")
                }
    
                if(document.querySelectorAll('.listCard .active').length > 0) {
                    for (const card of array) { 
                       for (const tag of document.querySelector('.tags').children) {
                            if(!document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                                document.getElementById(card.id).classList.remove('active')        
                            }
                           
                       }
                    }
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

                    
                    this.close(array) 

                    return
                }
                for (const i of this.filterIngredients.children) {
                    i.classList.remove("active")
                }
                for (const i of this.filterAppareils.children) {
                    i.classList.remove("active")
                }
                for (const i of this.filterUstensiles.children) {
                    i.classList.remove("active")
                }

                for (const card of array) {  
                    for (const tag of document.querySelector('.tags').children) {
                        if(document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                            document.getElementById(card.id).classList.add('active')
                        }
                    }
                }

                for (const i of document.querySelectorAll('.listCard .active')) {
                    for (const e of i.querySelectorAll(".card-ingredients_name")) {
                        document.getElementById(e.innerHTML.replace(/ /g, "")).parentElement.classList.add('active')
                    }
                    for (const e of i.querySelectorAll(".card-appliance")) {
                        document.getElementById(e.innerHTML.replace(/ /g, "")).parentElement.classList.add('active')
                    }
                    for (const e of i.querySelectorAll(".card-ustensil")) {
                        console.log(e)
                        document.getElementById(e.innerHTML.replace(/ /g, "")).parentElement.classList.add('active')
                    }
                }

                this.close(array) 
            })
        });
    }




    close(array){
        for (const tag of document.querySelectorAll('.tags-tag')) {
            tag.addEventListener("click", (e)=>{
                console.log("je feeeeeeeerme cetttte meeeeeerde")
                document.querySelector(`.tags .${e.target.innerHTML.replace(/ /g, "-")}`).remove()
              
                for (const i of this.filterIngredients.children) {
                    i.classList.remove("active")
                }
                for (const i of this.filterAppareils.children) {
                    i.classList.remove("active")
                }
                for (const i of this.filterUstensiles.children) {
                    i.classList.remove("active")
                }

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
            })
        }
    }
}