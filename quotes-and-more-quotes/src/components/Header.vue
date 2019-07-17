<template>
    <div>
        <h3>Quotes Added</h3>
        <div class="progress">
            <div class="progress-bar" role="progressbar" v-bind:style="getProgressBarWidth" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{ quoteCounter }}/10</div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props: {
        quoteCounter: {
            type: Number
        }
    },
    computed: {
        getProgressBarWidth: function(){
            let widthPercentage = this.quoteCounter*10;
            return 'width: ' + widthPercentage + '%';
        }
    },
}
</script>

<style scoped>

</style>
