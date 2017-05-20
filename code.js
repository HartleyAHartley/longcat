window.onscroll = scroll;

function scroll(){
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollTop + h + 1000 > document.body.scrollHeight) {
    document.body.style.height = document.body.scrollHeight + 500 + "px";
  }
}
