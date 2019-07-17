import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
	methods: {
		getQuote(quote){
			this.$emit('newQuoteBeingAdded', quote);
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
