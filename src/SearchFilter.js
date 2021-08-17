export default class SearchFilter {
    constructor(tab) {
        this.tab = tab
        this.containerTags = document.querySelector('.tags')
        this.principalSearchBar = document.getElementById('principal-search')
        this.inputFilter = document.querySelectorAll(".input-filter")
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")

        this.filterPrincipalSearch()
    }

    //ajout des ingredients dans le filtre ingrédient
    addIngredients() {
        // console.log('okk')
        let tabingredient = []
        this.filterIngredients.innerHTML = ""
        this.tab.forEach(recipe => {
            recipe.ingredients.forEach(i => {
                if(tabingredient.indexOf(i.ingredient) == -1) {
                    tabingredient.push(i.ingredient)
                }
            });
        });
        
        tabingredient.forEach(i => {
            this.filterIngredients.innerHTML += `
            <li><button class="dropdown-item" type="button">${i}</button></li>
            `
        });
    }

    //ajout des appareils dans le filtre appareil
    addAppareils() {
        // console.log('okk')
        let tabAppareil = []
        this.filterAppareils.innerHTML = ""
        this.tab.forEach(recipe => {
            // console.log(recipe)
            if(tabAppareil.indexOf(recipe.appliance) == -1) {
                tabAppareil.push(recipe.appliance)
            }
        });
        
        tabAppareil.forEach(i => {
            this.filterAppareils.innerHTML += `
            <li><button class="dropdown-item" type="button">${i}</button></li>
            `
        });
    }

    //ajout des ustensiles dans le filtre ustensile
    addUstensiles() {
        // console.log('okk')
        let tabUstensiles = []
        this.filterUstensiles.innerHTML = ""
        this.tab.forEach(recipe => {
            recipe.ustensils.forEach(i => {
                if(tabUstensiles.indexOf(i) == -1) {
                    tabUstensiles.push(i)
                }
            });
        });
        
        tabUstensiles.forEach(i => {
            this.filterUstensiles.innerHTML += `
                <li><button class="dropdown-item" type="button">${i}</button></li>
            `
        });
    }

    //Les filtres sont filtré en fonction de la valeur saisie dans la barres principale
    filterPrincipalSearch() {
        console.log(this.principalSearchBar.value.length)
        if(this.principalSearchBar.value.length >= 3) {
            console.log("sup a 3")
            this.addIngredients()
            this.addAppareils()
            this.addUstensiles()
        }else {
            console.log("inf a 3")

            this.test()
        }

    }

    //Si la barre principal n'as pas de valeur alors je fais la recherche avec les filtres
    test() {
        for (let index = 0; index < this.inputFilter.length; index++) {
            const element = this.inputFilter[index];
            // console.log("teest")
            element.addEventListener("keyup", (e)=> {
                console.log("teest")
                if(e.target.value.length >= 3) {
                    // this.addIngredients()
                    // this.addAppareils()
                    // this.addUstensiles()
                    // console.log("tu es cassse coouuiiillle")
                }
            })
        }
    }

}