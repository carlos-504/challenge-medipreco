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
        <div class="github-container">
            <p class="github">
                <Github /> <span class="user-github">{{ userGitHub }}</span>
            </p>
        </div>
    </header>
</template>

<script>
import LocSVG from './svg/LocIcon.vue';
import Github from './svg/Github.vue';

export default {
    data() {
        return {
            userGitHub: '@carlos-504',
        };
    },

    components: {
        LocSVG,
        Github,
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

.github-container {
    display: flex;
    align-self: center;
    margin-right: 1.1rem;
}

.icon-git {
    margin-right: 10px;
}

.github {
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(10, 23, 55, 0.1);
    border-radius: 5px;
    padding: 7px 16px;
    font-weight: normal;
    font-size: 0.9rem;
    line-height: 24px;
    text-align: center;
    color: #252c32;
}

.user-github {
    padding-left: 8px;
}

.logo {
    margin-bottom: 0px;
    margin-top: 20px;
    letter-spacing: -0.014em;
    font-weight: 600;
    font-size: 1.1rem;
    line-height: 24px;
}

.medi-logo {
    color: #4094f7;
}

.logo-container {
    text-align: left;
    margin-left: 20px;
}

.loc-container {
    display: flex;
    margin-top: -6px;
}

.loc-icon {
    margin-right: 0.7rem;
    margin-bottom: 0.4rem;
    align-self: center;
}

.localization {
    margin-top: 0.6rem;
}
</style>
