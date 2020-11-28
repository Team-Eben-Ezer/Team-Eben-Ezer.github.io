const typed = new Typed('#typeText', {
  strings: [
    'special&#9996;',
    'awesome&#128170;',
    'adorable&#128152;',
    'elegant&#128141;',
    'beautiful&#10024;',
    'wonderful&#127752;',
    'lit&#128293;'
  ],
  typeSpeed: 60,
  shuffle: true,
  backSpeed: 40,
  backDelay: 2000,
  loop: true,
  loopCount: Infinity
});

const scrollUpdated = () => {
  let scrollValue = document.documentElement.scrollTop;
  let windowHeight = window.innerHeight;
  let i = Math.round((scrollValue + 0) / windowHeight) + 1;
  let menuProgressCircle = document.getElementsByClassName('menuProgressCircle');
  if(menuProgressCircle[i - 2]) {
    menuProgressCircle[i - 2].classList.remove('selected');
  }
  if(menuProgressCircle[i]) {
    menuProgressCircle[i].classList.remove('selected');
  }
  menuProgressCircle[i - 1].classList.add('selected');
};