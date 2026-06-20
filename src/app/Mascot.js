/* ====================================
   Molop1 V2.1 - Mascot Astro
   ==================================== */

const messages = [
  'Cố lên nào! 💪',
  'Tuyệt vời lắm! 🌟',
  'Astro tin bạn! 🚀',
  'Hãy tiếp tục nhé! ✨',
  'Giỏi quá đi! 🎉',
  'Bạn là ngôi sao! ⭐',
  'Thật siêu! 🏆',
  'Astro tự hào về bạn! 💖',
];

let mascotEl = null;
let bubbleVisible = false;

export function renderMascot() {
  if (mascotEl && document.body.contains(mascotEl)) return;

  mascotEl = document.createElement('div');
  mascotEl.className = 'mascot';
  mascotEl.innerHTML = `
    <div class="mascot-bubble hidden" id="mascot-bubble">
      ${messages[0]}
    </div>
    <div class="mascot-avatar" id="mascot-avatar">🧑‍🚀</div>
  `;
  document.body.appendChild(mascotEl);

  const avatar = mascotEl.querySelector('#mascot-avatar');
  const bubble = mascotEl.querySelector('#mascot-bubble');

  avatar.addEventListener('click', () => {
    bubbleVisible = !bubbleVisible;
    if (bubbleVisible) {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      bubble.textContent = msg;
      bubble.classList.remove('hidden');
    } else {
      bubble.classList.add('hidden');
    }
  });

  // Auto show message after 5 seconds, then hide after 4 seconds
  setTimeout(() => {
    if (!bubbleVisible) {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      bubble.textContent = msg;
      bubble.classList.remove('hidden');
      bubbleVisible = true;
      setTimeout(() => {
        bubble.classList.add('hidden');
        bubbleVisible = false;
      }, 4000);
    }
  }, 5000);
}

export function showMascotMessage(msg) {
  if (!mascotEl) return;
  const bubble = mascotEl.querySelector('#mascot-bubble');
  if (bubble) {
    bubble.textContent = msg;
    bubble.classList.remove('hidden');
    bubbleVisible = true;
    setTimeout(() => {
      bubble.classList.add('hidden');
      bubbleVisible = false;
    }, 4000);
  }
}
