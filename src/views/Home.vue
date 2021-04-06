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
        <div class="desgraca">
            <div class="drinks-container">
                <div class="img-container" v-for="drink in drinks">
                    <img class="img-drinks" :src="drink.strDrinkThumb" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import ViewGrid from '@/components/ViewGrid.vue';
import ViewList from '@/components/ViewList.vue';

const axios = require('axios');

export default {
    components: {
        Header,
        ViewGrid,
        ViewList,
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
                    'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
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

.brasil-word {
    color: #4094f7;
}

.top-container {
    display: flex;
    justify-content: space-between;
    margin: 17px 82px;
}

.typography-container {
    display: flex;
    flex-direction: column;
    text-align: left;
}

.typography {
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
}

.result-message {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: -0.019em;
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
    gap: 0px 2px;
    grid-template-areas:
        '. . .'
        '. . .'
        '. . .';
    width: 67%;
    height: auto;
    justify-content: center;
}

.desgraca {
    display: flex;
    justify-content: center;
    width: 100%;
}

.img-container {
    margin: 0 auto;
}

.img-drinks {
    width: 100%;
    height: auto;
}
</style>
