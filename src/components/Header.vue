<template>
    <header class="header-container">
        <div class="logo-container">
            <p class="logo"><span class="medi-logo">Medi</span>Drinks</p>
            <div class="loc-container">
                <LocSVG class="loc-icon" />
                <p class="localization">
                    Brasília, DF
                </p>
            </div>
        </div>
        <div class="github">
            <p class="user-github">
                <b-icon-github class="icon-git" /> {{ userGitHub }}
            </p>
        </div>
    </header>
</template>

<script>
import LocSVG from './LocIcon.vue';

export default {
    data() {
        return {
            userGitHub: '@carlos-504',
        };
    },

    components: {
        LocSVG,
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

.header-container {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(10, 23, 55, 0.1);
    padding-left: 20px;
    font-family: 'Inter', sans-serif;
}

.github {
    align-self: center;
    margin-right: 20px;
}

.icon-git {
    margin-right: 10px;
}

.user-github {
    border: 1px solid rgba(10, 23, 55, 0.1);
    border-radius: 5px;
    padding: 7px 18px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 24px;
    text-align: center;
    letter-spacing: -0.006em;
    color: #252c32;
}

.logo {
    font-family: 'Inter', sans-serif;
    margin-bottom: 0px;
    margin-top: 20px;
    letter-spacing: -0.014em;
    font-style: normal;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 24px;
}

.medi-logo {
    color: #4094f7;
}

.logo-container {
    text-align: left;
    align-items: center;
    margin-left: 20px;
}

.loc-container {
    display: flex;
    margin-top: -6px;
}

.loc-icon {
    margin-right: 10px;
    margin-bottom: 5px;
    align-self: center;
}

.localization {
    margin-top: 10px;
}
</style>
