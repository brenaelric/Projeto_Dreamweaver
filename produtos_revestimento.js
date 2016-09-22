// JavaScript Document
angular.module("gal", []).controller("ctl_gal", function() {
    this.miniaturas = [{
        foto: ["fotos_site_finaliza_do_e_com_logo/revestimento/domino.jpg", "fotos_site_finaliza_do_e_com_logo/revestimento/domino2.jpg"],
        titulo: "Dominó",
		infos:[
            {texto:"Um rico e requintado trabalho de corte de pequenos retangulos de pedra madeira que confere um exelente aspecto em qualquer tipo de ambiente. Muito fácil de rejuntar, possue brilho característico da pedra real. Seu peso estrutural varia entre 6 e 7 kg por metro quadrado."},
        ] 
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/revestimento/filete.jpg", "fotos_site_finaliza_do_e_com_logo/revestimento/filete2.jpg"],
        titulo: "Filete",
		infos:[
            {texto: "Também conhecida como Canjiquinha, pedra palito e filete de pedra São Tomé, as placas sintéticas Texturise® possuem encaixes perfeitos que permitem fixar as placas sem denunciar as emendas. Possuem também brilho característico da pedra real. Seu peso estrutural varia entre 6 e 7 kg por metro quadrado."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/revestimento/mosaico.jpg", "fotos_site_finaliza_do_e_com_logo/revestimento/mosaico2.jpg"],
        titulo: "Mosaico",
		infos:[
            {texto: "Inspirada nos revestimentos intertravados de pedra madeira natural, o Mosaico Texturise® tem como proposta deixar o ambiente clássico com rusticidade. As placas possuem encaixes que permitem disfarçar as emendas, textura e brilho característico da pedra real. Seu peso estrutural varia entre 6 e 7 kg por metro quadrado."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/revestimento/tetris.jpg", "fotos_site_finaliza_do_e_com_logo/revestimento/tetris2.jpg"],
        titulo: "Tétris",
		infos:[
            {texto: "Composto por retângulos em relevo alto e baixo, posicionados harmonicamente. Possuem textura característica da pedra real. Seu peso estrutural varia entre 6 e 7 kg por metro quadrado."},
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