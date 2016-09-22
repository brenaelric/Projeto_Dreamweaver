// JavaScript Document
angular.module("gal", []).controller("ctl_gal", function() {
    this.miniaturas = [{
        foto: ["fotos_site_finaliza_do_e_com_logo/papel_de_parede/papel.jpg", "fotos_site_finaliza_do_e_com_logo/papel_de_parede/papel2.jpg", "fotos_site_finaliza_do_e_com_logo/papel_de_parede/papel3.jpg", "fotos_site_finaliza_do_e_com_logo/papel_de_parede/papel4.jpg", "fotos_site_finaliza_do_e_com_logo/papel_de_parede/papel5.jpg"],
        titulo: "Nacionais e Importados",
		infos:[
            {texto:"É um revestimento de fácil aplicação, com uma durabilidade muito superior à pintura convencional, é um produto que garante um ar mais aconchegante aos ambientes. É antialérgico porque sua cola é feita à base de água , fácil de limpar e conservar. Não mancha e não tem cheiro. O border é uma faixa decorativa que pode ser aplicada diretamente sobre a pintura ou como complemento decorativo de um belo papel de parede. Você pode redecorar sua casa ou escritório no menor espaço de tempo, sem precisar retirar móveis e objetos de decoração.Tudo isso sem sujeira, poeira e aborrecimentos. A conservação do papel de parede não tem mistério: Basta passar um pano úmido, ou espuma de sabão de coco, imediatamente sobre a superfície para garantir sua manutenção."},
        ]
    }
	]
    this.destaque = this.miniaturas[0]
    this.seleciona = function(i) {
        this.destaque = this.miniaturas[i]
		this.i=0
    }
	this.i=0
	this.mudafoto=function(){
		this.i++
		if(this.i>=this.destaque.foto.length)
			this.i=0
	}
})