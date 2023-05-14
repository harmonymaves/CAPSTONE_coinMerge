function flareHighlight() {
  playSound("success");
  const div = document.getElementById('customerArea');
  const position = div.getBoundingClientRect();
  const highlight = document.createElement('div');
  highlight.style.position = 'absolute';
  highlight.style.top = position.top + 'px';
  highlight.style.left = position.left + 'px';
  highlight.style.width = position.width + 'px';
  highlight.style.height = position.height + 'px';
  highlight.style.boxShadow = '0px 0px 10px 14px rgba(255,255,255,0.5)';
  highlight.style.animation = 'flare 0.8s ease-out';
  div.parentNode.appendChild(highlight);
  fadeOutText(div);
  setTimeout(() => {
    highlight.parentNode.removeChild(highlight);
    customerRequest();
    fadeInText(div);
  }, 800);
}

function fadeOutText(div) {
  let opacity = 1;
  const interval = setInterval(() => {
    opacity -= 0.05;
    div.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(interval);
    }
  }, 30);
}

function fadeInText(div) {
  let opacity = 0;
  const interval = setInterval(() => {
    opacity += 0.05;
    div.style.opacity = opacity;
    if (opacity >= 1) {
      clearInterval(interval);
    }
  }, 30);
}