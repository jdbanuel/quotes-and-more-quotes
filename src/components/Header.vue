<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" v-bind:style="getProgressBarWidth" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ quoteCounterVal }}/10</div>
        </div>
    </div>
</template>

<script>

import { eventBus } from '../main.js'

export default {
    data(){
        return{
            quoteCounterVal: this.quoteCounter
        }
    },
    props: {
        quoteCounter: {
            type: Number,
            default: 1
        }
    },
    computed: {
        getProgressBarWidth: function(){
            let widthPercentage = this.quoteCounterVal*10;
            return 'width: ' + widthPercentage + '%';
        }
    },
    created() {
        eventBus.$on('numberOfQuotesChange', (numQuotes) => {
            this.quoteCounterVal = numQuotes;
        })
    },
}
</script>

<style scoped>

</style>
