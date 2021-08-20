export default class TagFilter {
    constructor(){
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.test = []
    }

    createTag(item, className, array) {
        //au click d'un des filtres je crée le tag
        document.querySelectorAll(item).forEach(element => {
            element.addEventListener("click", (e)=> {
                // console.log(e.target.innerHTML.replace(/ /g, "-"))
                //creer le balise 
                console.log(e.target)
                document.querySelector('.tags').innerHTML += `
                <span class="tags-tag ${className} ${e.target.innerHTML.replace(/ /g, "-")} active">${e.target.innerHTML}</span>
                `            

                if(document.querySelectorAll('.listCard .active').length > 0) {
                    // this.test = test
                    for (const card of array) {  
                    //    console.log(card)
                       for (const tag of document.querySelector('.tags').children) {
                            if(!document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                                document.getElementById(card.id).classList.remove('active')
                            }
                       }
                    }
                    this.close(array) 

                    return
                }

                for (const card of array) {  
                    //    console.log(card)
                    for (const tag of document.querySelector('.tags').children) {
                        if(document.getElementById(card.id).querySelector(`.${tag.innerHTML.replace(/ /g, "-")}`)){
                            document.getElementById(card.id).classList.add('active')
                        }
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
              
                // if(document.querySelectorAll('.listCard .active').length > 0) {
                    for (const card of array) {  
                        if(document.getElementById('principal-search').value.length >= 3){
                            document.getElementById(card.id).classList.add('active')
                        }else {
                            document.getElementById(card.id).classList.remove('active')
                        }
                      
                        for (const tag of document.querySelector('.tags').children) {
                            console.log(tag)
                            console.log(array)
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
            })
        }
    }
}