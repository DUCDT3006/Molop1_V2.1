export function playTTS(text) {
  if (!('speechSynthesis' in window)) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN'; 
  
  const voices = window.speechSynthesis.getVoices();
  // Ưu tiên các giọng nữ tự nhiên, dễ nghe: Microsoft Hoài My (Edge), Google (Chrome), Linh (iOS/Mac)
  const preferredVoices = voices.filter(v => 
    v.lang.includes('vi') && 
    (v.name.includes('HoaiMy') || v.name.includes('Google') || v.name.includes('Linh'))
  );
  
  if (preferredVoices.length > 0) {
    const bestVoice = preferredVoices.find(v => v.name.includes('HoaiMy')) || preferredVoices[0];
    utterance.voice = bestVoice;
  }
  
  // Điều chỉnh giọng cô giáo tiểu học: chậm rãi, ấm áp, truyền cảm
  utterance.rate = 0.75;  // Nói thật chậm để bé dễ nghe
  utterance.pitch = 1.2;  // Tông giọng cao và ấm áp hơn
  
  window.speechSynthesis.speak(utterance);
}

// Pre-load voices (Chrome cần cái này để lấy danh sách giọng)
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    window.speechSynthesis.getVoices();
  };
}
