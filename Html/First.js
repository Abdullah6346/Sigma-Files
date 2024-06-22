const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const audioElement = document.getElementById('audioElement');

let mediaRecorder;
let recordedChunks = [];

startButton.addEventListener('click', async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = (event) => {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }
  };

  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    audioElement.src = url;
  };

  mediaRecorder.start();
});

stopButton.addEventListener('click', () => {
  if (mediaRecorder.state === 'recording') {
    mediaRecorder.stop();
  }
});
