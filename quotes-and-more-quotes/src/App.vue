<template>
    <div class="container">
        <heading :quoteCounter="numberOfQuotes"></heading>
        <button @click="numberOfQuotes++">Quote++</button>
        <component :is="'infoBlock'">
            Info: Click on a Quote to delete it
        </component>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import InfoBlock from './components/InfoBlock.vue';

    export default {
        data(){
            return{
                numberOfQuotes: 0
            }
        },
        components: {
            heading: Header,
            infoBlock: InfoBlock
        }
    }
</script>

<style>
</style>
