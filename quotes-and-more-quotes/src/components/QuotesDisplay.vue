<template>
    <div>
        <button @click="updateNumQuotes">Click me</button>
    </div>
</template>

<script>

import { eventBus } from '../main.js';

export default {
    data(){
        return{
            quoteArray: ["This is a placeholder quote."],
        }
    },
    methods: {
        //Delete this method once Add quote is able to send data to this component.
        updateNumQuotes: function(){
            this.quoteArray.push('Boop');
            let numQuotes = this.quoteArray.length;
            eventBus.updateNumberOfQuotes(numQuotes);
        }
    },
    computed: {
        
    },
    created() {
        eventBus.$on('newQuoteBeingAdded', (quote) => {
            if (this.getArrayLength != 10){
                this.quoteArray = [...this.quoteArray, quote];
            }
        })
    },
}
</script>

<style scoped>
    div.alert.alert-info {
        text-align: center;
    }

</style>