
console.log('Starting . . .')
require('dotenv').config(), require('rootpath')(), require('./server')
const { spawn: spawn } = require('child_process'), path = require('path'), colors = require('@colors/colors/safe'), CFonts = require('cfonts')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '1'
process.on('uncaughtException', console.error)

function start() {
	let args = [path.join(__dirname, './connect.js'), ...process.argv.slice(2)]
	let p = spawn(process.argv[0], args, { stdio: ['inherit', 'inherit', 'inherit', 'ipc'] })
	.on('message', data => {
		if (data == 'reset') {
			console.log('Restarting...')
			p.kill()
			delete p
		}
	})
	.on('exit', code => {
		console.error('Exited with code:', code)
		if (code == 1) start()
 if (code == null) start()
	})
}

function _0x7496(){var _0x2e4e7c=['55whtjtU','shade','548097yrrtom','magenta','378TOwJVS','Auto','blue','11826GJdkyw','567452QdWUAB','say','4982121EsVIYJ','left','190Dhhdgk','24824QsnnFT','red','1575tgGidB','585567RflqSJ','Wily\x20Kun','console','173766sauVle'];_0x7496=function(){return _0x2e4e7c;};return _0x7496();}function _0xe44b(_0x3b2c8a,_0x3dea14){var _0x74962f=_0x7496();return _0xe44b=function(_0xe44b03,_0x51a119){_0xe44b03=_0xe44b03-0x84;var _0x57a847=_0x74962f[_0xe44b03];return _0x57a847;},_0xe44b(_0x3b2c8a,_0x3dea14);}var _0x457dc8=_0xe44b;(function(_0x2f0b60,_0x5b2b3f){var _0x6db1a1=_0xe44b,_0x1cce04=_0x2f0b60();while(!![]){try{var _0x5a7448=parseInt(_0x6db1a1(0x8c))/0x1+parseInt(_0x6db1a1(0x97))/0x2*(-parseInt(_0x6db1a1(0x94))/0x3)+parseInt(_0x6db1a1(0x84))/0x4+parseInt(_0x6db1a1(0x90))/0x5*(-parseInt(_0x6db1a1(0x8f))/0x6)+-parseInt(_0x6db1a1(0x8b))/0x7*(parseInt(_0x6db1a1(0x89))/0x8)+parseInt(_0x6db1a1(0x86))/0x9+-parseInt(_0x6db1a1(0x88))/0xa*(-parseInt(_0x6db1a1(0x92))/0xb);if(_0x5a7448===_0x5b2b3f)break;else _0x1cce04['push'](_0x1cce04['shift']());}catch(_0x2c5f78){_0x1cce04['push'](_0x1cce04['shift']());}}}(_0x7496,0x71c08),(CFonts['say'](_0x457dc8(0x95),{'font':_0x457dc8(0x91),'gradient':[_0x457dc8(0x96),_0x457dc8(0x93)],'align':_0x457dc8(0x87)}),CFonts[_0x457dc8(0x85)](_0x457dc8(0x8d),{'font':_0x457dc8(0x8e),'gradient':[_0x457dc8(0x8a),_0x457dc8(0x93)],'align':_0x457dc8(0x87)}),start()));