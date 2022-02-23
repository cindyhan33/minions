const string = `
/*
 *今天要送你一个会动的小黄人
 */
  body {
    position: relative;
  }
/*
 *首先，画一个小黄人的身体
 */
  .skin {
    position: absolute;
    left: 50%;
    top: 100px;
    width: 240px;
    height: 400px;
    border: 5px solid black;
    margin-left: -120px;
    border-radius: 115px;
    background: #f9d946;
    overflow: hidden;
  }
/*
 * 然后，画小黄人的头发
 */
.hair {
  position: relative
}
.hair > div {
  width: 130px;
  height: 100px;
  border-top: 8px solid black;
  border-radius: 50%;
  position: absolute;
  top: 90px;
}
.hair .left-hair {
  left: 42%;
}
.hair .right-hair {
  left: 48%;
}
  /*
   *然后画小黄人的眼睛
   */
  .eye {
    border: 5px solid black;
    width: 84px;
    height: 84px;
    position: absolute;
    border-radius: 50%;
    left: 50%;
    top: 50px;
    margin-left: -42px;
    background: white;
  }
  /*
   *画小黄人的左眼睛
   */
  .eye.left {
    transform: translateX(-42px);
  }
  .eye::before {
    content: "";
    display: block;
    width: 34px;
    height: 18px;
    position: absolute;
    left: 50%;
    top: 30px;
    background: black;
    overflow: hidden;
  }
  .eye.left::before {
    margin-left: -74px;
  }
  /*
   *画小黄人的右眼睛
   */
  .eye.right {
    transform: translateX(42px);
  }
  .eye.right::before {
    margin-left: 40px;
  }
  .eye .blackeye {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 18px;
    border-radius: 50%;
    background: #000;
    transform: translateX(17px);
    animation: blackeye 5s ease-in infinite;
  }
  /*
   *现在让小黄人的眼睛动起来
   */
  @keyframes blackeye {
    0%,
    100% {
      transform: translateX(0px);
    }
    25%,
    75% {
      transform: translateX(15px);
    }
    50% {
      transform: translateX(30px);
    }
  }
  .eye .blackeye::after {
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    position: relative;
    border-radius: 50%;
    background: #fff;
    left: 4px;
    top: 3px;
    animation: whiteeye 5s ease-in-out infinite;
  }
  @keyframes whiteeye {
    0%,
    100% {
      transform: translateX(0px);
    }
    25%,
    75% {
      transform: translate3d(15px, 8px, 0);
    }
    50% {
      transform: translate3d(-3px, 10px, 0);
    }
  }
  /*
   *接下来画小黄人的嘴巴
   */
  .mouth {
    border: 5px solid black;
    width: 56px;
    height: 36px;
    position: absolute;
    left: 50%;
    margin-left: -28px;
    top: 170px;
    border-bottom-left-radius: 30px;
    transform: rotate(-30deg);
    background: white;
  }
  .mouth::before {
    content: "";
    display: block;
    width: 66px;
    height: 50px;
    border-bottom: 5px solid black;
    transform: rotate(30deg);
    position: absolute;
    top: -33px;
    left: 2px;
    background: #f9d946;
  }
  /*
   *现在开始画小黄人的背带裤
   */
  .trousers {
    background: #2074a0;
  }
  .trousers.up {
    border: 5px solid #000;
    border-bottom: none;
    width: 160px;
    height: 60px;
    position: absolute;
    left: 50%;
    bottom: 99px;
    margin-left: -80px;
    z-index: 1;
  }
  .trousers.down {
    width: 100%;
    height: 104px;
    position: absolute;
    bottom: 0;
    border-top: 5px solid #000;
  }
  /*
   *画小黄人的背带
   */
  .trousers.belt {
    width: 100px;
    height: 16px;
    position: relative;
    border: 5px solid #000;
    z-index: 2;
  }
  .trousers.belt.left {
    top: 208px;
    left: -28px;
    transform: rotate(45deg);
  }
  .trousers.belt.left::after {
    left: 80px;
  }
  .trousers.belt.right {
    top: 190px;
    left: 161px;
    transform: rotate(-45deg);
  }
  .trousers.belt.right::after {
    left: 4px;
  }
  .trousers.belt::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    background: black;
    border-radius: 50%;
    position: absolute;
  }
  /*
   *最后画小黄人的口袋
   */
  .trousers.pocket {
    width: 60px;
    height: 45px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    bottom: 70px;
    border: 5px solid #000;
    border-radius: 0 0 25px 25px;
    z-index: 5;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .trousers.pocket:hover {
    animation: wave 300ms infinite linear;
  }
  
  /*
   *最终一个小黄人就完成了
   */
`;
const player = {
  ui: {
    demo: document.querySelector("#demo"),
    demo2: document.querySelector("#demo2"),
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  id: undefined,
  time: 50,
  n: 1,
  init: () => {
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.bindEvents();
    player.play();
  },

  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n > string.length) {
      window.clearInterval(player.id);
      return;
    }
    player.ui.demo.innerText = string.substring(0, player.n);
    player.ui.demo2.innerHTML = string.substring(0, player.n);
    player.ui.demo.scrollTop = demo.scrollHeight;
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 50;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
