<template>
    <div class="quote-container">
        <div class="form-group">
            <label for="comment">Quote</label>
            <textarea v-model="quoteString" class="form-control" rows="5" id="comment"></textarea>
        </div> 
        <div class="break"></div>
        <div class="button-wrapper">
            <button class="btn btn-primary" @click="addQuoteToArray">Add Quote</button>
        </div>
    </div>
</template>

<script>

import { eventBus } from '../main';

export default {
    data(){
        return {
            quoteString: "",
            quoteID: 0
        }
    },
    methods: {
        addQuoteToArray: function(){
            if (this.quoteString !== ""){
                ++this.quoteID;
                eventBus.getQuote(this.quoteString,this.quoteID);
                this.quoteString = ""
            }
        }
    },
}
</script>

<style scoped>
    div.quote-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    div.form-group {
        width: 60%;
    }

    .break {
        flex-basis: 100%;
        height: 0;
    }

    .button-wrapper {
        padding-bottom: 1em;
    }

</style>
