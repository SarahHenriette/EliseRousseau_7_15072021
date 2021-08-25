import TagFilter from './TagFilter'

const tag = new TagFilter
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
        this.addAppareils(this.tab)
        this.addUstensiles(this.tab)
    }

  
    /**
     * ajout des ingredients dans le filtre ingrédient
     * @param {array} array - Liste des recettes
     */
    addIngredients(array) {
        let tabingredient = []
        this.filterIngredients.innerHTML = ""
        //Je filtre le tableau
        array.filter(recipe => {
            //filtre dans les ingredients de la recette
            recipe.ingredients.filter(i => {
            //S'il n'existe pas encore, insertion de l'ingredient dans le tableau "tabingredient"
                if (tabingredient.indexOf(i.ingredient) == -1){
                    tabingredient.push(i.ingredient)
                }
            })
        })
        this.itemFonctionnality(tabingredient, this.filterIngredients, "#dropdownMenuIngredients", array, 'tags-tag--ingredients')
    }

 
    /**
     * ajout des appareils dans le filtre appareil
     * @param {array} array - Liste des recettes
     */
    addAppareils(array) {
        let tabAppareil = []
        this.filterAppareils.innerHTML = ""
        array.filter(recipe => {
            if (tabAppareil.indexOf(recipe.appliance) == -1){
                tabAppareil.push(recipe.appliance)
            }
        })

        this.itemFonctionnality(tabAppareil, this.filterAppareils, "#dropdownMenuAppareils", 'tags-tag--appareils')
    }


     /**
     * ajout des ustensiles dans le filtre ustensile
     * @param {array} array - Liste des recettes
     */
    addUstensiles(array) {
        let tabUstensiles = []
        this.filterUstensiles.innerHTML = ""
        array.filter(recipe => {
            recipe.ustensils.filter(i => {
                if (tabUstensiles.indexOf(i) == -1){
                    tabUstensiles.push(i)
                }
            })
        })

        this.itemFonctionnality(tabUstensiles, this.filterUstensiles, "#dropdownMenuUstensiles", array,  'tags-tag--ustensiles')
    }


    /**
     * regroupe les fonctionnalités lié aux items
     * @param {array} tabItem - tableau qui contient tout les dropdowns items
     * @param {HTMLElement} filterItem - filtre/dropdown-menu dans lequel va être les dropdowns items
     * @param {string} filterName - nom du filtre/dropdown-menu, champ de recherche
     * @param {array} array - liste des recettes
     * @param {string} className - nom de classe pour savoir de quel filtre à été créer le tag
     */
    itemFonctionnality(tabItem, filterItem, filterName, array, className){
    
        //créer les items
        //quand il ya une valeur dans la bar principal
        if(this.principalSearchBar.value.length >= 3 ){
            this.createItemDropdown(tabItem, filterItem, "active")
        }else {
            //quand on commence la recherche depuis un filtre
            this.createItemDropdown(tabItem, filterItem, "")
        }

        //Gére l'affichage des items
        this.displayOrHideElement(tabItem, filterName)
    
        //créer les tags
        tag.createTag(filterItem, className, array)
    }

        
     /**
     * créer les items dans les filtres
     * @param {array} tabItem - tableau qui contient tout les dropdowns items
     * @param {HTMLElement} filterItem - filtre/dropdown-menu dans lequel va être les dropdowns items
     * @param {string} className - classe active permettant de rendre visible l'item
     */
    createItemDropdown(tabItem, filterItem, className){
        for (const i of tabItem) {
            filterItem.innerHTML += `
            <li class="`+ className +`"><button class="dropdown-item" id=${i.replace(/ /g, "")} type="button">${i}</button></li>
            `
        }
    }

     /**
     * affiche ou masque les ingredients du dropdown
     * @param {array} tabItem - tableau qui contient tout les dropdowns items
     * @param {HTMLElement} filterItem - filtre/dropdown-menu dans lequel va être les dropdowns items
     */
    displayOrHideElement(tabItem, filterName) {
        document.querySelector(filterName).addEventListener("keyup", (e)=> {
            //si il y a plus de 3 lettres
            if(e.target.value.length >= 3) {
                //je filtre le tableau 
                tabItem.filter(value => {
                    //si l'element ne contient pas la saisie utilisateur alors je le cache
                    //sinon je le rend visible
                    if(value.toLowerCase().indexOf(e.target.value.toLowerCase()) == -1) {
                        document.getElementById(value.replace(/ /g, "")).parentElement.classList.remove('active')
                        return
                    }
                    document.getElementById(value.replace(/ /g, "")).parentElement.classList.add('active')
                })
                return
            }
            //sinon tout les items du dropdown sont invisible 
            for (const i of document.querySelectorAll("ul li.active")) {
                i.classList.remove("active")
            }
        })
    }
}