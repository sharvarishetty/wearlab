function analyzeSkinTone() {
    const fileInput = document.getElementById('photo-upload');
    const resultSection = document.getElementById('result-section');
    const analysisResult = document.getElementById('analysis-result');
    const colorSuggestions = document.getElementById('color-suggestions');
  
    if (fileInput.files && fileInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
  
        img.onload = function () {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
  
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const data = imageData.data;
  
          let r = 0, g = 0, b = 0;
          let count = 0;
  
          for (let i = 0; i < data.length; i += 4) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
          }
  
          r = Math.floor(r / count);
          g = Math.floor(g / count);
          b = Math.floor(b / count);
  
          // Simple skin tone analysis
          const skinTone = getSkinTone(r, g, b);
          analysisResult.innerHTML = `Based on your image, your skin tone is categorized as: ${skinTone}`;
  
          const colorPalette = getColorPalette(skinTone);
          displayColorPalette(colorPalette);
  
          resultSection.classList.remove('hidden');
        };
      };
  
      reader.readAsDataURL(fileInput.files[0]);
    }
  }
  
  function getSkinTone(r, g, b) {
    // Simple analysis of the dominant color
    if (r > g && r > b) {
      return "Warm (Spring/Autumn)";
    } else if (b > r && b > g) {
      return "Cool (Summer/Winter)";
    } else {
      return "Neutral";
    }
  }
  
  function getColorPalette(skinTone) {
    if (skinTone === "Warm (Spring/Autumn)") {
      return ['#FFB347', '#FF7F50', '#FFD700', '#F4A300', '#C85D3B']; // Earthy, warm tones
    } else if (skinTone === "Cool (Summer/Winter)") {
      return ['#B0C4DE', '#87CEFA', '#ADD8E6', '#C6E2FF', '#4169E1']; // Cool, pastel, and jewel tones
    } else {
      return ['#D3D3D3', '#A9A9A9', '#808080', '#D3D3D3', '#BEBEBE']; // Neutral tones
    }
  }
  
  function displayColorPalette(colors) {
    const colorSuggestions = document.getElementById('color-suggestions');
    colorSuggestions.innerHTML = ''; // Clear previous suggestions
  
    colors.forEach(color => {
      const swatch = document.createElement('div');
      swatch.style.backgroundColor = color;
      swatch.className = 'color-swatch';
      colorSuggestions.appendChild(swatch);
    });
  }
  