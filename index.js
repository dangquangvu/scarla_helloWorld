require('scalra')('curr');

SR.API.add('HelloWorld', {
	name: 'string'
}, function (args, onDone) {
	LOG.warn('HelloWorld called with: ' + args);	
	onDone(null, {hello: 'hello world'});
});




var l_frontier = new SR.Frontier(37070);
l_frontier.init();
