<template>
    <div class="container">
        <heading :quoteCounter="getArrayLength"></heading>
        <addQuote></addQuote>
        <quotes-display></quotes-display>
        <component :is="'infoBlock'">
            Info: Click on a Quote to delete it
        </component>
    </div>
</template>

<script>
    import { eventBus } from './main.js';
    import Header from './components/Header.vue';
    import InfoBlock from './components/InfoBlock.vue';
    import AddQuote from './components/AddQuote.vue';
    import QuotesDisplay from './components/QuotesDisplay.vue';

    export default {
        components: {
            heading: Header,
            infoBlock: InfoBlock,
            addQuote: AddQuote,
            quotesDisplay: QuotesDisplay
        }
    }
</script>

<style>
</style>
