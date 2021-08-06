export default class CreateCardRecipe {
    constructor (recipe){
        this.recipe = recipe
        this.containCardsRecipes = document.querySelector(".listCard")
        this.createElementCard()
        this.addListIngredientAtElementCard()
        this.addClassAtElementCard()
        this.addAttributeAtElementCard()
        this.addTextContentAtElementCard()
        this.rattachElementCardAtDOM() 
    }

    createElementCard() {
        this.card = document.createElement("div")
        this.cardImage = document.createElement("div")
        this.cardBody = document.createElement("div")
        this.cardBodyRowNameTime = document.createElement("div")
        this.cardBodyRowNameTimeH5 = document.createElement("h5")
        this.cardBodyRowNameTimeP = document.createElement("p")
        this.cardBodyRowNameTimePImg = document.createElement("img")
        this.cardBodyRowIngredientsDescription = document.createElement("div")
        this.cardBodyRowIngredientsDescriptionUl = document.createElement("ul")
        this.cardBodyRowIngredientsDescriptionP = document.createElement("p")
    }

    addListIngredientAtElementCard() {
        this.recipe.ingredients.forEach(i=> {
            let li = document.createElement("li")
            let spanName = document.createElement("span")
            let spanDose = document.createElement("span")
            spanName.classList.add("card-ingredients_name")
            spanName.textContent = i.ingredient
            spanDose.classList.add("card-ingredients_dose")
            if(i.unit) {
                spanDose.textContent = i.quantity + i.unit
            }else {
                spanDose.textContent = i.quantity
            }

            this.cardBodyRowIngredientsDescription.appendChild(this.cardBodyRowIngredientsDescriptionUl)
            this.cardBodyRowIngredientsDescriptionUl.appendChild(li)
            li.appendChild(spanName)
            li.appendChild(spanDose)
        });
    }

    addClassAtElementCard(){
        this.card.classList.add("card")
        this.cardImage.classList.add("card-img")
        this.cardBody.classList.add("card-body")
        this.cardBodyRowNameTime.classList.add("row")
        this.cardBodyRowNameTimeH5.classList.add("card-title", "col-xl-8", "col-sm-12")
        this.cardBodyRowNameTimeP.classList.add("card-time", "col-xl-4", "col-sm-12")
        this.cardBodyRowIngredientsDescription.classList.add("row", "justify-content-between")
        this.cardBodyRowIngredientsDescriptionUl.classList.add("card-ingredients", "col-6")
        this.cardBodyRowIngredientsDescriptionP.classList.add("card-description", "col-6")
    }

    addAttributeAtElementCard() {
        // this.cardBodyRowNameTimePImg.setAttribute("src", "img/icon-time.png")
        // this.cardBodyRowNameTimePImg.setAttribute("alt", "")
        this.card.setAttribute("id", this.recipe.id)
    }

    addTextContentAtElementCard() {
        this.cardBodyRowNameTimeH5.textContent = this.recipe.name
        this.cardBodyRowNameTimeP.textContent = this.recipe.time
        this.cardBodyRowIngredientsDescriptionP.textContent = this.recipe.description
    }

    rattachElementCardAtDOM() {
        this.containCardsRecipes.appendChild(this.card)
        this.card.appendChild(this.cardImage)
        this.card.appendChild(this.cardBody)
        this.cardBody.appendChild(this.cardBodyRowNameTime)
        this.cardBody.appendChild(this.cardBodyRowIngredientsDescription)
        this.cardBodyRowNameTime.appendChild(this.cardBodyRowNameTimeH5)
        this.cardBodyRowNameTime.appendChild(this.cardBodyRowNameTimeP)
        // this.cardBodyRowNameTime.appendChild(this.cardBodyRowNameTimePImg)
        this.cardBodyRowIngredientsDescription.appendChild(this.cardBodyRowIngredientsDescriptionP)

    }
}