export function playTTS(text) {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN'; 
  
  const voices = window.speechSynthesis.getVoices();
  const viVoices = voices.filter(v => v.lang.toLowerCase().includes('vi'));
  
  // Try to find a female/teacher-like voice
  let bestVoice = viVoices.find(v => 
    v.name.toLowerCase().includes('hoaimy') || 
    v.name.toLowerCase().includes('linh') || 
    v.name.toLowerCase().includes('google') ||
    v.name.toLowerCase().includes('female') ||
    v.name.toLowerCase().includes('vic') // Android female voice
  );
  
  if (!bestVoice && viVoices.length > 0) {
    bestVoice = viVoices[0];
  }
  
  if (bestVoice) {
    utterance.voice = bestVoice;
  }
  
  utterance.rate = 0.65;  // Rất chậm
  utterance.pitch = 1.3;  // Ấm, cao
  
  window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
