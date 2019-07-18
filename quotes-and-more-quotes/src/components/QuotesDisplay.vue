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
            quoteArray: [
                {
                    quoteID: 0,
                    quoteString: "This is a placeholder quote."
                }
            ],
        }
    },
    methods: {

    },
    computed: {
        
    },
    created() {
        eventBus.$on('newQuoteBeingAdded', (quote, quoteID) => {
            if (this.quoteArray.length != 10){
                this.quoteArray = [...this.quoteArray, 
                {
                    'quoteID':quoteID, 
                    'quoteString': quote
                }];
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