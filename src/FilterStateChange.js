export default class FilterStateChange {
    constructor () {
        this.filters = document.querySelectorAll(".input-filter")
        this.actionFilter()
    }

    actionFilter() {
        for (let index = 0; index < this.filters.length; index++) {
            const element = this.filters[index];
            element.addEventListener("click", (e)=> {
                this.activeStateFilter(e)
            })

            element.addEventListener("blur", (e)=> {
                this.desactiveStateFilter(e)
            })
        
        }
    }

    activeStateFilter(e){
        e.target.parentElement.querySelector("ul").style.display= "flex"
        e.target.parentElement.classList.add("active")
        // console.log(e.target.placeholder)
        if(e.target.placeholder == "Ingredients") {
            e.target.placeholder = "Rechercher un ingrédient"         
        }else if(e.target.placeholder == "Appareils") {
            e.target.placeholder = "Rechercher un appareil"
        }else if(e.target.placeholder == "Ustensiles") {
            e.target.placeholder = "Rechercher un ustensile"
        }
        e.target.style.opacity= "0.8"
    }

    desactiveStateFilter(e) {
        setTimeout(() => {
            e.target.parentElement.querySelector("ul").style.display="none"
            e.target.parentElement.classList.remove("active")
            if(e.target.placeholder == "Rechercher un ingrédient") {
                e.target.placeholder = "Ingredients"
            }else if(e.target.placeholder == "Rechercher un appareil") {
                e.target.placeholder = "Appareils"
            }else if(e.target.placeholder == "Rechercher un ustensile") {
                e.target.placeholder = "Ustensiles"
            }
            e.target.style.opacity= "1"
        }, 200);
    }
}
