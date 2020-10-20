// 模块化
import string from "./css.js";


const player = {
    id: undefined,
    n: 1,
    interval: 100,
    ui: {
        demo : document.querySelector("#demo"),
        demo2 : document.querySelector("#demo2")

    },
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast'
    },
    init: () => {
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        player.play();
        player.bindEvents()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key] // pause / play / slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id);
            return;
        }
        console.log(player.n + ":" + string.substr(0, player.n));
        player.ui.demo.innerText = string.substr(0, player.n);
        player.ui.demo2.innerHTML = string.substr(0, player.n);
        // 高度：demo.scrollHeight
        player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
    },
    play: () => {
        player.id = setInterval(player.run, player.interval);
    },
    pause: () => {
        window.clearInterval(player.id);
    },
    slow: () => {
        player.pause();
        player.interval = 300;
        player.play();
    },
    normal: () => {
        player.pause();
        player.interval = 100;
        player.play();
    },
    fast: () => {
        player.pause();
        player.interval = 0;
        player.play();
    },
};

player.init()
