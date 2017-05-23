function initialState () {
	return {
		caseValue:'Click Me'
	}
}


Vue.component('simple-case', {
  template: `
    <div class="box" v-on:click="Play">
      {{ caseValue }}
    </div>
  `,
  data: function () {
	  return initialState();	
	},
	props: ['counter','reset'],

	methods: {
		Play:function () {
			this.caseValue = this.Tour();
			this.$emit('increment');		
		},
		Tour:function () {
			return this.counter % 2 === 0 ? 'O' : 'X';
		},
		resetWindow: function (){
        	this.caseValue = 'Click Me';
    	}
	}

})

var vm = new Vue({
	el:'#morpion' ,
	data: {
		counter : 0,

		msg: 'Tu as gagné',

		success : false,

		draw: false,

		showForm : true,

		player1: "Joueur 1",

		player2: "Joueur 2",

		currentPlayer: "Joueur 1",

		winner: "",

		reset:false
	},
	methods: {
		getNamePlayer (value,index) {
			this.nikeName1 = value
		},
		incrementTour: function () {
			this.winner = this.counter % 2 === 0 ? this.player1 : this.player2;	
			this.currentPlayer = this.counter % 2 === 0 ? this.player2 : this.player1;		
      		this.counter += 1
      		this.IsWin();
  		},
  		IsWin:function () { 			
			if(this.$children[0].$data.caseValue !== 'Click Me' && this.$children[0].$data.caseValue == this.$children[1].$data.caseValue && this.$children[1].$data.caseValue == this.$children[2].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[3].$data.caseValue !== 'Click Me' && this.$children[3].$data.caseValue == this.$children[4].$data.caseValue && this.$children[4].$data.caseValue == this.$children[5].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[6].$data.caseValue !== 'Click Me' && this.$children[6].$data.caseValue == this.$children[7].$data.caseValue && this.$children[7].$data.caseValue == this.$children[8].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[0].$data.caseValue !== 'Click Me' && this.$children[0].$data.caseValue == this.$children[4].$data.caseValue && this.$children[4].$data.caseValue == this.$children[8].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[2].$data.caseValue !== 'Click Me' && this.$children[2].$data.caseValue == this.$children[4].$data.caseValue && this.$children[4].$data.caseValue == this.$children[6].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[2].$data.caseValue !== 'Click Me' && this.$children[2].$data.caseValue == this.$children[4].$data.caseValue && this.$children[4].$data.caseValue == this.$children[6].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[0].$data.caseValue !== 'Click Me' && this.$children[0].$data.caseValue == this.$children[3].$data.caseValue && this.$children[3].$data.caseValue == this.$children[6].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[1].$data.caseValue !== 'Click Me' && this.$children[1].$data.caseValue == this.$children[4].$data.caseValue && this.$children[4].$data.caseValue == this.$children[7].$data.caseValue) {
				this.displayAlert();
			}
			if(this.$children[2].$data.caseValue !== 'Click Me' && this.$children[2].$data.caseValue == this.$children[5].$data.caseValue && this.$children[5].$data.caseValue == this.$children[8].$data.caseValue) {
				this.displayAlert();
			}			
			if(this.counter == 9 && this.success !== true) {
				this.displayAlertDraw();
			}		
		},
  		displayAlert: function () {
  			this.success = true	
  			this.currentPlayer = false	
  				
  		},
  		displayAlertDraw: function () {
  			this.draw = true
  			debugger;
  		},
  		close:function () {
			this.success = false 
			this.showForm = true
		},
		playagain:function () {

			this.counter = 0
			this.reset = true	
			this.$children.forEach(function(el, index){
			  el.resetWindow();
			})
			this.showForm = true
			this.success = false 
			this.currentPlayer = ""
			this.player1 = 'player1'
			this.player2 = 'player2'
		},
		getFormValues () {
      		this.player1 = this.$refs.player1.value
      		this.player2 = this.$refs.player2.value	
      		this.currentPlayer = this.player1
      		this.showForm = false	
   		 }
    }
   
})

// state 