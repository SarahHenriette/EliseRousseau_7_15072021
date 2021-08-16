export default class CreateCardRecipe {
    constructor (recipe){
        this.recipe = recipe
        this.containCardsRecipes = document.querySelector(".listCard")
        this.card = document.createElement("div")
        this.create() 
        this.createListIngredients()
    }

    create() {
        this.card.setAttribute("id", this.recipe.id)
        this.card.classList.add("card")
        this.containCardsRecipes.appendChild(this.card)
        this.card.innerHTML = `
        <div class="card-img"></div>
        <div class="card-body">
            <div class="row">
                <h5 class="card-title col-xl-8 col-sm-12">${this.recipe.name}</h5>
                <p class="card-time col-xl-4 col-sm-12">${this.recipe.time}<img /></p>
            </div>
            <div class="row justify-content-between">
                <ul class="card-ingredients col-6"></ul>
                <p class="card-description col-6">${this.recipe.description}</p>
            </div>
        </div>
        `
    }

    createListIngredients(){
        this.recipe.ingredients.forEach(i=> {
            let li = document.createElement("li")
            li.innerHTML = `
                <span class="card-ingredients_name">${i.ingredient}</span>
                <span class="card-ingredients_dose">${ !i.unit && !i.quantity ? "" : !i.unit ? ": "+ i.quantity : ": " + i.quantity + " " + i.unit }</span>
            `
        this.card.querySelector(".card-ingredients").appendChild(li)
        });
    }
}