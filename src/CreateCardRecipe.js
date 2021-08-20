export default class CreateCardRecipe {
    constructor (recipe){
        this.recipe = recipe
        this.containCardsRecipes = document.querySelector(".listCard")
        this.card = document.createElement("div")
        this.create() 
        this.createListIngredients()
        this.createListUstensils()
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
            <div class="row justify-content-between" id="card-infos">
                <ul class="card-ingredients col-6"></ul>
                <p class="card-description col-6">${this.recipe.description}</p>
                <p class="${this.recipe.appliance.replace(/ /g, "-")}" type="hidden"></p>
            
            </div>
        </div>
        `
    }

    createListIngredients(){
        this.recipe.ingredients.forEach(i=> {
            this.card.querySelector(".card-ingredients").innerHTML += `
                <li><span class="card-ingredients_name ${i.ingredient.replace(/ /g, "-")}">${i.ingredient}</span><span class="card-ingredients_dose">${ !i.unit && !i.quantity ? "" : !i.unit ? ": "+ i.quantity : ": " + i.quantity + " " + i.unit }</span></li>
            `
            });
    }
    createListUstensils(){
        this.recipe.ustensils.forEach(i=> {
            console.log(i)
            this.card.querySelector('#card-infos').innerHTML += `
                <p class="${i.replace(/ /g, "-")}" type="hidden"></p>
            `
        });
      
    }
}