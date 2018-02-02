var boot={
  preload: function() {
    game.load.image("loader", "assets/loader1.jpg");  
  },

  create: function() {
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
      game.world.setBounds(0, 0, 2700, 2000);
      game.scale.refresh();
      var loader = game.add.sprite(0, 0, 'loader');
      loader.fixedToCamera = true;
      loader.alpha = 0;
      game.add.tween(loader).to({ alpha: 1 }, 800, null, true, 0, -1, true);
      game.state.start("preload");
  }


}

var preload={
    preload: function(){
        game.load.image ("loader", "assets/loader1.png");
        game.load.image ("menubg", "assets/menubg.jpg");
        game.load.image ("menubglight", "assets/menubglight.png");
        game.load.image ("losingScreen", "assets/losingscreen.png");
        game.load.spritesheet('button', 'assets/button_sprite_sheet.png', 200,100);


        game.load.image('cellphone', 'assets/cellphone.png');
        game.load.spritesheet ("cellbutton", "assets/send_button.png",112,121);
        game.load.spritesheet ("tutorial", "assets/tutorial.png",549,327); 

        game.load.spritesheet ("turbo", "assets/propulsor.png",123,125);
        game.load.audio("turboAudio", "assets/music/PropulsorA.ogg");
        game.load.audio("air", "assets/music/65620__otherthings__inhale-10115a.ogg");
        game.load.audio("siren", "assets/music/381382__coltonmanz__alarm.ogg");
        game.load.audio("explosion", "assets/music/347317__newagesoup__fun-explosion04.ogg");
        game.load.audio("menusong", "assets/music/CancionFinal-rewtinos.ogg");
        game.load.audio("spacesong", "assets/music/SzymonMatuszewski-SpaceChase.ogg");
        game.load.audio("friendsong", "assets/music/Catsong.ogg");
        game.load.audio("familysong", "assets/music/CancionMelancolica-rewtinos.ogg");

        game.load.image ("meterfull", "assets/full.png");
        game.load.image ("meterempty", "assets/empty.png");
        game.load.image ("background", "assets/bg.jpg");
        game.load.spritesheet ("station", "assets/station.png",809,471);

        game.load.audio("absorbAudio", "assets/music/absorb.ogg");
        game.load.audio("sonarAudio", "assets/music/sonar.ogg");
        game.load.audio("vacAudio", "assets/music/vac.ogg");

        game.load.image ("om", "assets/oxigenmeter.png");
        game.load.image ("omi", "assets/oxigenmeterindicator.png");


        game.load.image ("redoverlay", "assets/redoverlay.png");
        game.load.image ("blackoverlay", "assets/blackoverlay.png");
        game.load.image ("L1", "assets/G1.png");
        game.load.image ("L2", "assets/G1B.png");
        game.load.image ("L3", "assets/G2.png");
        game.load.image ("L4", "assets/G2B.png");
        game.load.image ("M1", "assets/M1.png");
        game.load.image ("M2", "assets/M2.png");
        game.load.image ("M3", "assets/M1B.png");
        game.load.image ("M4", "assets/M2B.png");
        game.load.image ("C1", "assets/C1.png");
        game.load.image ("C2", "assets/C1B.png");
        game.load.image ("bonus", "assets/bonus.png");
        game.load.image ("helper", "assets/helper.png");

        game.load.spritesheet ("sonar", "assets/sonar.png",40,78);
        game.load.spritesheet ("vac", "assets/sonar2.png",50,134);

        game.load.spritesheet("astro","assets/astro.png",300,219);


        /** SMS screen begin **/
        game.load.audio("chat", "assets/music/chat.ogg");
        
        game.load.image("astro_selfie", "assets/astro_pic.png");
        game.load.image("family_selfie", "assets/family_selfie.PNG");
        game.load.image("av_astro", "assets/av_astro.png");
        game.load.image("av_wife", "assets/av_wife.png");
        game.load.image("msg_bubble", "assets/bubble.png");
        game.load.spritesheet("msg_send", "assets/send_button.png", 112, 121);
        game.load.spritesheet("gif_1", "assets/gifs/GIF01.png", 244, 134);
        game.load.spritesheet("gif_5", "assets/gifs/GIF05.png", 408, 220);
        game.load.spritesheet("gif_6", "assets/gifs/GIF06.png", 330, 314);
        game.load.spritesheet("gif_7", "assets/gifs/GIF07.png", 320, 190);
        game.load.spritesheet("gif_8", "assets/gifs/GIF08.png", 314, 314);
        /** SMS screen end **/

        /**Endings**/
      game.load.image("good_ending", "assets/good_ending.png");
      game.load.image("bad_ending", "assets/bad_ending.png");
       
    },
    create: function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.world.setBounds(0, 0, 2700, 2000);
        game.scale.refresh();
        var loader = game.add.sprite(0,0, 'loader');
        loader.fixedToCamera = true;
        loader.alpha = 0;
        game.add.tween(loader).to({ alpha: 1 }, 800, null, true, 0, -1, true);
        music = [game.add.audio('menusong'),
          game.add.audio('spacesong'),
          game.add.audio('friendsong'),
          game.add.audio('familysong'),
          game.add.audio('turboAudio'),
          game.add.audio('air'),
          game.add.audio('siren'),
          game.add.audio('explosion'),
          game.add.audio("absorbAudio"),
          game.add.audio("sonarAudio"),
          game.add.audio("vacAudio"),
          game.add.audio("chat")
        ];
        
        game.sound.setDecodedCallback(music, function(){
          game.state.start("menu");
        }, this);
        
    }
};


var mainmenu = {
    create: function(){
      // game.sound.play('menusong');
      music[0].play();
      game.add.image(0,0,"menubg");
      var light = game.add.sprite(0,0,"menubglight");
      light.alpha = 0;
      game.add.tween(light).to({alpha:1 },800,null,true,0,-1,true);
      button1 = game.add.button(680, 510, 'button', function(){
        // game.state.start("gamestate");
        showCell();
      }, this, 2, 0, 1);
      var flashy_button = game.add.sprite(680, 510, 'button');
      flashy_button.animations.add('flash', [0,1]);
      flashy_button.animations.play('flash', 10, true);
      // button1.fixedToCamera = true;
    }
}

function showCell(){
  var cell = game.add.sprite(0,-640,"cellphone");
  var tutorial = game.add.sprite(164,205,"tutorial");
  var tutorial_audio = game.add.audio("chat");
  cell.addChild(tutorial);
  var step = 0;
  var maxSteps = 4;
  var cellbutton = game.add.button(750,312,'cellbutton',function(){
    if (step<maxSteps-1){
      step++;
      tutorial_audio.play();
      tutorial.frame = step;
    } else {
      tutorial_audio.play();
      game.state.start("gamestate");
    }
  },this, 0,1,1);
  cell.addChild(cellbutton);
  game.add.tween(cell).to({y:0},900,Phaser.Easing.Elastic.Out).start();
  // {alpha:0.3 },200,null,true,0,-1,true
}

