export function playTTS(text) {
  if (!('speechSynthesis' in window)) return;
  
  // Cancel any currently playing speech to avoid overlapping
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN'; // Vietnamese voice
  utterance.rate = 0.9;     // Slightly slower for kids
  utterance.pitch = 1.1;    // Slightly higher pitch
  
  window.speechSynthesis.speak(utterance);
}
