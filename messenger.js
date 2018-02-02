var currentLevel = 0;

var levels = [
    {
        maxScore: 25,
        oxigen: 2500,
        transmissions:
            [
                {
                    "type": "txt",
                    "msg": "🌝💞🌎",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "🚀💏😪",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😥😘",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😏🌠🎆",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😅😍👅",
                    "sender": "wife"
                },
                {
                    "type": "gif",
                    "msg": "gif_1",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "❤️",
                    "sender": "wife"
                },
            ]
    },
    {   
        maxScore:50,
        oxigen:2500,
        transmissions:
            [
                {
                    "type": "txt",
                    "msg": "‼️‼️‼️",
                    "sender": "astro"
                },
                {
                    "type": "img",
                    "msg": "astro_selfie",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😋😍",
                    "sender": "wife"
                },
                {
                    "type": "img",
                    "msg": "family_selfie",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😍💞👏",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😼😏😉",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😖😳",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😮😮😮",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "🙈🙉",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "👨‍👩‍👧",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "❗❗❗",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😰😤",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "💣💣💔",
                    "sender": "astro"
                },
        ]
    },
    {   
        maxScore:50,
        oxigen:2500,
        transmissions:
            [
                {
                    "type": "txt",
                    "msg": "😰❓",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😥😭😲",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😵😭😭",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😱🙏💞",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😍😏",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "💏",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "🌕💍🎁",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😮😍",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "🚢🌅❓",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "💦👙👀",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "🌊😄",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😳😔",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😥😰😵",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "👨‍👩‍👧",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "🚢🌅❓",
                    "sender": "wife"
                },
                {
                    "type": "gif",
                    "msg": "gif_5",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "💯‼️",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😃😍😘",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "💖",
                    "sender": "astro"
                },
            ]
    },
    {   
        maxScore:50,
        oxigen:1500,
        transmissions:
            [
                {
                    "type": "txt",
                    "msg": "😰❓",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😡",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "🙅😡🙇",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😤😱👿",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "🔌❌‼️",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😶😤🙅",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😱😰😲",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "🙏🙏‼️",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "📞❌‼️",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "🙎🙅",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "👧🐕😓",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "🙎🙅",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "👧🐕🌍",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "❌🚀🌕",
                    "sender": "wife"
                },
                {
                    "type": "gif",
                    "msg": "gif_6",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "😏👻",
                    "sender": "wife"
                },
                {
                    "type": "gif",
                    "msg": "gif_7",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "💔",
                    "sender": "astro"
                },
                {
                    "type": "txt",
                    "msg": "🚀",
                    "sender": "wife"
                },
                {
                    "type": "txt",
                    "msg": "😭💔😭",
                    "sender": "astro"
                },
                {
                    "type": "gif",
                    "msg": "gif_8",
                    "sender": "astro"
                },
            ]
    }
];

messenger = {
    create: function () {
        game.add.image(0,0,"menubg");
        game.sound.stopAll();
        music[3].play();
        chat_audio = game.add.audio("chat");
        blackOverlay = game.add.image(0,0,"blackoverlay");
        blackOverlay.fixedToCamera = true;
        blackOverlay.alpha = 1;

        trans_status = "normal";
        trans_current = 0;
        transmissions = levels[currentLevel].transmissions;
        end = false;
        game.add.tween(blackOverlay).to({alpha:0 },900,null,true).onComplete.add(function(){
            phone = game.add.sprite(0, -640, "cellphone");
            var send_button = game.add.button(750, 312, 'msg_send', sendMessage, this, 2, 1, 0);
            phone.addChild(send_button);
            game.add.tween(phone).to({y:0},900,Phaser.Easing.Elastic.Out,true).onComplete.add(function(){
                text_bubble = game.add.sprite(200, 225, 'msg_bubble');
                astro_avatar = game.add.sprite(145, 400, 'av_astro');
                wife_avatar = game.add.sprite(145, 400, 'av_wife');
                astro_avatar.alpha = 0;
                mms = game.add.sprite(200, 225, 'gif_1');
                mms.alpha = 0;
                text = game.add.text(235 , 255, 
                    transmissions[trans_current]["msg"], 
                    { 
                        font: "92px EmojiOne", 
                        fill: '#ffffff', 
                        align: "center",
                        wordWrap: true, 
                        wordWrapWidth: 300 
                    }
                );
                // checkSender();
                // trans_current++;
                sendMessage();
            });
        });
        
    },
    // update: function () {
        
    // },
}

function sendMessage() {
    if (end){
        switch (currentLevel) {
            case 2:
                var ws = game.add.image(0, 0, "good_ending");
                ws.fixedToCamera = true;
                ws.alpha = 0;
                var tween = game.add.tween(ws).to({ alpha: 1 }, 2000, null, true);
                break;

            case 3:
                var ls = game.add.image(0, 0, "bad_ending");
                ls.fixedToCamera = true;
                ls.alpha = 0;
                var tween = game.add.tween(ls).to({ alpha: 1 }, 2000, null, true);
                break;

            default:
                currentLevel++;
                game.state.start("gamestate");
                return;
        }
    }

    checkSender();

    switch (transmissions[trans_current]["type"]) {
        case "img":
            if (mms) {
                mms.destroy();
            }
            text.text = "";
            mms = game.add.button(300, 245, transmissions[trans_current]["msg"], openPic, this);
            mms.scale.setTo(0.32, 0.32);
            break;
        case "gif":
            text.text = "";
            if (mms) {
                mms.destroy();
            }
            mms = game.add.sprite(295, 255, transmissions[trans_current]["msg"]);
            if (mms.width > 300 || mms.height > 250){
                mms.scale.setTo(0.6, 0.6)
            }
            mms_anim = mms.animations.add('anim');
            mms.animations.play('anim', 12, true);
            break;
        default:
            text_bubble.alpha = 1;
            if (mms){
                mms.destroy();
            }
            text.text = transmissions[trans_current]["msg"];
    }

    chat_audio.play();
    if (trans_current < transmissions.length) {
        trans_current++;
    } 
    if (trans_current == transmissions.length){
        end = true;
    }
}


function checkSender() {
    if (transmissions[trans_current]["sender"] == "astro"){
        wife_avatar.alpha = 0;
        astro_avatar.alpha = 1;

    } else {
        astro_avatar.alpha = 0;
        wife_avatar.alpha = 1;
    }
}

function openPic() {
    full_pic = game.add.button(0, 0, transmissions[trans_current-1]["msg"], closePic, this);
}

function closePic() {
    full_pic.destroy();
}