function scroll(){
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  if(document.body.scrollTop+h+1000 > document.body.scrollHeight){
    document.body.style.height = document.body.scrollHeight + 500 + "px";
  }
}
