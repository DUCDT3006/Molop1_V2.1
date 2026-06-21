let currentAudio = null;

export function playTTS(text) {
  // Dừng âm thanh cũ nếu đang phát
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // Chia nhỏ text nếu quá dài (Google TTS giới hạn ~200 ký tự)
  const safeText = encodeURIComponent(text.slice(0, 200));
  
  // Dùng Google Translate TTS API làm mặc định để 100% ra giọng nữ Tiếng Việt chuẩn
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=vi&q=${safeText}`;
  const audio = new Audio(url);
  
  // Làm chậm tốc độ phát audio đi một chút để bé dễ nghe
  audio.playbackRate = 0.85; 
  
  audio.play().catch(e => {
    console.warn("Google TTS bị chặn, dùng tạm bộ đọc của máy...", e);
    fallbackTTS(text);
  });
  
  currentAudio = audio;
}

function fallbackTTS(text) {
  if (!('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.8;
  window.speechSynthesis.speak(utterance);
}
