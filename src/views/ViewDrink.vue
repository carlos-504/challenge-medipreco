<template>
    <div class="view-drink">
        <div class="header-viewcard">
            <MenuToggle />
            <h3 class="typography">
                <span class="medi-word">Medi</span>Drinks
            </h3>
            <div></div>
        </div>
        <div class="page-container">
            <div class="breadcrumb">
                <span class="breadcrumb-item">Home</span>
                <ArrowIcon class="arrow-icon" />
                <span class="breadcrumb-item">Catálogo</span>
                <ArrowIcon class="arrow-icon" />
                <span class="breadcrumb-item-actived">{{
                    drink.strDrink
                }}</span>
            </div>
            <div class="drink">
                <img
                    class="drink-img"
                    :src="drink.strDrinkThumb"
                    :alt="drink.strDrink"
                />
                <div class="details-wrap">
                    <div class="drink-labels">
                        <span class="drink-title">{{ drink.strDrink }}</span>
                        <span class="id">#{{ drink.idDrink }}</span>
                    </div>
                    <div class="drink-details">
                        <span class="details-label"
                            >Categoria: {{ drink.strCategory }}</span
                        >
                        <span class="details-label"
                            >Alcóolico: {{ drink.strAlcoholic }}</span
                        >
                        <span class="details-label"
                            >Copo de servir: {{ drink.strGlass }}</span
                        >
                    </div>
                    <div class="buttons-size">
                        <span class="btn-xs">XS</span>
                        <span class="btn-s">S</span>
                        <span class="btn-m">M</span>
                        <span class="btn-l">L</span>
                    </div>
                    <router-link to="/">
                        <button class="btn-back">
                            Voltar para tela inicial
                        </button>
                    </router-link>
                    <div class="ingredients">
                        <span class="ingredient-label">Ingredientes</span>
                        <span class="ingredient-item"
                            ><ArrowIcon class="arrow-icon" />
                            {{ drink.strIngredient1 }}</span
                        >
                        <span class="ingredient-item"
                            ><ArrowIcon class="arrow-icon" />
                            {{ drink.strIngredient2 }}</span
                        >
                        <span class="ingredient-item"
                            ><ArrowIcon class="arrow-icon" />
                            {{ drink.strIngredient3 }}</span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuToggle from '@/components/svg/MenuToggle.vue';
import ArrowIcon from '@/components/svg/ArrowIcon.vue';
import axios from 'axios';

export default {
    components: {
        MenuToggle,
        ArrowIcon,
    },

    data() {
        return {
            drink: null,
        };
    },

    methods: {
        async getDrink() {
            try {
                const id = this.$route.params.drinkId;

                const drink = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                );

                this.drink = drink.data.drinks[0];
            } catch (err) {
                console.log(err);
            }
        },
    },

    mounted() {
        this.getDrink();
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

.view-drink {
    font-family: 'Inter', sans-serif;
}

.header-viewcard {
    display: flex;
    justify-content: space-between;
    padding: 25px 25px 0px 25px;
}

.typography {
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 0px;
}

.medi-word {
    color: #4094f7;
}

.page-container {
    display: flex;
    justify-content: center;
    width: 70%;
    height: auto;
    flex-direction: column;
}

.breadcrumb {
    align-self: flex-start;
    display: flex;
    flex-grow: 1;
    flex-basis: auto;
    margin-left: 12rem;
    margin-top: 2rem;
}

.breadcrumb-item {
    font-size: 0.8rem;
    color: #6e7c87;
}

.breadcrumb-item-actived {
    font-size: 0.8rem;
    color: #252c32;
}

.arrow-icon {
    padding: 1.5px 10px;
}

.drink {
    display: flex;
    justify-content: center;
    width: 130%;
}

.drink-img {
    width: 32vw;
    height: auto;
    padding: 40px;
}

.details-wrap {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 50vh;
}

.drink-labels {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 5vw;
}

.drink-title {
    font-weight: bold;
    font-size: 2.2rem;
    color: #252c32;
    padding-bottom: 5px;
}

.id {
    font-weight: normal;
    font-size: 2rem;
    color: #9aa6ac;
}

.drink-details {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 10vh;
}

.details-label {
    font-weight: normal;
    font-size: 14px;
    color: #252c32;
    padding: 4px 0px;
}

.buttons-size {
    text-align: left;
    padding: 35px 0px;
}

.btn-xs,
.btn-s,
.btn-m,
.btn-l {
    padding: 12px 15px;
}

.btn-xs {
    border-radius: 6px 0px 0px 6px;
    font-weight: 600;
    font-size: 14px;
    color: #252c32;
    background-color: #e5e9eb;
}

.btn-l {
    border-radius: 0px 6px 6px 0px;
}

.btn-back {
    border: 0px;
    padding: 8px 16px;
    width: 23rem;
    height: 2.5rem;
    border-radius: 6px;
    background: #4094f7;
    font-weight: 600;
    font-size: 14px;
    color: #f6f8f9;
}

.btn-back:hover {
    background: #2570c8;
}

.btn-back:active {
    background: #4094f7;
}

.ingredients {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 40px 0px;
}

.ingredient-label,
.ingredient-item {
    font-weight: normal;
    font-size: 14px;
    color: #252c32;
    padding: 10px 0px;
}

.ingredient-item {
    border-bottom: 1px solid rgba(10, 23, 55, 0.1);
}
</style>
