

var gamestate = {
    create: function(){
        game_over = false;
        game.add.image(0,0,"background");
        game.sound.stopAll();
        music[1].play();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        station = game.add.sprite(game.world.centerX,game.world.centerY,"station");
        station.anchor.set(0.5);
        game.physics.enable(station, Phaser.Physics.ARCADE);
        station.body.setCircle(50,310,200);
        asteroids = game.add.group();
        sonar = game.add.group();
        vac = game.add.group();

        hasBonus = false;
        helper = null;

        turboAudio = game.add.audio('turboAudio');
        siren = game.add.audio('siren');
        absorbAudio = game.add.audio('absorbAudio');
        sonarAudio = game.add.audio('sonarAudio');
        vacAudio = game.add.audio('vacAudio');
        explosion = game.add.audio('explosion');
        air = game.add.audio('air');
        //asteroid meter
        score = 0;
        maxScore = levels[currentLevel].maxScore;
        meterStep = 300/maxScore;
        meter = game.add.image(800,320,"meterempty");
        meter.fixedToCamera = true;
        meter.fullSprite = game.add.image(800,320,"meterfull");
        meter.fullSprite.fixedToCamera = true;
        mask = game.add.graphics(800,620);
        mask.fixedToCamera = true;
        mask.beginFill(0xffffff);
        mask.drawRect(0,0,69, 300);
        meter.fullSprite.mask = mask;
            //  Our player ship
        oxigenMax = levels[currentLevel].oxigen;
        oxigen = oxigenMax;
        oxigenmeter = game.add.image(130,630,"om");
        oxigenmeter.fixedToCamera = true;
        oxigenmeter.anchor.set(0.5,1);
        indicator = game.add.image(0,-65,"omi");
        indicator.anchor.set(0.5,0.95);
        oxigenmeter.addChild(indicator);
        //player
        astro = game.add.sprite(game.world.centerX+250, game.world.centerY, 'astro');
        astro.anchor.set(0.5,0.75);
        turbo = game.add.sprite(-255,-78,'turbo');
        astro.addChild(turbo);
        turbo.animations.add('run');
        turbo.animations.play('run', 30, true);
        turbo.visible = false;

        game.physics.enable(astro, Phaser.Physics.ARCADE);
        astro.rotation = Math.PI/6;
        // astro.body.drag.set(50);
        astro.body.setCircle(60,125,100);
        astro.body.maxVelocity.set(200);
        astro.body.collideWorldBounds=true;
        astro.fireTime = 0;
        //Asteroids
        for (var i=0; i<game.rnd.integerInRange(4,8);i++){
            var x = game.rnd.integerInRange(0,2700);
            var y = game.rnd.integerInRange(0,2000);
            addAsteroid(x,y,"big");
        }

        //  Game input
        line = new Phaser.Line();

        redOverlay = game.add.image(0,0,"redoverlay");
        redOverlay.fixedToCamera = true;
        redOverlay.visible = false;
        redOverlay.alpha = 0;
        redOverlay.tween = game.add.tween(redOverlay).to({alpha:0.3 },200,null,true,0,-1,true);
        redOverlay.tween.pause();

        blackOverlay = game.add.image(0,0,"blackoverlay");
        blackOverlay.fixedToCamera = true;
        blackOverlay.alpha = 1;
        game.add.tween(blackOverlay).to({alpha:0 },500,null,true);

        // addHelper();
        // cursors = game.input.keyboard.createCursorKeys();
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.W ]);
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.Q ]);
        game.input.keyboard.addKeyCapture([ Phaser.Keyboard.E ]);
        game.camera.follow(astro);
    },
    update: function(){
        // astro.frame = 0;
        setOxigen();
        game.physics.arcade.collide(asteroids, asteroids);
        // game.physics.arcade.collide(astro, asteroids);
        game.physics.arcade.overlap(sonar, asteroids, burnAsteroid);
        game.physics.arcade.overlap(vac, asteroids, absorbAsteroid);
        station.frame = 0;
        game.physics.arcade.overlap(astro, station, returnHome);
        astro.rotation = game.physics.arcade.angleToPointer(astro);
        if (helper){
            // console.log("Checking helper");
            
            helper.rotation = game.physics.arcade.angleBetween(helper, astro);
            game.physics.arcade.velocityFromRotation(helper.rotation, 250, helper.body.acceleration);
            fireSonar(helper);
            if (game.physics.arcade.overlap(helper, asteroids,null, helperHelp)){
                helper.destroy();
                helper = null;
                hasBonus = false;
            }
        }

        if (game.input.keyboard.isDown(Phaser.Keyboard.W)) {
            if (!turboAudio.isPlaying){
                turboAudio.play("",0,1,true);
            }
            game.physics.arcade.accelerationFromRotation(astro.rotation, 200, astro.body.acceleration);
            turbo.visible = true;
        } else {
            turboAudio.stop();
            turbo.visible = false;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.Q)) {
            fireSonar(astro);
            astro.frame = 1;
            game.physics.arcade.accelerationFromRotation(Math.PI-astro.rotation, 150, astro.body.acceleration);
        } else if (game.input.keyboard.isDown(Phaser.Keyboard.E)) {
            fireVac();
            game.physics.arcade.accelerationFromRotation(Math.PI-astro.rotation, 150, astro.body.acceleration);
            astro.frame = 1;
        } else {
            astro.frame = 0;
        }
    },
    render: function(){
        // if (helper){
        //     game.debug.body(helper)
        // }
        // game.debug.body(station);
        // game.debug.body(astro);
        // game.debug.geom(line);
        // vac.forEach(function(child){
        //     game.debug.body(child);
        // });
        // sonar.forEach(function(child){
        //     game.debug.body(child);
        // });
        // asteroids.forEach(function(child){
        //     game.debug.body(child);
        // });
        // game.debug.cameraInfo(game.camera, 32, 32);
    }
}

function setOxigen(){
    console.log(currentLevel);
    if (oxigen==0){
        return;
    }
    oxigen--;
    if (oxigen>0){
        indicator.angle = (120/oxigenMax)*oxigen-60;
        if (oxigen<oxigenMax/4){
            if (!siren.isPlaying){
                siren.play("",0,1,true);
            }
            redOverlay.visible = true;
            redOverlay.tween.resume();
        }
    } else {
        var tween = game.add.tween(blackOverlay).to({alpha:1},500);
        tween.onComplete.add(function(){
            if (currentLevel == 2){
                badEnding();
            } else{
                game.sound.stopAll();
                showLosingScreen();
            }
        });
        tween.start();
    }
}

function showLosingScreen(){
    // music[0].play();
    music[3].play();
    var ls = game.add.image(0,0,"losingScreen");
    ls.fixedToCamera = true;
    ls.alpha = 0;
    game.add.tween(ls).to({alpha:1 },500,null,true);
    b = game.add.button(680, 510, 'button', function(){
        game.state.start("gamestate");
    }, this, 2, 0, 1);
    b.fixedToCamera = true;
}

function badEnding(){
    currentLevel++;
    game_over = true;
    var ls = game.add.image(0, 0, "losingScreen");
    ls.fixedToCamera = true;
    ls.alpha = 0;
    var tween = game.add.tween(ls).to({ alpha: 1 }, 2000, null, true);
    tween.onComplete.add(function () {
        returnHome();
    });
}

function fireSonar(who){
    if (game.time.now > who.fireTime){
        sonarAudio.play();
        sonar.forEachDead(function(child){
            sonar.remove(child,true);
        });
        line.fromAngle(who.x,who.y,who.rotation, who.width/2 );
        var wave = sonar.create(line.end.x,line.end.y ,"sonar");
        wave.anchor.set(0.5);
        wave.animations.add('run');
        wave.animations.play('run', 15, true);
        game.physics.enable(wave, Phaser.Physics.ARCADE);
        wave.body.setCircle(30,0,10);
        wave.rotation = who.rotation;
        game.add.tween(wave.scale).to({x: 3.0, y: 3.0}, 2000, Phaser.Easing.Linear.None, true);
        game.add.tween(wave).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
        wave.lifespan = 2000;
        game.physics.arcade.velocityFromRotation(wave.rotation, 200, wave.body.acceleration);
        who.fireTime = game.time.now + 250;
    }
    
}

function fireVac(){
    if (game.time.now > astro.fireTime){
        vacAudio.play();
        vac.forEachDead(function(child){
            vac.remove(child,true);
        });
        line.fromAngle(astro.x,astro.y,astro.rotation, astro.width/2 );
        var wave = vac.create(line.end.x,line.end.y ,"vac");
        wave.anchor.set(0.5);
        wave.animations.add('run');
        wave.animations.play('run', 30, true);
        game.physics.enable(wave, Phaser.Physics.ARCADE);
        wave.body.setCircle(30,0,30);
        wave.rotation = astro.rotation;
        wave.lifespan = 2000;
        game.add.tween(wave).to({alpha: 0}, 2000, Phaser.Easing.Linear.None, true);
        game.physics.arcade.velocityFromRotation(wave.rotation, 200, wave.body.acceleration);
        astro.fireTime = game.time.now + 250;
    }
    
}

var asteroidsMeta = {
    big: ["L1","L2","L3","L4"],
    medium: ["M1","M2","M3","M4"],
    small: ["C1","C2"],
}

function addAsteroid(x,y,size,velocityFromRotation){
    var spriteRnd = game.rnd.integerInRange(0,asteroidsMeta[size].length-1);
    var sprite = asteroidsMeta[size][spriteRnd];
    if (size == "small" && !hasBonus){
        if (game.rnd.integerInRange(0,100)<10){
            sprite = "bonus";
            hasBonus = true;
        }
    }
    var asteroid = asteroids.create(x,y,sprite);
    asteroid.spriteName = sprite;
    game.physics.enable(asteroid, Phaser.Physics.ARCADE);
    asteroid.anchor.set(0.5);
    asteroid.sizeMeta = size;
    if (size == "big"){
        asteroid.body.setCircle(50, 25,25);
    } else if (size == "medium"){
        asteroid.body.setCircle(30, 15,15);
    } else {
        asteroid.body.setCircle(15, 10,10);
    }
    
    asteroid.body.bounce.set(1);
    asteroid.body.collideWorldBounds=true;
    if (!velocityFromRotation){
        asteroid.body.angularVelocity = 50;
    } else {
        game.physics.arcade.velocityFromRotation(velocityFromRotation, 50, asteroid.body.acceleration);
    }
    
    // asteroid.tint = 0xff6060;
    // game.add.tween(asteroid).to({tint: 0xff0000}, 2000, Phaser.Easing.Linear.None, true);
}

function burnAsteroid(wave,asteroid){
    if (asteroid.sizeMeta == "small"){
        return;
    }
    if (!asteroid.burnLevel){
        asteroid.burnLevel=0;
    }
    asteroid.burnLevel+=1;

    // asteroid.tint = 0xff0000;
    asteroid.tint = lerpColor("#ffffff","#ff0000",asteroid.burnLevel/100);
    if (asteroid.burnLevel == 100){
        explodeAsteroid(asteroid);
    }
}

function helperHelp(h,asteroid){
    if (asteroid.sizeMeta == "small"){
        return false;
    } 
    music[2].stop();
    // music[1].play();
    explodeAsteroid(asteroid);
    return true;
}

function explodeAsteroid(asteroid){
    game.camera.shake(0.02, 200);
    explosion.play();
    var center = [asteroid.x,asteroid.y];
    var length = asteroid.width/2;
    asteroids.remove(asteroid);
    var children = [
        [center[0]+25,center[1]+25],
        [center[0]+25,center[1]-25],
        [center[0]-25,center[1]-25],
        [center[0]-25,center[1]+25],
    ];
    var size = asteroid.sizeMeta == "big" ? "medium" : "small";
    for (var i = 0; i<game.rnd.integerInRange(4,6); i++){
        // console.log(center);
        // console.log(rotation);
        // console.log(line.end);
        var rotation = game.rnd.integerInRange(0,12)*Math.PI/12;
        var x = center[0]-25 + game.rnd.integerInRange(0,50);
        var y = center[1]-25 + game.rnd.integerInRange(0,50);
        addAsteroid(x,y,size,rotation);
        // createAsteroidWithAngle(children[i][0],children[i][1],rotation);
    }
}

function absorbAsteroid(wave,asteroid){
    if (asteroid.sizeMeta != "small"){
        return;
    }
    absorbAudio.play();
    if (asteroid.spriteName == "bonus"){
        addHelper();
    }
    asteroids.remove(asteroid);
    if (score<maxScore){
        mask.cameraOffset.y -=meterStep;
    }
    score++;
}

function addHelper(){
    // music[1].stop();
    music[2].play();
    helper = game.add.sprite(astro.x-50, astro.y,"helper");
    game.physics.enable(helper, Phaser.Physics.ARCADE);
    helper.fireTime = 0;
    helper.body.maxVelocity.set(250);
    // astro.addChild(helper);
    helper.anchor.set(0.5);
    helper.body.setCircle(40);
    // helper.body.angularVelocity = 50;
}

function returnHome(){
    station.frame = 1;
    oxigen = oxigenMax;
    redOverlay.visible = false;
    siren.stop();
    if (!air.isPlaying){
        air.play();
    }
    redOverlay.tween.pause();
    if (score >= maxScore || game_over){
        var tween = game.add.tween(blackOverlay).to({alpha:1},500);
        tween.onComplete.add(function(){
            game.state.start("messenger");
        });
        tween.start();
        
    }
}

// function createAsteroidWithAngle(x,y,rotation){
//     var asteroid = asteroids.create(x,y,"M1");
//     game.physics.enable(asteroid, Phaser.Physics.ARCADE);
//     asteroid.anchor.set(0.5);
//     asteroid.body.setCircle(20);
//     asteroid.body.bounce.set(1);
//     game.physics.arcade.velocityFromRotation(rotation, 10, asteroid.body.acceleration);
// }

var stageSize = {w:900,h:640};
var game = new Phaser.Game(stageSize.w, stageSize.h, Phaser.CANVAS, "game");

game.state.add("boot", boot);
game.state.add("preload", preload);
game.state.add("menu", mainmenu);
game.state.add("gamestate", gamestate);
game.state.add("messenger", messenger);
game.state.start("boot");



