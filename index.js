navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((localMediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = localMediaStream;
  })
  .catch((error) => {
    console.log("Rejected!", error);
  });

function onYes() {
  alert("Nice job, keep going.");
}

function onNo() {
  alert("Keep going, you got this.");
}
