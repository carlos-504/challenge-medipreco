<template>
    <button class="btn-back">
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {
            required: true,
            type: String,
        },
    },
};
</script>

<style>
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
</style>
