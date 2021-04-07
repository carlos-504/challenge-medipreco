<template>
    <div class="img-container">
        <router-link
            :to="{
                name: 'ViewDrink',
                params: { drinkId: id },
            }"
        >
            <img class="img-drinks" :src="url" />
        </router-link>
        <div class="descripition-card">
            <span class="drink-name">{{ title }}</span>
            <span class="drink-id">#{{ id }}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        id: {
            required: true,
        },
    },
};
</script>

<style>
.img-container {
    font-family: 'Inter', sans-serif;
    margin: 0 auto;
}

.img-drinks {
    width: 100%;
    height: auto;
}

.descripition-card {
    display: flex;
    flex-direction: column;
    text-align: left;
    border: 1px solid rgba(10, 23, 55, 0.1);
    border-top: none;
    padding: 20px 0px 40px 20px;
}

.drink-name {
    font-weight: normal;
    font-size: 0.95rem;
    line-height: 1.5rem;
    color: #252c32;
    padding: 4px;
    text-decoration: none;
}

.drink-id {
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 1.5rem;
    color: #252c32;
}
</style>
