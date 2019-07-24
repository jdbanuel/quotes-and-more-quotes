<template>
    <div @click="removeQuoteFromList">
        <slot>

        </slot>
    </div>
</template>

<script>

import { eventBus } from '../main';

export default {
    data(){
        return {

        }
    },
    props: {
        quoteID: Number
    },
    methods: {
        removeQuoteFromList() {
            eventBus.sendQuoteToDelete(this.quoteID);
        }
    },

}
</script>

<style scoped>

</style>
