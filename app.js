var vid = document.getElementById("video3");
function getCurTime() {
  console.log("get");

  alert(vid.currentTime);
}
function setCurTime() {
  console.log("set");
  vid.currentTime = 5;
}
