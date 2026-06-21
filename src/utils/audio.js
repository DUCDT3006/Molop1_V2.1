let cachedVoices = [];

function loadVoices() {
  if (!('speechSynthesis' in window)) return;
  cachedVoices = window.speechSynthesis.getVoices();
}

if ('speechSynthesis' in window) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

export function playTTS(text) {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN'; 
  
  // Try to use cached voices if getVoices() returns empty
  let voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) voices = cachedVoices;
  
  const viVoices = voices.filter(v => v.lang.toLowerCase().includes('vi'));
  
  let bestVoice = viVoices.find(v => 
    v.name.toLowerCase().includes('hoaimy') || 
    v.name.toLowerCase().includes('linh') || 
    v.name.toLowerCase().includes('google') ||
    v.name.toLowerCase().includes('female') ||
    v.name.toLowerCase().includes('vic')
  );
  
  if (!bestVoice && viVoices.length > 0) {
    bestVoice = viVoices[0];
  }
  
  if (bestVoice) {
    utterance.voice = bestVoice;
  } else {
    // Nếu không tìm thấy giọng Tiếng Việt nào trên máy (do chưa cài)
    console.warn("No Vietnamese voice found. The OS might read this in English.");
  }
  
  utterance.rate = 0.8;
  utterance.pitch = 1.2;
  
  window.speechSynthesis.speak(utterance);
}
