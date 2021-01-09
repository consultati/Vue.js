const app = new Vue({
	el: '#app',
	data: {
		titulo: 'Olá mundo com Vue',
		frutas: [
			{nome:'Pera', quantidade:10},
			{nome:'Maça', quantidade:0},
			{nome:'Banana', quantidade:15}
		],
		novaFruta: '',
		total: 0
	},
	methods:{
		agregarFruta () {
			this.frutas.push ({
					nome: this.novaFruta, quantidade: 0
			});
			this.novaFruta = '';
		}
	},
	computed: {
		somarFrutas() {
				this.total = 0;
				for(fruta of this.frutas){
					this.total = this.total + fruta.quantidade;
				}
				return this.total;
		}
	}
})