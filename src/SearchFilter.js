export default class SearchFilter {
    constructor(tab) {
        this.tab = tab
        this.containerTags = document.querySelector('.tags')
        this.principalSearchBar = document.getElementById('principal-search')
        this.inputFilter = document.querySelectorAll(".input-filter")
        this.filterIngredients = document.querySelector(".filter-ingredients .dropdown-menu")
        this.filterAppareils = document.querySelector(".filter-appareil .dropdown-menu")
        this.filterUstensiles = document.querySelector(".filter-ustensiles .dropdown-menu")

        // this.test()
        this.toto()
    }

    toto() {
        console.log('okk')
        // console.log(this.tab.filter(recipe => recipe.ingredients))
        

    }

    test() {
        // console.log(this.inputFilter)
        // console.log(this.containerTags.children.length)
        // console.log(this.principalSearchBar.value.length )
        for (let index = 0; index < this.inputFilter.length; index++) {
            const element = this.inputFilter[index];
            // console.log(element)
            element.addEventListener("keyup", (e)=> {
                if(e.target.value.length >= 3) {
                    console.log(e.target.value)
                }
            })
        }
        // if(this.principalSearchBar.value.length >= 3) {
        //     console.log(this.principalSearchBar.value)
        // }

    }

}