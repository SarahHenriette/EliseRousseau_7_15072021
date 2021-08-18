export default class SearchFilter {
    constructor(tab) {
        this.tab = tab
        this.containerTags = document.querySelector('.tags')
        this.principalSearchBar = document.getElementById('principal-search')
        this.inputFilter = document.querySelectorAll(".input-filter")
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")
        this.addIngredients(this.tab)
        // this.addAppareils()
        // this.addUstensiles()
    }

    //ajout des ingredients dans le filtre ingrédient
    addIngredients(array) {
        let tabingredient = []
        this.filterIngredients.innerHTML = ""
        const middleIndex = Math.floor(array.length / 2)
        const leftSide = array.slice(0, middleIndex)
        const rightSide = array.slice(middleIndex)
        let leftIndex = 0, rightIndex = 0

        //Je boucle sur chaque index de la parti gauche et de la partie droite 
        while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
                leftSide[leftIndex].ingredients.filter(i => {
                    if(tabingredient.indexOf(i.ingredient) == -1) {
                        tabingredient.push(i.ingredient)
                    }  
                })
                rightSide[rightIndex].ingredients.filter(i => {
                    if(tabingredient.indexOf(i.ingredient) == -1) {
                        tabingredient.push(i.ingredient)
                    }  
                })

                leftIndex++
                rightIndex++
        }

        // console.log(tabingredient)

        // recherche champ principal

        for (const i of tabingredient) {
            this.filterIngredients.innerHTML += `
            <li class="active"><button class="dropdown-item" id=${i.replace(/ /g, "")} type="button">${i}</button></li>
            `
        }
        
        document.querySelector("#dropdownMenuIngredients").addEventListener("keyup", (e)=> {
            if(e.target.value.length >= 3) {
                console.log("hehoooo")
                let fil = tabingredient.filter(word => word.toLowerCase().indexOf(e.target.value.toLowerCase()) == -1)
                console.log(fil)
                const middleIndex = Math.floor(fil.length / 2)
                const leftSide = fil.slice(0, middleIndex)
                const rightSide = fil.slice(middleIndex)
                let leftIndex = 0, rightIndex = 0
                while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
                    if(document.getElementById(leftSide[leftIndex].replace(/ /g, "")) !== null){
                        document.getElementById(leftSide[leftIndex].replace(/ /g, "")).parentElement.classList.remove('active')
                    }
                    if(document.getElementById(rightSide[rightIndex].replace(/ /g, "")) !== null){ 
                        document.getElementById(rightSide[rightIndex].replace(/ /g, "")).parentElement.classList.remove('active')
                    }
                    leftIndex++
                    rightIndex++
                }
                return
            }
            const middleIndex = Math.floor(tabingredient.length / 2)
            const leftSide = tabingredient.slice(0, middleIndex)
            const rightSide = tabingredient.slice(middleIndex)
            let leftIndex = 0, rightIndex = 0
            while(leftIndex < leftSide.length && rightIndex < rightSide.length) {
                if(document.getElementById(leftSide[leftIndex].replace(/ /g, "")) !== null){
                    document.getElementById(leftSide[leftIndex].replace(/ /g, "")).parentElement.classList.add('active')
                }
                if(document.getElementById(rightSide[rightIndex].replace(/ /g, "")) !== null){
                    document.getElementById(rightSide[rightIndex].replace(/ /g, "")).parentElement.classList.add('active')
                }
                leftIndex++
                rightIndex++
            }
        })
        // //au click d'un des filtres je crée le tag
        // document.querySelectorAll('.dropdown-item').forEach(element => {
        //     element.addEventListener("click", (e)=> {
        //         console.log(e.target.innerHTML)
        //         document.querySelector('.tags').innerHTML += `
        //         <span class="tags-tag">${e.target.innerHTML}</span>
        //         `
        //     })
        // });
    }

    //ajout des appareils dans le filtre appareil
    addAppareils($saisieFilter = "") {
        let tabAppareil = []
        this.filterAppareils.innerHTML = ""
        this.tab.forEach(recipe => {
            if(tabAppareil.indexOf(recipe.appliance) == -1) {
                tabAppareil.push(recipe.appliance)
            }
        });
        //si recherche par le filtre
        if($saisieFilter !== "") {
            let fil = tabAppareil.filter(word => word.toLowerCase().indexOf($saisieFilter.toLowerCase()) !== -1)
            fil.forEach(i => {
                this.filterAppareils.innerHTML += `
                <li><button class="dropdown-item" type="button">${i}</button></li>
                `
            });
            return
        }
        //recherche champ principal
        tabAppareil.forEach(i => {
            this.filterAppareils.innerHTML += `
            <li><button class="dropdown-item" type="button">${i}</button></li>
            `
        });
    }

    //ajout des ustensiles dans le filtre ustensile
    addUstensiles($saisieFilter = "") {
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
         //recherche par le filtre
        if($saisieFilter !== "") {
            let fil = tabUstensiles.filter(word => word.toLowerCase().indexOf($saisieFilter.toLowerCase()) !== -1)
            fil.forEach(i => {
                this.filterUstensiles.innerHTML += `
                <li><button class="dropdown-item" type="button">${i}</button></li>
                `
            });
            return
        }
         //recherche champ principal
        tabUstensiles.forEach(i => {
            this.filterUstensiles.innerHTML += `
                <li><button class="dropdown-item" type="button">${i}</button></li>
            `
        });
       
        
    }

    // //Les filtres sont filtré en fonction de la valeur saisie dans la barres principale
    // filterPrincipalSearch() {
    //     // console.log(this.principalSearchBar.value.length)
    //     if(this.principalSearchBar.value.length >= 3) {
    //         console.log("sup a 3")
    //         this.addIngredients()
    //         this.addAppareils()
    //         this.addUstensiles()
    //         return
    //     }
    //     console.log("c inf a 3")
       
    // }
}