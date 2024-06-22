const startRecordingButton = document.getElementById('startRecording');
const stopRecordingButton = document.getElementById('stopRecording');
const downloadLink = document.getElementById('downloadLink');
let mediaRecorder;
let recordedChunks = [];

startRecordingButton.addEventListener('click', startRecording);
stopRecordingButton.addEventListener('click', stopRecording);

async function startRecording() {
    try {
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
            downloadLink.href = url;
            downloadLink.style.display = 'block';
            downloadLink.download = 'recorded_audio.wav';
        };

        mediaRecorder.start();
        startRecordingButton.disabled = true;
        stopRecordingButton.disabled = false;
    } catch (error) {
        console.error('Error starting recording:', error);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        startRecordingButton.disabled = false;
        stopRecordingButton.disabled = true;
    }
}
