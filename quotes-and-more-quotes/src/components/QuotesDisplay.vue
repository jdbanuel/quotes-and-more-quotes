<template>
    <div class="flexbox-container">
        <quoteItem class="quote-item"
            :quoteID="item.quoteID" 
            v-for="(item) in quoteArray" :key="item.quoteID">
             {{ item.quoteString }} 
        </quoteItem>
    </div>
</template>

<script>

import { eventBus } from '../main.js';
import QuoteItem from './QuoteItem.vue';

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
        });

        eventBus.$on('deletingQuote', (quoteID) => {
            let index = this.quoteArray.findIndex(item => item.quoteID === quoteID);
            console.log(index);
            this.quoteArray.splice(index,1);
            eventBus.updateNumberOfQuotes(this.quoteArray.length);
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
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .quote-item {
        font-family: 'Arizonia';
        border: solid 1px gray;
        font-size: 2em;
        width: 300px;
        min-height: 150px;
        padding: 20px;
        margin: 20px 20px;
    }

</style>