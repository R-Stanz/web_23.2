let vm = Vue.createApp({

	data() {

		return {

			categories: 		['Estudy', 
						 'Leisure',
						 'Reading',
						 'Health'],

			selectedCategory: 	'',
			description: 		'',
			date: 			'',

			tasks: 			[]
		}

	},
	
	methods: {

		submit() {

			if((this.selectedCategory 	=== '') || 
				(this.description 	=== '') ||
				(this.date		=== ''))
			{
				
				return
			}

			this.tasks = this.tasks.concat([{ 
							category : this.selectedCategory,
							description: this.description, 
							date: this.date,
							done: false
							}])

		},

	}

}).mount('#app');
