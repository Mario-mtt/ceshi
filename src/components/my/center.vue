<template>
    <div class="center-div">
        <slot name="zx-title"></slot>
        <slot name="zx-item"></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .center-div{
        width: 100%;
        height: 1.61rem;
        background-color: white;
        margin: .18rem 0;
        padding: .25rem 0;
    }

</style>