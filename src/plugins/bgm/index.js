const $audio = document.getElementById('audio');
sessionStorage.bgmusic = 'play';

if (sessionStorage.bgmusic === 'pause') {
  playBgMusic(false);
} else {
  playBgMusic(true);
  // ----------处理自动播放------------
  // --创建页面监听，等待微信端页面加载完毕 触发音频播放
  document.addEventListener('DOMContentLoaded', () => {
    const audioAutoPlay = () => {
      playBgMusic(true);
      document.addEventListener(
        'WeixinJSBridgeReady',
        () => {
          playBgMusic(true);
        },
        false
      );
    };
    audioAutoPlay();
  });
  // --创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
  const audioAutoPlay = () => {
    playBgMusic(true);
    document.removeEventListener('touchstart', audioAutoPlay);
  };
  document.addEventListener('touchstart', audioAutoPlay);
}

// ----------处理页面激活------------
const hiddenProperty =
  'hidden' in document
    ? 'hidden'
    : 'webkitHidden' in document ? 'webkitHidden' : 'mozHidden' in document ? 'mozHidden' : null;
const visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
const onVisibilityChange = () => {
  if (!document[hiddenProperty]) {
    if (!sessionStorage.bgmusic || sessionStorage.bgmusic === 'play') {
      $audio.play();
    }
  } else {
    $audio.pause();
  }
};
document.addEventListener(visibilityChangeEvent, onVisibilityChange);

// ---------背景音乐开关----------
function triggerBgMusic() {
  if (!sessionStorage.bgmusic || sessionStorage.bgmusic === 'play') {
    playBgMusic(false);
  } else {
    playBgMusic(true);
  }
}

// ---------音乐播放和暂停----------
function playBgMusic(val) {
  const $bgBtn = document.querySelector('.misc-icon');

  if (val) {
    $audio.play();
    sessionStorage.bgmusic = 'play';
    $bgBtn.classList.remove('paused');
    $bgBtn.classList.add('running');
  } else {
    $audio.pause();
    sessionStorage.bgmusic = 'pause';
    $bgBtn.classList.remove('running');
    $bgBtn.classList.add('paused');
  }
}

window.BgMusic = {
  triggerBgMusic,
  playBgMusic,
};
