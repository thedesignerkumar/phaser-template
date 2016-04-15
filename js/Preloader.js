Game.Preloader = function (game) {
    "use strict";
    this.preloadBack = null;
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

Game.Preloader.prototype = {

    preload: function () {
        "use strict";
        
       // setting the preload screen
        this.preloadBack = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBack');
        this.preloadBack.anchor.setTo(0.5, 0.5);
        this.preloadBar = this.add.sprite(this.world.centerX-1, this.world.centerY+0.5, 'preloaderBar');
        this.preloadBar.anchor.setTo(0.5, 0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);
        this.titleText = this.add.sprite(this.world.centerX, this.world.centerY-100, 'titleText');
        this.titleText.anchor.setTo(0.5, 0.5);
        
        // loading the menu items
        this.load.image('menuscreen', 'images/menu.png');
        this.load.bitmapFont('toontime', 'fonts/toontime.png', 'fonts/toontime.fnt');
        
    },

    create: function () {
        "use strict";
        this.preloadBar.cropEnabled = false;
    },

    update: function () {
        "use strict";
        this.ready = true;
        this.state.start('Menu');
    }
}