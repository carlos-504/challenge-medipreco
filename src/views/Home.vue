<template>
    <div class="home">
        <Header />
        <div class="top-container">
            <div class="typography-container">
                <h3 class="typography">
                    Os melhores drinks não-alcoólicos do
                    <span class="brasil-word">Brasil</span>
                </h3>
                <p class="result-message">
                    {{ drinks.length }} resultados encontrados
                </p>
            </div>
            <div class="views-container">
                <div class="view-grid"><ViewGrid /></div>
                <div class="view-list"><ViewList /></div>
            </div>
        </div>
        <div class="drinks-wrap">
            <div class="drinks-container">
                <CardDrinks
                    v-for="drink in drinks"
                    :url="drink.strDrinkThumb"
                    :title="drink.strDrink"
                    :id="drink.idDrink"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ViewGrid from '@/components/svg/ViewGrid.vue';
import ViewList from '@/components/svg/ViewList.vue';
import CardDrinks from '@/components/CardDrinks.vue';
import axios from 'axios';

export default {
    components: {
        Header,
        ViewGrid,
        ViewList,
        CardDrinks,
    },

    data() {
        return {
            drinks: [],
        };
    },

    methods: {
        async getDrinks() {
            try {
                const drinks = await axios.get(
                    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
                );

                this.drinks = drinks.data.drinks;
            } catch (err) {
                console.log(err);
            }
        },
    },

    mounted() {
        this.getDrinks();
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

.home {
    font-family: 'Inter', sans-serif;
}

.brasil-word {
    color: #4094f7;
}

.top-container {
    display: flex;
    justify-content: space-between;
    margin: 1.2rem 4.5rem;
}

.typography-container {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.typography {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 32px;
    margin: 8px 0px;
}

.result-message {
    font-weight: 500;
    font-size: 1.18rem;
    line-height: 32px;
    color: #9aa6ac;
    margin-top: -10px;
}

.views-container {
    display: flex;
    align-self: flex-start;
}

.view-grid,
.view-list {
    padding: 7px 9px;
    background: #f6f8f9;
}

.view-grid {
    border-radius: 6px 0px 0px 6px;
}

.view-list {
    border-radius: 0px 6px 6px 0px;
}

.view-grid:active,
.view-list:active {
    background: #e5e9eb;
}

.drinks-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 1px;
    width: 55%;
    height: auto;
    justify-content: center;
}

.drinks-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
}
</style>
