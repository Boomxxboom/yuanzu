require.config({
	baseUrl:"/",
	paths:{
		"jquery" : "libs/jquery/jquery-3.2.1",
		"header" : "js/module/header",
		"footer" : "js/module/footer",
		"url" : "js/module/url",
		"template":"libs/art-template/template-web",
		"zoom" : "libs/jquery-plugins/jquery.elevateZoom-3.0.8.min",
		"right" :"js/module/right",
		"fly" : "libs/jquery-plugins/jquery.fly.min"
	},
	//垫片
	shim : {
		"zoom" : {
			deps:["jquery"]
		},
		"fly" : {
			deps:["jquery"]
		},
		
	}
})
