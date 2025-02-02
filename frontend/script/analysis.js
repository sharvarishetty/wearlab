document.getElementById('analyzeButton').addEventListener('click', function() {
    const fileInput = document.getElementById('imageUpload');
    if (fileInput.files && fileInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                const colorData = getColorData(img);
                const skinTone = analyzeSkinTone(colorData);
                displayResults(skinTone);
            };
            img.src = e.target.result;
            document.getElementById('imagePreview').innerHTML = '<img src="' + img.src + '" alt="Uploaded Image">';
        };

        reader.readAsDataURL(fileInput.files[0]);
    }
});

function getColorData(img) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0, img.width, img.height);
    const imageData = context.getImageData(0, 0, img.width, img.height).data;

    let total = { r: 0, g: 0, b: 0 }, count = 0;
    for (let i = 0; i < imageData.length; i += 4) {
        total.r += imageData[i];
        total.g += imageData[i + 1];
        total.b += imageData[i + 2];
        count++;
    }
    return { r: total.r / count, g: total.g / count, b: total.b / count };
}

function analyzeSkinTone({ r, g, b }) {
    const avg = (r + g + b) / 3;
    if (avg < 85) return 'Dark';
    else if (avg < 170) return 'Medium';
    else return 'Light';
}

function displayResults(skinTone) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = `Analysis Complete: Your skin tone is categorized as ${skinTone}.`;
}
