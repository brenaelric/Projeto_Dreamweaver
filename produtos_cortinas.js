// JavaScript Document
angular.module("gal", []).controller("ctl_gal", function() {
    this.miniaturas = [{
        foto: ["fotos_site_finaliza_do_e_com_logo/cortinas_motorizadas_2.JPG"],
        titulo: "Automação em Cortinas e Persianas",
        infos:[
            {texto:"Mais Conforto – Benefícios da Motorização"},
            {texto:"Com um simples toque no controle remoto ou interruptor as cortinas e persianas são acionadas. Sem qualquer esforço, sobem e descem mesmo se forem pesadas ou de difícil alcance."},
            {texto:"Com a motorização pode-se programar o acionamento das cortinas e persianas em horários determinados ao longo do dia, de forma automática. Para um despertar suave, basta programar a abertura a um palmo do chão"},
            {texto:"Mais Privacidade e Segurança – Benefícios da Motorização"},
            {texto:"Basta um toque no controle remoto para garantir privacidade e segurança. A praticidade da motorização favorece o acionamento dos produtos, pois dispensa o controle manual das cortinas e persianas, permitindo que se tenha privacidade nos ambientes de forma automática."},
            {texto:"Mais Durabilidade – Benefícios da Motorização"},
            {texto:"A motorização proporciona o aumento da vida útil das cortinas e persianas em função da ausência de contato manual durante o acionamento. Para acionar um produto manual, cada pessoa exerce uma força diferente ao movimentá-lo, o que aumenta o seu desgaste."},
			{texto:"Com a motorização permite-se a subida e descida em velocidade constante durante os ciclos de utilização. Com isso reduz-se os custos de manutenção gerando economia para o usuário."},
        ]
		}, {
        foto: ["fotos_site_finaliza_do_e_com_logo/plissada/plissada.jpg", "fotos_site_finaliza_do_e_com_logo/plissada/plissada2.jpg", "fotos_site_finaliza_do_e_com_logo/plissada/plissada3.jpg", "fotos_site_finaliza_do_e_com_logo/plissada/plissada4.jpg"],
        titulo: "Cortina Plissada",
        infos:[
			{texto:"Elegantes e delicadas, as cortinas plissadas são um complemento sofisticado para a sua ambientação. Suas formas criam um efeito de luz suave e extremamente decorativo."},
            {texto:"Opcional - Para ambientes que pedem maior escurecimento, é possível utilizar película vertiback."},
            {texto:"Garantia - Dois anos de garantia contra material defeituoso e/ou erro de fabricação."},
            {texto:"Uso e conservação  - A limpeza dos produtos deve ser feita periodicamente usando-se aspirador de pó com o bocal de escova. Para retirar manchas, utilize uma esponja macia umedecida com água morna ou procure nosso serviço de manutenção."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/celular/celular.png", "fotos_site_finaliza_do_e_com_logo/celular/celular2.jpg", "fotos_site_finaliza_do_e_com_logo/celular/celular3.jpg"],
        titulo: "Cortina Celular",
        infos:[
			{texto:"As Cortinas Celulares têm formato inovador que melhora as condições termoacústicas dos ambientes. Seu design com células em forma de casas de abelha proporciona maior conforto ao absorver ruídos, criar uma camada de ar isolante e filtrar os raios ultravioleta. Apresentadas em tecidos translúcidos, semiblackout e blackout, essas cortinas têm ainda a propriedade antiestática que reduz o acúmulo de poeira."},
            {texto:"Garantia de dois anos de garantia contra material defeituoso e/ou erro de fabricação."},
            {texto:"Uso e conservação -  limpeza dos produtos deve ser feita periodicamente usando-se aspirador de pó com o bocal de escova. Para retirar manchas, utilize uma esponja macia umedecida com água morna ou procure nosso serviço de manutenção."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/tecido/tecido.jpg", "fotos_site_finaliza_do_e_com_logo/tecido/tecido2.jpg", "fotos_site_finaliza_do_e_com_logo/tecido/tecido3.jpg", "fotos_site_finaliza_do_e_com_logo/tecido/tecido4.jpg", "fotos_site_finaliza_do_e_com_logo/tecido/tecido5.jpg"],
        titulo: "Cortina Tecido",
        infos:[
			{texto:"Cortina que combina tecidos translúcidos e blackouts. Ideal para todos os tipos de ambientes, podendo ser confeccionadas para uso em trilho suíço ou no varão em alumínio; este sendo nas cores cromado, inox, branco, cerejeira, imbuia, mogno."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/romana/romana1.jpg", "fotos_site_finaliza_do_e_com_logo/romana/romana2.jpg", "fotos_site_finaliza_do_e_com_logo/romana/romana3.jpg", "fotos_site_finaliza_do_e_com_logo/romana/romana4.jpg", "fotos_site_finaliza_do_e_com_logo/romana/romana5.jpg"],
       infos:[
			{texto:"Design simples e sofisticado. As Cortinas Romanas vestem seu ambiente com sutileza e elegância nas mais variadas cores e padrões. Seu desenho alia simplicidade a um movimento delicado, com o efeito decorativo e aconchegante."},
            {texto:"Garantia de dois anos de garantia contra material defeituoso e/ou erro de fabricação. A limpeza dos produtos deve ser feita periodicamente usando-se aspirador de pó com o bocal de escova. Para retirar manchas, utilize uma esponja macia umedecida com água morna ou procure nosso serviço de manutenção."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/painel_romano/painel_romano.jpg", "fotos_site_finaliza_do_e_com_logo/painel_romano/painel_romano2.jpg", "fotos_site_finaliza_do_e_com_logo/painel_romano/painel_romano3.jpg", "fotos_site_finaliza_do_e_com_logo/painel_romano/painel_romano4.jpg"],
        titulo: "Cortina Painel Romano",
		infos:[
        {texto:"O Painel Romano é a solução elegante para grandes vãos, pode ser usado como cortina e até mesmo como divisor de ambientes, proporcionando sofisticação e privacidade. Com várias opções de tecido, permite níveis de escurecimento, visibilidade e luminosidade dos ambientes, atendendo as várias exigências do mercado atual."},
		]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/painel/painel1.jpg", "fotos_site_finaliza_do_e_com_logo/paine_romano/painel2.jpg", "fotos_site_finaliza_do_e_com_logo/painel/painel3.jpg", "fotos_site_finaliza_do_e_com_logo/painel/painel4.jpg"],
        titulo: "Cortina Painel",
        infos:[
			{texto:"As Cortinas Painel possuem mecanismos importados com acionamento por comando, propocionando maior durabilidade do tecido e um visual clean. Os painéis também são facilmente removíveis para manutenção, aliando praticidade à extrema beleza. As Cortinas Painel são a melhor opção quando o ambiente exige cobertura de espaços amplos ou de esquadrias em grandes proporções."},
            {texto:"Dois anos de garantia contra material defeituoso e/ou erro de fabricação."},
            {texto:"A limpeza dos produtos deve ser feita periodicamente usando-se aspirador de pó com o bocal de escova. Para retirar manchas, utilize uma esponja macia umedecida com água morna ou procure nosso serviço de manutenção."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/rolo/rolo.jpg", "fotos_site_finaliza_do_e_com_logo/rolo/rolo2.jpg", "fotos_site_finaliza_do_e_com_logo/rolo/rolo3.jpg", "fotos_site_finaliza_do_e_com_logo/rolo/rolo4.jpg", "fotos_site_finaliza_do_e_com_logo/rolo/rolo5.jpg"],
        titulo: "Cortina Rolô",
        infos:[
			{texto:"As Cortinas Rolô complementam os ambientes de forma contemporânea, aliando um desenho clean ao efeito decorativo das cores e texturas dos tecidos."},
            {texto:"Dois anos de garantia contra material defeituoso e/ou erro de fabricação."},
            {texto:"A limpeza dos produtos deve ser feita periodicamente usando-se aspirador de pó com o bocal de escova. Para retirar manchas, utilize uma esponja macia umedecida com água morna ou procure nosso serviço de manutenção."},
        ]
    }, {
        foto: ["fotos_site_finaliza_do_e_com_logo/double_shade/double_shade.jpg", "fotos_site_finaliza_do_e_com_logo/double_shade/double_shade2.jpg", "fotos_site_finaliza_do_e_com_logo/double_shade/double_shade3.jpg", "fotos_site_finaliza_do_e_com_logo/double_shade/double_shade4.jpg"],
        titulo: "Cortina Double Shade",
        infos:[
			{texto:"Cortina com estilo contemporâneo composta por dupla lâmina de tecido que alterna transparência e opacidade possibilitando diversas regulações que favorecem privacidade e visibilidade conforme manuseio, além de permitir recolhimento total."},
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