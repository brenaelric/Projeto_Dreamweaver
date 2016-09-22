// JavaScript Document
angular.module("gal", []).controller("ctl_gal", function() {
    this.miniaturas = [{
        foto: ["fotos_site_finaliza_do_e_com_logo/persiana_horizontal/horizontal.jpg", "fotos_site_finaliza_do_e_com_logo/persiana_horizontal/horizontal2.jpg", "fotos_site_finaliza_do_e_com_logo/persiana_horizontal/horizontal3.jpg", "fotos_site_finaliza_do_e_com_logo/persiana_horizontal/horizontal4.jpg", "fotos_site_finaliza_do_e_com_logo/persiana_horizontal/horizontal5.jpg"],
        titulo: "Persiana horizontal - aluminio e madeira",
		infos:[
            {texto:"As persianas horizontais são construídas em liga nobre de alumínio, nas dimensões 15mm/25mm, com base e cabeçote também em alumínio - um diferencial entre os produtos do mercado - e 50mm com base e cabeçote em aço protegido. As persianas 25mm podem ser encomendadas na versão original, perfurada - que proporciona translucidez - ou prestige - com espaço reduzido entre as lâminas e sem furos aparentes, propocionando maior escurecimento. As Persianas Horizontais possibilitam soluções para paredes ou esquadrias fora de padrão, com persianas inclinadas, guiadas com cabos de aço ou com recortes - para evitar obstáculos ao recolhimento. Há também a possibilidade de montagem com lâminas de cores variadas para um efeito decorativo. Veja essa solução nas aplicações do produto. Garantia Dois anos de garantia contra material defeituoso e/ou erro de fabricação. A limpeza dos produtos deve ser feita periodicamente usando-se aspirador de pó com o bocal de escova. Para retirar manchas, utilize uma esponja macia umedecida com água morna ou procure o serviço de manutenção da Blackout. Nunca utilizar produtos de natureza abrasiva ou ácido."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/vertical_pvc/pv.jpg", "fotos_site_finaliza_do_e_com_logo/vertical_pvc/pv2.jpg", "fotos_site_finaliza_do_e_com_logo/vertical_pvc/pv3.jpg", "fotos_site_finaliza_do_e_com_logo/vertical_pvc/pv4.jpg", "fotos_site_finaliza_do_e_com_logo/vertical_pvc/tec.jpg", "fotos_site_finaliza_do_e_com_logo/vertical_pvc/tec2.jpg", "fotos_site_finaliza_do_e_com_logo/vertical_pvc/tec3.jpg", "fotos_site_finaliza_do_e_com_logo/vertical_pvc/tec4.jpg"],
        titulo: "Persiana vertical em PVC e Tecido",
		infos:[
            {texto: "Com o melhor mecanismo do mercado, as Persianas Verticais são garantia de qualidade e durabilidade. Ideais para compor ambientes despojados ou sóbrios, as várias opções de abertura flexibilizam sua utilização, adaptando o produto às necessidades de cada espaço. As Persianas Verticais em tecido propocionam variedade de estilo através de tecidos nacionais e importados em várias coleções com as texturas e cores da tendência, nas opções translúcidas ou blackout. Indicada para ambientes que precisam de limpeza impecável, As Persianas Verticais em PVC conferem praticidade aos ambientes com uma ampla cartela de cores. As Persianas Verticais possibilitam soluções para paredes ou esquadrias fora de padrão, com persianas inclinadas, com trilho curvo ou com recortes - para evitar obstáculos ao recolhimento. Veja nas aplicações do produto. Há também a possibilidade de montagem com lâminas de cores variadas para um efeito decorativo. Garantia Dois anos de garantia contra material defeituoso e/ou erro de fabricação. A limpeza dos produtos deve ser feita periodicamente usando-se aspirador de pó com o bocal de escova. Para retirar manchas, utilize uma esponja macia umedecida com água morna ou procure o serviço de manutenção da Blackout. Nunca utilizar produtos de natureza abrasiva ou ácido."},
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