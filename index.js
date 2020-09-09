const video = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    }
  } catch (error) {
    console.error('Error : ', error);
  }
}

button.addEventListener('click', async () => {
  button.disableb = true;
  await video.requestPictureInPicture();
  button.disableb = false;
});

selectMediaStream();