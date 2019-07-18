<template>
    <div class="flexbox-container">
        <div v-for="(item) in quoteArray" :key="item.quoteID">
            Quote: {{ item.quoteString }} - ID: {{ item.quoteID }}
        </div>
    </div>
</template>

<script>

import { eventBus } from '../main.js';
import { QuoteItem } from './QuoteItem.vue';

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
    components: {
        quoteItem: QuoteItem
    },
    created() {
        eventBus.$on('newQuoteBeingAdded', (quote, quoteID) => {
            if (this.quoteArray.length != 10){
                this.quoteArray = [...this.quoteArray, 
                {
                    'quoteID':quoteID, 
                    'quoteString': quote
                }];

                eventBus.updateNumberOfQuotes(this.quoteArray.length);
            }
        })
    },
}
</script>

<style scoped>
    div.alert.alert-info {
        text-align: center;
    }

    .flexbox-container {
        box-sizing: border-box;
        display: flex;
    }

</style>