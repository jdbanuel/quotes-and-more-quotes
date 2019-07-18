import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
	methods: {
		getQuote(quote, quoteID){
			this.$emit('newQuoteBeingAdded', quote, quoteID);
    },
    updateNumberOfQuotes(numQuotes){
      this.$emit('numberOfQuotesChange', numQuotes);
    }
	}
})

new Vue({
  el: '#app',
  render: h => h(App)
})
