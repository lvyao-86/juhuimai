// 配置信息
require.config({
	// baseUrl:'js'
	//解决缓存问题
	urlArgs: 'v='+ Date.now(),
	paths:{
		jquery:'../lib/jquery3.1.1',
		lxCarousel:'../lib/jquery.lxCarousel/jquery.lxCarousel',
		gdsZoom:'../lib/jquery-gdsZoom/jquery.gdsZoom',
		'validate': '../lib/jquery-validate/jquery.validate',
		'messages': '../lib/jquery-validate/localization/messages_zh',
		'common': 'common_module'
	},
	shim:{
		lxCarousel:['jquery'],
		gdsZoom:['jquery'],
		validate:['jquery'],
		messages:['validate']
	}
});