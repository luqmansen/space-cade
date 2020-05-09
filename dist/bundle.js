!function(n){var t={};function e(i){if(t[i])return t[i].exports;var s=t[i]={i:i,l:!1,exports:{}};return n[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var s in n)e.d(i,s,function(t){return n[t]}.bind(null,s));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=1)}([function(n,t){n.exports=function(n){function t(n){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",n)}try{"undefined"!=typeof execScript&&"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener?execScript(n):"undefined"!=typeof eval?eval.call(null,n):t("EvalError: No eval function available")}catch(n){t(n)}}},function(n,t,e){e(2),e(4),e(6),e(8),e(10),e(12),e(14),n.exports=e(16)},function(n,t,e){e(0)(e(3))},function(n,t){n.exports="const App = function()\n{\n    'use strict'\n\n    this.VERSION = '0.0.1';\n    this.IS_DEV = true;\n};\n\nApp.prototype.start = function () \n{\n    'use strict'\n    \n\n    // Scenes\n    let scenes = [];\n    scenes.push(Boot);\n    scenes.push(Preload);\n    scenes.push(Menu);\n\n    // Game config\n    const config = {\n        type            : Phaser.AUTO,\n        parent          : 'phaser-app',\n        title           : 'Phaser-Boilerplate', // CHANGE ME\n        url             : 'https://github.com/luqmansen/phaser3-boilerplate', // CHANGE ME\n        width           : 360,\n        height          : 640,\n        scene           : scenes,\n        pixelArt        : true,\n        backgroundColor : '0x000000'\n    }\n\n    // Game app\n    let game = new Phaser.Game(config)\n    \n    // Globals\n    game.IS_DEV = this.IS_DEV;\n    game.VERSION = this.VERSION;\n\n    game.URL = '';\n\n    game.CONFIG = {\n        width : config.width,\n        height : config.height,\n        centerX : Math.round(0.5 * config.width),\n        centerY : Math.round(0.5 * config.height),\n        tile : 32\n    }\n\n    // Sound\n    game.sound_on = true;\n\n\n};"},function(n,t,e){e(0)(e(5))},function(n,t){n.exports="\nfunction resizeApp() {\n    // Width-height-ratio of game resolution\n    // Replace 360 with your game width, and replace 640 with your game height\n    let game_ratio = 360 / 640;\n\t\n    // Make div full height of browser and keep the ratio of game resolution\n    let div = document.getElementById('phaser-app');\n    div.style.width = (window.innerHeight * game_ratio) + 'px';\n    div.style.height = window.innerHeight + 'px';\n\t\n    // Check if device DPI messes up the width-height-ratio\n    let canvas\t= document.getElementsByTagName('canvas')[0];\n\t\n    let dpi_w\t= parseInt(div.style.width) / canvas.width;\n    let dpi_h\t= parseInt(div.style.height) / canvas.height;\t\t\n\t\n    let height\t= window.innerHeight * (dpi_w / dpi_h);\n    let width\t= height * game_ratio;\n\t\n    // Scale canvas\t\n    canvas.style.width\t= width + 'px';\n    canvas.style.height\t= height + 'px';\n}\n\nfunction runApp() {\n    \n    'use strict';\n\n    // Init phaser\n    let app = new App();\n    app.start();\n\n    // scale to device\n    window.addEventListener('resize', resizeApp);\n    resizeApp();\n}\n\nwindow.onload = function () {\n    \n    'use strict'\n\n    try{ \n        eval('let i = 0;')\n        eval('const _dev = true;')\n\n    }catch(e){\n        this.alert(\"This browser not supported\")\n        return false;\n    }\n\n    runApp();\n}"},function(n,t,e){e(0)(e(7))},function(n,t){n.exports=""},function(n,t,e){e(0)(e(9))},function(n,t){n.exports="\n\nclass PhaserText {\n\n    constructor(ctx, x, y, string, style, origin) {\n        this.text = string\n\n        this.style = this.initStyle(style);\n        this.origin = this.initOrigin(origin);\n\n        this._x = x;\n        this._y = y;\n        this._string = string;\n        this._origin = origin;\n        this._ctx = ctx;\n        this._style = style;\n        this._obj = this.createText();\n    }\n\n    initStyle(key){\n        let style = {\n            fontFamily  : 'ClickPixel',\n            fontsize    : 32,\n            color       : '0xFFFFFF',\n            align       : 'center'\n        }\n\n        switch (key.toLowerCase()) {\n\n            case 'title':\n                style.fontsize = 64;\n                break\n            case 'preload':\n                style.fontsize = 48;\n                break\n        }\n        return style\n    }\n\n    initOrigin(origin){\n        if (typeof origin === 'number'){\n            return{\n                x : origin,\n                y : origin\n            }\n        } else if (typeof origin === 'object'){\n            return origin\n        } else {\n            return {\n                x : 0.5,\n                y: 0.5\n            }\n        }\n    }\n\n    createText(){\n        let obj = this._ctx.add.bitmapText(\n            this._x,\n            this._y,\n            this.style.fontFamily,\n            this.text,\n            this.style.fontsize,\n            this.style.align\n        );\n\n        obj.setOrigin(this.origin.x, this.origin.y)\n        return obj;\n    }\n\n    destroy(){\n        this._obj.destroy()\n        this._obj = false\n    }\n\n\n    setText(string) {\n        this.text = string;\n        this._obj.setText(string)\n    }\n\n    setX(x) {\n        this.x = x;\n        this._obj.setX(x);\n    }\n\n    setY(y) {\n        this.y = y;\n        this._obj.setY(y);\n    }\n\n    setOrigin(origin){\n        this.origin = this.initOrigin(origin)\n        this._obj.setOrigin(origin)\n    }\n\n    setDepth(depth){\n        this._obj.setDepth(depth)\n    }\n\n    setScrollFactor(scrollX,scrollY){\n        this._obj.setScrollFactor(scrollX,scrollY)\n    }\n\n    getCenter(){\n        return this._obj.getCenter()\n    }\n    getTopLeft(){\n        return this._obj.getTopLeft()\n    }\n\n    getTopRight(){\n        return this._obj.getTopRight()\n    }\n\n    getBottomLeft(){\n        return this._obj.getBottomLeft()\n    }\n\n    getBottomRight(){\n        return this._obj.getBottomRight()\n    }\n}"},function(n,t,e){e(0)(e(11))},function(n,t){n.exports="class Boot extends Phaser.Scene {\n\n    constructor() {\n        super({key: 'Boot', active: true})\n    }\n\n    init(){\n        this.URL = this.sys.game.URL\n        this.CONFIG = this.sys.game.CONFIG\n    }\n\n    preload(){\n        // Bitmap font for preload scenes\n        this.load.setPath(this.URL + 'assets/fonts')\n        this.load.bitmapFont('ClickPixel', 'ClickPixel.png', 'click.xml')\n    }\n\n    create(){\n        this.scene.start('Preload')\n    }\n}"},function(n,t,e){e(0)(e(13))},function(n,t){n.exports="class Menu extends Phaser.Scene {\n\n    constructor() {\n        super({key:'Menu', active: false})\n    }\n\n    init() {\n        this.CONFIG = this.sys.game.CONFIG;\n    }\n\n    create(){\n        // Background\n        this.createBackground();\n\n        //Game Title\n        this.title = new PhaserText(\n            this,\n            this.CONFIG.centerX,\n            this.CONFIG.centerY * 0.3,\n            'Wandering\\n  Chonk',\n            'title'\n        )\n\n        // Click to play\n        this.text = new PhaserText(\n            this,\n            this.CONFIG.centerX,\n            this.CONFIG.centerY,\n            'click to play',\n            'standard'\n        );\n\n        // Mouse input\n        this.createMouseInput();\n\n        // Keyboard Input\n        this.createKeyboardInput();\n\n    }\n\n    createMouseInput(){\n        this.input.on('pointerup', this.goPlay, this);\n    }\n\n    createKeyboardInput(){\n        function handleKeyUp(e) {\n            switch (e.code) {\n                case 'Enter':\n                    this.goPlay();\n                    break;\n            }\n\n        }\n        this.input.keyboard.on('keyup', handleKeyUp, this);\n    }\n\n    goPlay(){\n        this.scene.start('Play');\n    }\n\n    createBackground() {\n        this.bg = this.add.graphics({x: 0, y:0})\n        this.bg.fillStyle('0xF4CCA1',1)\n        this.bg.fillRect(0,0, this.CONFIG.width,this.CONFIG.height)\n    }\n}"},function(n,t,e){e(0)(e(15))},function(n,t){n.exports="class Play extends Phaser.Scene{\n\n    constructor() {\n        super({key: 'Play', active: false});\n    }\n\n    init() {\n        this.CONFIG = this.sys.game.CONFIG;\n    }\n\n\n    create(){\n\n    }\n}"},function(n,t,e){e(0)(e(17))},function(n,t){n.exports="\nclass Preload extends Phaser.Scene {\n\n    constructor() {\n        super({key: 'Preload', active: false})\n    }\n\n    init(){\n        this.URL = this.sys.game.URL\n        this.CONFIG = this.sys.game.CONFIG\n    }\n\n    preload(){\n        this.createBackground();\n        this.createLoadingBar()\n\n        // Spritesheets\n        this.load.setPath(this.URL + 'assets/img')\n        this.load.spritesheet('spr-cat', 'spr-cat.png', {frameWidth:16, frameHeight:16,endFrame:4, margin: 1, spacing: 2})\n    }\n\n    create(){\n        this.time.addEvent({\n            delay : 100,\n            callback: () => {this.scene.start('Menu');},\n            callbackScope : this\n        });\n    }\n\n    createLoadingBar(){\n        this.title = new Text();\n        //Progress text\n        this.txt_progress = new PhaserText(\n            this,\n            this.CONFIG.centerX,\n            75,\n            'Loading Game',\n            'preload',\n            0.5\n        )\n        //Progress text\n        this.txt_progress = new PhaserText(\n            this,\n            this.CONFIG.centerX,\n            this.CONFIG.centerY - 5,\n            'Loading...',\n            'preload',\n            {x: 0.5, y : 1}\n        )\n        //Progress bar\n        let x= 10\n        let y = this.CONFIG.centerY + 5;\n        this.progress = this.add.graphics({x:x, y:y})\n        this.border = this.add.graphics({x:x, y:y});\n\n        // Progress callback\n        this.load.on('progress', this.onProgress, this )\n    }\n\n    onProgress(value){\n        let w = this.CONFIG.width - 2*this.progress.x;\n        let h = 36;\n\n        this.progress.clear();\n        this.progress.fillStyle('0xFFFFFF', 1)\n        this.progress.fillRect(0,0, w*value, h)\n\n        this.border.clear()\n        this.border.lineStyle(4, '0x4D5699')\n        this.border.strokeRect(0,0, w*value, h);\n\n        this.txt_progress.setText(Math.round(value * 100) + '%')\n        console.log(this.txt_progress.text)\n    }\n\n    createBackground() {\n        this.bg = this.add.graphics({x: 0, y:0})\n        this.bg.fillStyle('0xF5CCA1',1)\n        this.bg.fillRect(0,0, this.CONFIG.width,this.CONFIG.height)\n    }\n}"}]);