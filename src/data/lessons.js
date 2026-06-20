/* ====================================
   Molop1 V2.1 - Lesson Data (Week 1)
   PHẦN MỀM NÂNG CAO - Bồi dưỡng HSG
   Chuẩn GDPT 2018 - Thông tư 32/2018
   ==================================== */

export const lessons = [
  /* ===== TUẦN 1 - NGÀY 1 (Thứ Hai) ===== */
  {
    week: 1, day: 1,
    dayName: 'Thứ Hai',
    title: 'Chặng 1: Khởi hành vào Không gian Số',
    theme: 'Âm A, C & Số 1, 2, 3 — Mức nâng cao',
    emoji: '🚀',
    difficulty: 1,
    curriculumRef: 'Toán: Bài 1-3 SGK Kết nối tri thức (Các số 1,2,3). TV: Bài 1 Cánh Diều (Âm a, c)',

    /* --- NÂNG CAO THEO SGK --- */
    basicMath: {
      title: 'Toán nâng cao: Số 1-3',
      instruction: 'Giải các bài toán nâng cao về số 1, 2, 3 nhé!',
      questions: [
        { id: 'm1-1', text: 'Có 3 quả táo 🍎🍎🍎 và 2 quả lê 🍐🍐. Hỏi có tất cả bao nhiêu quả?', answer: 5, options: [4, 5, 6, 3] },
        { id: 'm1-2', text: 'An có 3 viên bi. An cho Bình 1 viên. An còn mấy viên bi?', answer: 2, options: [1, 2, 3, 4] },
        { id: 'm1-3', text: 'Tìm số: 1, 2, ?, 4. Số ? là gì?', answer: 3, options: [2, 3, 4, 5] },
        { id: 'm1-4', text: 'Có 2 bạn, mỗi bạn có 1 cây bút. Hỏi có tất cả bao nhiêu cây bút?', answer: 2, options: [1, 2, 3, 4] },
        { id: 'm1-5', text: 'Số nào cộng với 1 thì bằng 3?', answer: 2, options: [1, 2, 3, 0] },
      ]
    },
    basicVietnamese: {
      title: 'Đọc hiểu nâng cao: Âm A, C',
      instruction: 'Đọc đoạn văn rồi trả lời các câu hỏi suy luận nhé!',
      passage: {
        title: 'Bé và Astro',
        text: 'Bé có một chú rô-bốt nhỏ tên là Astro. Astro thích bay vào vũ trụ rộng lớn. Mỗi ngày, Astro giúp bé học chữ và đếm số. Bé yêu Astro rất nhiều vì Astro rất ngoan.',
        wordCount: 34
      },
      questions: [
        { id: 'v1-1', text: 'Vì sao bé yêu Astro? (Suy luận)', answer: 'Vì Astro rất ngoan', options: ['Vì Astro đẹp', 'Vì Astro rất ngoan', 'Vì Astro bay giỏi', 'Vì Astro to'] },
        { id: 'v1-2', text: 'Astro giúp bé học những gì?', answer: 'Chữ và số', options: ['Vẽ tranh', 'Chữ và số', 'Nấu ăn', 'Hát'] },
        { id: 'v1-3', text: 'Theo em, Astro là bạn tốt hay xấu? Vì sao?', answer: 'Bạn tốt vì giúp bé học', options: ['Bạn xấu vì hay bay', 'Bạn tốt vì giúp bé học', 'Không biết', 'Bạn xấu vì nhỏ'] },
      ]
    },

    /* --- THỰC HÀNH TƯ DUY --- */
    coding: {
      targetWord: 'ca',
      maze: [['c', ' ', ' '], [' ', 'a', ' '], [' ', ' ', '🌀']],
      startPos: [0, 0], goalPos: [2, 2],
      instruction: 'Lập trình cho Astro nhặt chữ c → a → đến đích 🌀 để ghép từ "ca"!'
    },
    sudoku3x3: {
      size: 3, symbols: ['🍎', '🍋', '🍇'],
      initial: [[0, -1, 2], [-1, 2, -1], [2, -1, 1]],
      solution: [[0, 1, 2], [1, 2, 0], [2, 0, 1]]
    },
    sudoku: {
      size: 4, symbols: ['🍎', '🍋', '🍇', '🍊'],
      initial: [[0, -1, 2, -1], [-1, 2, -1, 0], [2, -1, 0, -1], [-1, 0, -1, 2]],
      solution: [[0, 3, 2, 1], [1, 2, 3, 0], [2, 1, 0, 3], [3, 0, 1, 2]]
    },
    sudoku4x4hard: {
      size: 4, symbols: ['🚀', '🌟', '🪐', '🛸'],
      initial: [[-1, -1, 2, -1], [-1, 2, -1, -1], [2, -1, -1, -1], [-1, -1, -1, 2]],
      solution: [[0, 3, 2, 1], [1, 2, 3, 0], [2, 1, 0, 3], [3, 0, 1, 2]]
    },
    memory: [
      { id: 1, type: 'text', val: '1+2', matchId: 2 },
      { id: 2, type: 'text', val: '3', matchId: 1 },
      { id: 3, type: 'text', val: '3-1', matchId: 4 },
      { id: 4, type: 'text', val: '2', matchId: 3 },
      { id: 5, type: 'text', val: 'ca', matchId: 6 },
      { id: 6, type: 'emoji', val: '🎵', matchId: 5 },
      { id: 7, type: 'text', val: 'cá', matchId: 8 },
      { id: 8, type: 'emoji', val: '🐟', matchId: 7 },
    ],
    supermarket: {
      budget: 20,
      instruction: 'Em có 20 xu. Hãy mua đúng 3 món đồ sao cho vừa đủ tiền!',
      items: [
        { id: 's1', name: 'Bút chì', emoji: '✏️', price: 5 },
        { id: 's2', name: 'Tẩy', emoji: '🧹', price: 3 },
        { id: 's3', name: 'Sách', emoji: '📚', price: 10 },
        { id: 's4', name: 'Thước', emoji: '📏', price: 7 },
        { id: 's5', name: 'Kẹo', emoji: '🍬', price: 2 },
      ]
    },
    patterns: [
      { type: 'number', text: 'Tìm số tiếp theo trong dãy:', sequence: [1, 2, 3, '?'], answer: '4', options: ['3', '4', '5', '6'], hint: 'Mỗi số tăng thêm 1' },
      { type: 'shape', text: 'Hình nào tiếp theo?', sequence: ['🔴', '🔵', '🔴', '🔵', '?'], answer: '🔴', options: ['🔴', '🔵', '🟢', '🟡'], hint: 'Đỏ-Xanh lặp lại' },
      { type: 'number', text: 'Điền số còn thiếu:', sequence: [1, '?', 3], answer: '2', options: ['1', '2', '4', '0'], hint: 'Đếm từ 1 đến 3' },
      { type: 'shape', text: 'Tìm hình tiếp theo:', sequence: ['⭐', '⭐', '🌙', '⭐', '⭐', '?'], answer: '🌙', options: ['⭐', '🌙', '☀️'], hint: '2 sao rồi 1 trăng, lặp lại' },
      { type: 'number', text: 'Dãy số: 2, 2, 2, ?. Số tiếp theo là?', sequence: [2, 2, 2, '?'], answer: '2', options: ['1', '2', '3'], hint: 'Tất cả đều giống nhau' },
    ],
    mathPuzzles: [
      { category: 'reverse', text: '? + 1 = 3. Tìm số ?', answer: '2', options: ['1', '2', '3'], explanation: '2 + 1 = 3, vậy ? = 2' },
      { category: 'word', text: 'Có 3 con chim đậu trên cành. Bay đi 1 con. Còn mấy con trên cành?', answer: '2', options: ['1', '2', '3'], explanation: '3 - 1 = 2 con' },
      { category: 'logic', text: 'An có nhiều bi hơn Bình. Bình có 2 viên bi. An có ít nhất mấy viên?', answer: '3', options: ['1', '2', '3'], explanation: 'Nhiều hơn 2 → ít nhất là 3' },
      { category: 'spatial', text: 'Đếm tất cả hình tròn:', image: '⭕⭕⭕', answer: '3', options: ['2', '3', '4'], explanation: 'Có 3 hình tròn' },
      { category: 'balance', text: '🍎 + 🍎 = 🍋🍋🍋🍋. Vậy 1 🍎 bằng mấy 🍋?', image: '🍎+🍎 = 🍋🍋🍋🍋', answer: '2', options: ['1', '2', '3'], explanation: '2 táo = 4 chanh → 1 táo = 2 chanh' },
    ],

    /* --- TOÁN TƯ DUY HSG --- */
    advanced: [
      { id: 'a1-1', text: 'Hình nào khác biệt?', image: '🔴🔴🔵🔴', answer: 'Hình thứ 3', options: ['Hình thứ 1', 'Hình thứ 2', 'Hình thứ 3', 'Hình thứ 4'] },
      { id: 'a1-2', text: 'Con vật nào biết bay?', image: '🐱 🐦 🐶 🐟', answer: '🐦', options: ['🐱', '🐦', '🐶', '🐟'] },
      { id: 'a1-3', text: 'Có 3 khối hộp. Đỏ trên Xanh. Vàng dưới Xanh. Khối nào ở giữa?', answer: 'Khối xanh', options: ['Khối đỏ', 'Khối xanh', 'Khối vàng'] },
      { id: 'a1-4', text: 'Tìm quy luật: 1, 2, 3, ?', answer: '4', options: ['3', '4', '5'] },
      { id: 'a1-5', text: '? + ? = 2. Hai số giống nhau. Tìm ?', answer: '1', options: ['0', '1', '2'] },
    ],
    extraExercises: {
      review: [
        { text: 'Có 2 quả cam, thêm 1 quả. Có tất cả?', answer: '3', options: ['2', '3', '4'] },
        { text: 'Astro giúp bé làm gì?', answer: 'Học chữ và đếm số', options: ['Nấu ăn', 'Học chữ và đếm số', 'Đi chơi'] },
        { text: '3 - 1 = ?', answer: '2', options: ['1', '2', '3'] },
      ],
      practice: [
        { text: 'Tìm số: ?, 2, 3', answer: '1', options: ['0', '1', '2'] },
        { text: '? - 1 = 2. Tìm ?', answer: '3', options: ['2', '3', '4'] },
        { text: 'Hình tiếp theo: 🔴🔵🔴?', answer: '🔵', options: ['🔴', '🔵', '🟢'] },
      ],
      challenge: [
        { text: 'An có 1 quả táo. Bình cho An thêm 2 quả. Cường cho An thêm 1 quả. An có tất cả?', answer: '4', options: ['3', '4', '5'] },
        { text: '🍎+🍎+🍎 = 3. Vậy 🍎 = ?', answer: '1', options: ['1', '2', '3'] },
        { text: 'Xếp: 3, 1, 2 từ bé đến lớn', answer: '1, 2, 3', options: ['3, 2, 1', '1, 2, 3', '2, 1, 3'] },
      ]
    }
  },

  /* ===== TUẦN 1 - NGÀY 2 (Thứ Ba) ===== */
  {
    week: 1, day: 2,
    dayName: 'Thứ Ba',
    title: 'Chặng 2: Hành tinh Chữ cái',
    theme: 'Âm B, thanh huyền & Số 4, 5 — Mức nâng cao',
    emoji: '🪐',
    difficulty: 1,
    curriculumRef: 'Toán: Bài 4-5 SGK (Các số 4,5). TV: Bài 2 Cánh Diều (Âm b, dấu huyền)',
    basicMath: {
      title: 'Toán nâng cao: Số 4-5',
      instruction: 'Giải các bài toán nâng cao về số 4, 5!',
      questions: [
        { id: 'm2-1', text: 'Lan có 4 bông hoa. Mai cho thêm 1 bông. Lan có tất cả?', answer: 5, options: [3, 4, 5, 6] },
        { id: 'm2-2', text: 'Có 5 con cá, 2 con bơi đi. Còn mấy con?', answer: 3, options: [2, 3, 4, 5] },
        { id: 'm2-3', text: 'Tìm số: 3, 4, ?, 6', answer: 5, options: [4, 5, 6, 7] },
        { id: 'm2-4', text: 'Mẹ mua 5 quả trứng, dùng 2 quả. Còn mấy quả?', answer: 3, options: [2, 3, 4, 5] },
        { id: 'm2-5', text: '? + 3 = 5. Tìm ?', answer: 2, options: [1, 2, 3, 4] },
      ]
    },
    basicVietnamese: {
      title: 'Đọc hiểu nâng cao: Âm B, Thanh huyền',
      instruction: 'Đọc kỹ đoạn văn rồi suy luận trả lời nhé!',
      passage: {
        title: 'Bà và Bé',
        text: 'Bà của bé rất hiền. Bà hay kể chuyện cổ tích cho bé nghe. Bé thích nghe chuyện về con cò và con cá. Mỗi tối, bà ôm bé vào lòng và hát ru. Bé ngủ rất ngon.',
        wordCount: 37
      },
      questions: [
        { id: 'v2-1', text: 'Bé ngủ ngon vì sao? (Suy luận)', answer: 'Vì bà hát ru', options: ['Vì bé mệt', 'Vì bà hát ru', 'Vì trời tối', 'Vì bé khóc'] },
        { id: 'v2-2', text: 'Bà làm những gì cho bé? (Kể 2 việc)', answer: 'Kể chuyện và hát ru', options: ['Nấu ăn và tắm', 'Kể chuyện và hát ru', 'Đưa đi học', 'Mua đồ chơi'] },
        { id: 'v2-3', text: 'Từ nào có thanh huyền: bà, bé, bô?', answer: 'bà', options: ['bé', 'bà', 'bô'] },
      ]
    },
    coding: {
      targetWord: 'bà',
      maze: [['b', ' ', ' '], [' ', ' ', 'à'], [' ', ' ', '🌀']],
      startPos: [0, 0], goalPos: [2, 2],
      instruction: 'Lập trình cho Astro nhặt chữ b → à → đến đích 🌀!'
    },
    sudoku3x3: {
      size: 3, symbols: ['🌸', '🌻', '🌺'],
      initial: [[-1, 1, 0], [0, -1, -1], [-1, 0, 2]],
      solution: [[2, 1, 0], [0, 2, 1], [1, 0, 2]]
    },
    sudoku: {
      size: 4, symbols: ['🌸', '🌻', '🌺', '🌷'],
      initial: [[-1, 1, 0, -1], [0, -1, -1, 1], [-1, 0, 1, -1], [1, -1, -1, 0]],
      solution: [[2, 1, 0, 3], [0, 3, 2, 1], [3, 0, 1, 2], [1, 2, 3, 0]]
    },
    sudoku4x4hard: {
      size: 4, symbols: ['🌸', '🌻', '🌺', '🌷'],
      initial: [[-1, -1, 0, -1], [0, -1, -1, -1], [-1, 0, -1, -1], [-1, -1, -1, 0]],
      solution: [[2, 1, 0, 3], [0, 3, 2, 1], [3, 0, 1, 2], [1, 2, 3, 0]]
    },
    memory: [
      { id: 1, type: 'text', val: '5-1', matchId: 2 },
      { id: 2, type: 'text', val: '4', matchId: 1 },
      { id: 3, type: 'text', val: '2+3', matchId: 4 },
      { id: 4, type: 'text', val: '5', matchId: 3 },
      { id: 5, type: 'text', val: 'b', matchId: 6 },
      { id: 6, type: 'emoji', val: '🐝', matchId: 5 },
      { id: 7, type: 'text', val: 'bà', matchId: 8 },
      { id: 8, type: 'emoji', val: '👵', matchId: 7 },
    ],
    supermarket: {
      budget: 30,
      instruction: 'Em có 30 xu. Hãy mua ít nhất 4 món đồ!',
      items: [
        { id: 's1', name: 'Vở ô li', emoji: '📓', price: 8 },
        { id: 's2', name: 'Bút màu', emoji: '🖍️', price: 12 },
        { id: 's3', name: 'Hộp sữa', emoji: '🥛', price: 6 },
        { id: 's4', name: 'Quả chuối', emoji: '🍌', price: 4 },
        { id: 's5', name: 'Bánh quy', emoji: '🍪', price: 5 },
      ]
    },
    patterns: [
      { type: 'number', text: 'Tìm số tiếp theo:', sequence: [2, 4, '?'], answer: '6', options: ['5', '6', '7', '8'], hint: 'Mỗi số tăng thêm 2' },
      { type: 'shape', text: 'Hình nào tiếp theo?', sequence: ['🌸', '🌻', '🌸', '🌻', '?'], answer: '🌸', options: ['🌸', '🌻', '🌺'], hint: 'Hoa hồng - Hướng dương lặp lại' },
      { type: 'number', text: 'Điền số: 5, 4, ?, 2, 1', sequence: [5, 4, '?', 2, 1], answer: '3', options: ['2', '3', '4'], hint: 'Đếm ngược từ 5' },
      { type: 'shape', text: 'Tìm hình:', sequence: ['🔴', '🔴', '🔵', '🔴', '🔴', '🔵', '?', '?'], answer: '🔴🔴', options: ['🔴🔴', '🔵🔵', '🔴🔵'], hint: '2 đỏ rồi 1 xanh, lặp lại' },
      { type: 'number', text: 'Dãy: 1, 3, 5, ?', sequence: [1, 3, 5, '?'], answer: '7', options: ['6', '7', '8'], hint: 'Mỗi số tăng thêm 2 (số lẻ)' },
    ],
    mathPuzzles: [
      { category: 'reverse', text: '? + 2 = 5. Tìm ?', answer: '3', options: ['2', '3', '4'], explanation: '3 + 2 = 5' },
      { category: 'word', text: 'Có 5 bạn xếp hàng. Lan đứng thứ 2 từ đầu. Lan đứng thứ mấy từ cuối?', answer: '4', options: ['3', '4', '5'], explanation: '5 - 2 + 1 = 4' },
      { category: 'balance', text: '🍎 = 🍋🍋. Vậy 🍎🍎 = mấy 🍋?', image: '🍎=🍋🍋  →  🍎🍎=?🍋', answer: '4', options: ['2', '3', '4'], explanation: '1 táo = 2 chanh → 2 táo = 4 chanh' },
      { category: 'spatial', text: 'Đếm tất cả hình vuông:', image: '⬛⬛\n⬛⬛', answer: '5', options: ['4', '5', '6'], explanation: '4 hình nhỏ + 1 hình lớn = 5' },
      { category: 'logic', text: 'An thấp hơn Bình. Bình thấp hơn Cường. Ai cao nhất?', answer: 'Cường', options: ['An', 'Bình', 'Cường'], explanation: 'An < Bình < Cường → Cường cao nhất' },
    ],
    advanced: [
      { id: 'a2-1', text: 'Vật nào khác nhóm?', image: '🍎🍋🌸🍇', answer: '🌸', options: ['🍎', '🍋', '🌸', '🍇'] },
      { id: 'a2-2', text: 'Hình tiếp theo? ⭐🌙⭐🌙❓', answer: '⭐', options: ['⭐', '🌙', '☀️'] },
      { id: 'a2-3', text: 'Con vật nào có 4 chân?', image: '🐟 🐱 🐦 🐍', answer: '🐱', options: ['🐟', '🐱', '🐦', '🐍'] },
      { id: 'a2-4', text: 'An có 4 quả, Bình có nhiều hơn 1. Bình có?', answer: '5', options: ['3', '4', '5'] },
      { id: 'a2-5', text: 'Dãy: 5, 4, 3, ?. Tìm ?', answer: '2', options: ['1', '2', '4'] },
    ],
    extraExercises: {
      review: [
        { text: '4 + 1 = ?', answer: '5', options: ['4', '5', '6'] },
        { text: 'Bà hát ru cho bé lúc nào?', answer: 'Mỗi tối', options: ['Buổi sáng', 'Mỗi tối', 'Buổi trưa'] },
      ],
      practice: [
        { text: '5 - ? = 3. Tìm ?', answer: '2', options: ['1', '2', '3'] },
        { text: 'Dãy: 1, 2, 3, ?, 5', answer: '4', options: ['3', '4', '5'] },
      ],
      challenge: [
        { text: 'Có 5 quả táo chia đều cho 2 đĩa. Đĩa nào có nhiều hơn?', answer: 'Không chia đều được', options: ['Đĩa 1', 'Đĩa 2', 'Không chia đều được'] },
        { text: '🐱+🐱+🐱=3. Vậy 🐱=?', answer: '1', options: ['1', '2', '3'] },
      ]
    }
  },

  /* ===== TUẦN 1 - NGÀY 3 (Thứ Tư) ===== */
  {
    week: 1, day: 3,
    dayName: 'Thứ Tư',
    title: 'Chặng 3: Thiên hà Phép cộng',
    theme: 'Vần ba, cà & Phép cộng PV5 — Mức nâng cao',
    emoji: '🌟',
    difficulty: 2,
    curriculumRef: 'Toán: Phép cộng trong phạm vi 5. TV: Ghép vần đơn (ba, cà)',
    basicMath: {
      title: 'Phép cộng nâng cao PV5',
      instruction: 'Giải các bài toán cộng nâng cao!',
      questions: [
        { id: 'm3-1', text: '? + 3 = 5. Tìm ?', answer: 2, options: [1, 2, 3, 4] },
        { id: 'm3-2', text: 'Mẹ mua 2 quả cam và 3 quả táo. Hỏi tất cả có bao nhiêu quả?', answer: 5, options: [4, 5, 6, 3] },
        { id: 'm3-3', text: '1 + ? = 4. Tìm ?', answer: 3, options: [2, 3, 4, 1] },
        { id: 'm3-4', text: 'Tổ 1 có 2 bạn, Tổ 2 có 3 bạn. Cả hai tổ có mấy bạn?', answer: 5, options: [3, 4, 5, 6] },
        { id: 'm3-5', text: '? + ? = 4 (hai số giống nhau). Tìm ?', answer: 2, options: [1, 2, 3, 4] },
      ]
    },
    basicVietnamese: {
      title: 'Đọc hiểu nâng cao: Vần ba, cà',
      instruction: 'Đọc kỹ và suy luận!',
      passage: {
        title: 'Đi chợ với Bà',
        text: 'Bé đi chợ với bà. Bà mua ba quả cà và hai quả cà chua. Bé thấy có cả bí đỏ nữa nhưng bà không mua. Bà bảo: "Hôm nay chỉ nấu canh cà thôi." Bé rất thích canh cà của bà.',
        wordCount: 40
      },
      questions: [
        { id: 'v3-1', text: 'Bà mua tất cả bao nhiêu quả? (Tính toán)', answer: 'Năm quả', options: ['Ba quả', 'Bốn quả', 'Năm quả', 'Hai quả'] },
        { id: 'v3-2', text: 'Vì sao bà không mua bí đỏ? (Suy luận)', answer: 'Vì bà chỉ nấu canh cà', options: ['Vì bí đắt', 'Vì bà chỉ nấu canh cà', 'Vì bé không thích', 'Vì hết tiền'] },
        { id: 'v3-3', text: 'Ghép vần: b + a = ?', answer: 'ba', options: ['ba', 'bà', 'ca', 'cà'] },
      ]
    },
    coding: {
      targetWord: 'ba',
      maze: [[' ', 'b', ' ', ' '], [' ', ' ', ' ', ' '], [' ', 'a', ' ', ' '], [' ', ' ', ' ', '🌀']],
      startPos: [0, 0], goalPos: [3, 3],
      instruction: 'Mê cung 4×4! Lập trình Astro nhặt b → a → đến 🌀!'
    },
    sudoku3x3: {
      size: 3, symbols: ['🐱', '🐶', '🐰'],
      initial: [[0, -1, -1], [-1, -1, 2], [-1, 1, -1]],
      solution: [[0, 2, 1], [1, 0, 2], [2, 1, 0]]
    },
    sudoku: {
      size: 4, symbols: ['🐱', '🐶', '🐰', '🐻'],
      initial: [[0, -1, -1, 3], [-1, 3, 0, -1], [-1, 0, 3, -1], [3, -1, -1, 0]],
      solution: [[0, 2, 1, 3], [1, 3, 0, 2], [2, 0, 3, 1], [3, 1, 2, 0]]
    },
    sudoku4x4hard: {
      size: 4, symbols: ['🐱', '🐶', '🐰', '🐻'],
      initial: [[-1, -1, -1, 3], [-1, 3, -1, -1], [-1, -1, 3, -1], [3, -1, -1, -1]],
      solution: [[0, 2, 1, 3], [1, 3, 0, 2], [2, 0, 3, 1], [3, 1, 2, 0]]
    },
    memory: [
      { id: 1, type: 'text', val: '2+3', matchId: 2 },
      { id: 2, type: 'emoji', val: '🖐️', matchId: 1 },
      { id: 3, type: 'text', val: '1+1', matchId: 4 },
      { id: 4, type: 'emoji', val: '✌️', matchId: 3 },
      { id: 5, type: 'text', val: 'ba', matchId: 6 },
      { id: 6, type: 'emoji', val: '👨', matchId: 5 },
      { id: 7, type: 'text', val: 'cà', matchId: 8 },
      { id: 8, type: 'emoji', val: '🍆', matchId: 7 },
    ],
    supermarket: {
      budget: 15,
      instruction: 'Em có 15 xu. Mua đúng 3 món rau-quả. Tính tổng!',
      items: [
        { id: 's1', name: 'Cà chua', emoji: '🍅', price: 3 },
        { id: 's2', name: 'Cà rốt', emoji: '🥕', price: 4 },
        { id: 's3', name: 'Quả bí', emoji: '🎃', price: 5 },
        { id: 's4', name: 'Rau xanh', emoji: '🥬', price: 2 },
        { id: 's5', name: 'Quả cam', emoji: '🍊', price: 3 },
      ]
    },
    patterns: [
      { type: 'number', text: 'Tìm số tiếp theo:', sequence: [1, 2, 3, 4, '?'], answer: '5', options: ['4', '5', '6'], hint: 'Đếm từ 1' },
      { type: 'shape', text: 'Hình tiếp theo?', sequence: ['🔴', '🔵', '🟢', '🔴', '🔵', '?'], answer: '🟢', options: ['🔴', '🔵', '🟢'], hint: 'Đỏ-Xanh dương-Xanh lá lặp lại' },
      { type: 'number', text: 'Dãy: 2, 4, ?, 8', sequence: [2, 4, '?', 8], answer: '6', options: ['5', '6', '7'], hint: 'Mỗi số tăng thêm 2' },
      { type: 'shape', text: 'Hình nào tiếp?', sequence: ['🔺', '🔺', '⬛', '🔺', '🔺', '⬛', '?'], answer: '🔺', options: ['🔺', '⬛', '⭕'], hint: '2 tam giác rồi 1 vuông' },
      { type: 'number', text: 'Dãy đặc biệt: 1, 1, 2, 2, 3, ?', sequence: [1, 1, 2, 2, 3, '?'], answer: '3', options: ['2', '3', '4'], hint: 'Mỗi số lặp lại 2 lần' },
    ],
    mathPuzzles: [
      { category: 'reverse', text: '? + ? = 4. Hai số giống nhau. Tìm ?', answer: '2', options: ['1', '2', '3'], explanation: '2 + 2 = 4' },
      { category: 'word', text: 'Bà mua 3 quả cà, thêm 2 quả cà chua. Hỏi bà mua tất cả mấy quả?', answer: '5', options: ['4', '5', '6'], explanation: '3 + 2 = 5' },
      { category: 'spatial', text: 'Đếm hình tam giác:', image: '🔺🔺🔺🔺', answer: '4', options: ['3', '4', '5'], explanation: 'Có 4 hình tam giác' },
      { category: 'balance', text: '🐱 + 🐶 = 5 và 🐱 = 2. Vậy 🐶 = ?', answer: '3', options: ['2', '3', '4'], explanation: '🐱=2 → 2+🐶=5 → 🐶=3' },
      { category: 'logic', text: 'Hôm nay thứ Tư. Hôm qua là thứ mấy?', answer: 'Thứ Ba', options: ['Thứ Hai', 'Thứ Ba', 'Thứ Năm'], explanation: 'Trước thứ Tư là thứ Ba' },
    ],
    advanced: [
      { id: 'a3-1', text: 'Quả nào khác nhóm?', image: '🍎🍋🚀🍇', answer: '🚀', options: ['🍎', '🍋', '🚀', '🍇'] },
      { id: 'a3-2', text: 'Đếm: 🐱🐱🐱 + 🐱🐱 = ?', answer: '5', options: ['4', '5', '6'] },
      { id: 'a3-3', text: 'Hình nào có 4 cạnh?', image: '🔺 ⬛ ⭕', answer: '⬛', options: ['🔺', '⬛', '⭕'] },
      { id: 'a3-4', text: '? + 3 = 5. Tìm ?', answer: '2', options: ['1', '2', '3'] },
      { id: 'a3-5', text: 'Dãy: 5, 3, 1. Quy luật là?', answer: 'Giảm 2', options: ['Tăng 2', 'Giảm 2', 'Giảm 1'] },
    ],
    extraExercises: {
      review: [
        { text: '2 + 2 = ?', answer: '4', options: ['3', '4', '5'] },
        { text: 'Ghép: c + à = ?', answer: 'cà', options: ['ca', 'cà', 'ba'] },
      ],
      practice: [
        { text: '? + 1 = 5', answer: '4', options: ['3', '4', '5'] },
        { text: 'Dãy: 1, 3, 5, ?', answer: '7', options: ['6', '7', '8'] },
      ],
      challenge: [
        { text: '🍎+🍎+🍎+🍎+🍎=5. Vậy 🍎=?', answer: '1', options: ['1', '2', '5'] },
        { text: 'Có 5 bạn xếp thành hàng. Bạn ở giữa đứng thứ mấy?', answer: '3', options: ['2', '3', '4'] },
      ]
    }
  },

  /* ===== TUẦN 1 - NGÀY 4 (Thứ Năm) ===== */
  {
    week: 1, day: 4,
    dayName: 'Thứ Năm',
    title: 'Chặng 4: Trạm không gian Logic',
    theme: 'Đọc hiểu suy luận & Phép trừ PV5 — Mức nâng cao',
    emoji: '🛸',
    difficulty: 2,
    curriculumRef: 'Toán: So sánh số, phép trừ PV5. TV: Đọc hiểu đoạn văn, suy luận',
    basicMath: {
      title: 'Phép trừ & So sánh nâng cao',
      instruction: 'Giải bài toán trừ và so sánh!',
      questions: [
        { id: 'm4-1', text: 'Có 5 con chim, bay đi 3 con. Còn mấy con?', answer: 2, options: [1, 2, 3, 4] },
        { id: 'm4-2', text: '5 - ? = 2. Tìm ?', answer: 3, options: [2, 3, 4, 1] },
        { id: 'm4-3', text: 'An có 4 viên bi, Bình có 3 viên. Ai có nhiều hơn và nhiều hơn mấy viên?', answer: 1, options: [1, 2, 3, 7] },
        { id: 'm4-4', text: 'Mẹ cho bé 5 cái kẹo. Bé ăn 2 cái, cho bạn 1 cái. Còn mấy cái?', answer: 2, options: [1, 2, 3, 4] },
        { id: 'm4-5', text: '? - 2 = 3. Tìm ?', answer: 5, options: [3, 4, 5, 6] },
      ]
    },
    basicVietnamese: {
      title: 'Đọc hiểu suy luận nâng cao',
      instruction: 'Đọc kỹ và suy luận câu trả lời!',
      passage: {
        title: 'Con mèo thông minh',
        text: 'Nhà bé có một con mèo trắng tên Miu. Miu rất thông minh. Khi bé buồn, Miu đến cạnh bé và kêu meo meo. Bé ôm Miu và cười. Mỗi sáng, Miu đánh thức bé dậy bằng cách liếm tay bé.',
        wordCount: 40
      },
      questions: [
        { id: 'v4-1', text: 'Vì sao bé nói Miu thông minh? (Suy luận)', answer: 'Vì Miu biết an ủi bé khi buồn', options: ['Vì Miu đẹp', 'Vì Miu biết an ủi bé khi buồn', 'Vì Miu ăn nhiều', 'Vì Miu ngủ giỏi'] },
        { id: 'v4-2', text: 'Miu đánh thức bé bằng cách nào?', answer: 'Liếm tay bé', options: ['Kêu meo meo', 'Liếm tay bé', 'Nhảy lên giường', 'Cào bé'] },
        { id: 'v4-3', text: 'Theo em, bé có yêu Miu không? Vì sao?', answer: 'Có, vì bé ôm Miu', options: ['Không', 'Có, vì bé ôm Miu', 'Không biết'] },
      ]
    },
    coding: {
      targetWord: 'mèo',
      maze: [['m', ' ', ' '], [' ', 'è', ' '], [' ', 'o', '🌀']],
      startPos: [0, 0], goalPos: [2, 2],
      instruction: 'Ghép từ 3 chữ cái! Astro nhặt m → è → o → đích 🌀!'
    },
    sudoku3x3: {
      size: 3, symbols: ['⭐', '🌙', '☀️'],
      initial: [[-1, 1, -1], [1, -1, 0], [-1, 0, -1]],
      solution: [[0, 1, 2], [1, 2, 0], [2, 0, 1]]
    },
    sudoku: {
      size: 4, symbols: ['⭐', '🌙', '☀️', '🌈'],
      initial: [[-1, 1, -1, 3], [3, -1, 1, -1], [-1, 3, -1, 1], [1, -1, 3, -1]],
      solution: [[0, 1, 2, 3], [3, 2, 1, 0], [2, 3, 0, 1], [1, 0, 3, 2]]
    },
    sudoku4x4hard: {
      size: 4, symbols: ['⭐', '🌙', '☀️', '🌈'],
      initial: [[-1, -1, -1, 3], [3, -1, -1, -1], [-1, -1, -1, 1], [-1, -1, 3, -1]],
      solution: [[0, 1, 2, 3], [3, 2, 1, 0], [2, 3, 0, 1], [1, 0, 3, 2]]
    },
    memory: [
      { id: 1, type: 'text', val: '5-2', matchId: 2 },
      { id: 2, type: 'text', val: '3', matchId: 1 },
      { id: 3, type: 'text', val: '4-1', matchId: 4 },
      { id: 4, type: 'emoji', val: '⭐⭐⭐', matchId: 3 },
      { id: 5, type: 'text', val: 'mèo', matchId: 6 },
      { id: 6, type: 'emoji', val: '🐱', matchId: 5 },
      { id: 7, type: 'text', val: 'cá', matchId: 8 },
      { id: 8, type: 'emoji', val: '🐟', matchId: 7 },
    ],
    supermarket: {
      budget: 25,
      instruction: 'Em có 25 xu. Mua đồ tiệc sao cho còn dư ít nhất 5 xu!',
      items: [
        { id: 's1', name: 'Bánh kem', emoji: '🎂', price: 10 },
        { id: 's2', name: 'Nước cam', emoji: '🧃', price: 5 },
        { id: 's3', name: 'Kẹo mút', emoji: '🍭', price: 3 },
        { id: 's4', name: 'Bóng bay', emoji: '🎈', price: 4 },
        { id: 's5', name: 'Mũ tiệc', emoji: '🎩', price: 6 },
      ]
    },
    patterns: [
      { type: 'number', text: 'Dãy giảm dần:', sequence: [5, 4, 3, '?'], answer: '2', options: ['1', '2', '3'], hint: 'Mỗi số giảm 1' },
      { type: 'shape', text: 'Tìm hình:', sequence: ['🔴', '🔵', '🟢', '🔴', '🔵', '🟢', '?'], answer: '🔴', options: ['🔴', '🔵', '🟢'], hint: '3 màu lặp lại' },
      { type: 'number', text: 'Dãy: 1, 2, 1, 2, 1, ?', sequence: [1, 2, 1, 2, 1, '?'], answer: '2', options: ['1', '2', '3'], hint: '1 và 2 xen kẽ' },
      { type: 'shape', text: 'Tiếp theo?', sequence: ['⬛', '⬛', '⬛', '🔺', '⬛', '⬛', '⬛', '?'], answer: '🔺', options: ['⬛', '🔺', '⭕'], hint: '3 vuông rồi 1 tam giác' },
      { type: 'number', text: 'Dãy: 0, 2, 4, ?', sequence: [0, 2, 4, '?'], answer: '6', options: ['5', '6', '8'], hint: 'Mỗi số tăng 2 (số chẵn)' },
    ],
    mathPuzzles: [
      { category: 'reverse', text: '? - 3 = 2. Tìm ?', answer: '5', options: ['4', '5', '6'], explanation: '5 - 3 = 2' },
      { category: 'word', text: 'Mẹ cho bé 5 kẹo, bé ăn 2 rồi cho bạn 1. Còn mấy?', answer: '2', options: ['1', '2', '3'], explanation: '5 - 2 - 1 = 2' },
      { category: 'balance', text: '🌟+🌟+🌟 = 🌙+🌙+🌙+🌙+🌙+🌙. Vậy 1🌟 = mấy🌙?', answer: '2', options: ['1', '2', '3'], explanation: '3 sao = 6 trăng → 1 sao = 2 trăng' },
      { category: 'spatial', text: 'Có mấy hình tròn trong hình sau?', image: '⭕⭕⭕⭕⭕', answer: '5', options: ['4', '5', '6'], explanation: 'Đếm: 5 hình tròn' },
      { category: 'logic', text: 'Lan đi bộ nhanh hơn Mai. Mai đi nhanh hơn Hoa. Ai đi chậm nhất?', answer: 'Hoa', options: ['Lan', 'Mai', 'Hoa'], explanation: 'Lan > Mai > Hoa → Hoa chậm nhất' },
    ],
    advanced: [
      { id: 'a4-1', text: 'Hình nào khác biệt?', image: '🟢🟢🟢🔴', answer: 'Hình cuối', options: ['Hình đầu', 'Hình thứ 2', 'Hình thứ 3', 'Hình cuối'] },
      { id: 'a4-2', text: 'Phương tiện nào đi trên nước?', image: '🚗 🚢 ✈️ 🚂', answer: '🚢', options: ['🚗', '🚢', '✈️', '🚂'] },
      { id: 'a4-3', text: 'Lan cao hơn Mai, Mai cao hơn Hoa. Ai thấp nhất?', answer: 'Hoa', options: ['Lan', 'Mai', 'Hoa'] },
      { id: 'a4-4', text: 'Dãy: 5, 3, 1. Số tiếp: -1 hay 0?', answer: 'Không có (âm)', options: ['0', '-1', 'Không có (âm)'] },
      { id: 'a4-5', text: '? + 2 = 5, thì ? - 1 = ?', answer: '2', options: ['1', '2', '3'] },
    ],
    extraExercises: {
      review: [
        { text: '5 - 3 = ?', answer: '2', options: ['1', '2', '3'] },
        { text: 'Miu đánh thức bé bằng cách nào?', answer: 'Liếm tay', options: ['Kêu', 'Liếm tay', 'Cào'] },
      ],
      practice: [
        { text: '? - 1 = 4. Tìm ?', answer: '5', options: ['4', '5', '6'] },
        { text: 'Dãy: 5, 4, ?, 2', answer: '3', options: ['2', '3', '4'] },
      ],
      challenge: [
        { text: 'Hình giống hình vuông nhất?', image: '📱 🏀 📦', answer: '📦', options: ['📱', '🏀', '📦'] },
        { text: '🐱 - 🐶 = 1 và 🐱 = 3. Vậy 🐶 = ?', answer: '2', options: ['1', '2', '3'] },
      ]
    }
  },

  /* ===== TUẦN 1 - NGÀY 5 (Thứ Sáu - Boss Fight) ===== */
  {
    week: 1, day: 5,
    dayName: 'Thứ Sáu',
    title: 'Chặng 5: Đại chiến Boss Vũ trụ!',
    theme: '🛡️ Boss Fight - Đánh giá nâng cao Tuần 1',
    emoji: '🛡️',
    difficulty: 3,
    curriculumRef: 'Ôn tập nâng cao Tuần 1: Số 1-5, cộng trừ PV5, âm a-c, vần đơn, tư duy logic',
    isBossDay: true,
    bossEmoji: '🐉',
    bossName: 'Rồng Không gian',
    bossFight: [
      { id: 'bf-1', text: '? + 2 = 5. Tìm ?', answer: '3', options: ['2', '3', '4', '1'] },
      { id: 'bf-2', text: 'Có 5 quả táo, ăn 2, cho bạn 1. Còn?', answer: '2', options: ['1', '2', '3', '4'] },
      { id: 'bf-3', text: 'Vì sao bé yêu Astro?', answer: 'Vì Astro ngoan', options: ['Vì đẹp', 'Vì Astro ngoan', 'Vì to', 'Vì bay'] },
      { id: 'bf-4', text: 'Dãy: 1, 3, 5, ?', answer: '7', options: ['6', '7', '8', '9'] },
      { id: 'bf-5', text: '🍎+🍎 = 🍋🍋🍋🍋. Vậy 🍎 = mấy 🍋?', answer: '2', options: ['1', '2', '3', '4'] },
      { id: 'bf-6', text: '5 - ? = 2. Tìm ?', answer: '3', options: ['2', '3', '4', '1'] },
      { id: 'bf-7', text: 'Vì sao bà không mua bí đỏ?', answer: 'Chỉ nấu canh cà', options: ['Hết tiền', 'Chỉ nấu canh cà', 'Bé không thích', 'Bí hư'] },
      { id: 'bf-8', text: 'Hình nào khác: 🔴🔴🔵🔴', answer: 'Hình 3', options: ['Hình 1', 'Hình 2', 'Hình 3', 'Hình 4'] },
      { id: 'bf-9', text: 'An > Bình > Cường (chiều cao). Ai thấp nhất?', answer: 'Cường', options: ['An', 'Bình', 'Cường'] },
      { id: 'bf-10', text: '?+?=4 (hai số giống nhau). ?=', answer: '2', options: ['1', '2', '3', '4'] },
    ],
    basicMath: { title: 'Ôn tập nâng cao', instruction: 'Ôn tập!', questions: [
      { id: 'm5-1', text: '? + 3 = 5', answer: 2, options: [1, 2, 3] },
      { id: 'm5-2', text: '5 - 2 - 1 = ?', answer: 2, options: [1, 2, 3] },
    ]},
    basicVietnamese: { title: 'Ôn tập đọc hiểu', instruction: 'Đọc và suy luận!',
      passage: { title: 'Buổi sáng đẹp trời', text: 'Sáng nay, bé dậy sớm vì Miu liếm tay bé. Ba đưa bé đi học. Trên đường, bé thấy nhiều cây xanh và chim hót. Bé rất vui.', wordCount: 30 },
      questions: [
        { id: 'v5-1', text: 'Vì sao bé dậy sớm?', answer: 'Vì Miu liếm tay', options: ['Vì chuông reo', 'Vì Miu liếm tay', 'Vì ba gọi'] },
        { id: 'v5-2', text: 'Bé nghe thấy gì trên đường?', answer: 'Chim hót', options: ['Xe chạy', 'Chim hót', 'Mưa rơi'] },
      ]
    },
    coding: { targetWord: 'bé', maze: [['b', ' ', ' '], [' ', 'é', ' '], [' ', ' ', '🌀']], startPos: [0, 0], goalPos: [2, 2], instruction: 'Ghép từ "bé"!' },
    sudoku3x3: { size: 3, symbols: ['🚀', '🌙', '⭐'], initial: [[0, -1, -1], [-1, -1, 2], [-1, 1, -1]], solution: [[0, 2, 1], [1, 0, 2], [2, 1, 0]] },
    sudoku: { size: 4, symbols: ['🚀', '🌙', '⭐', '🪐'], initial: [[0, -1, -1, 3], [-1, 3, 0, -1], [3, -1, -1, 0], [-1, 0, 3, -1]], solution: [[0, 2, 1, 3], [1, 3, 0, 2], [3, 1, 2, 0], [2, 0, 3, 1]] },
    sudoku4x4hard: { size: 4, symbols: ['🚀', '🌙', '⭐', '🪐'], initial: [[-1, -1, -1, 3], [-1, 3, -1, -1], [3, -1, -1, -1], [-1, -1, 3, -1]], solution: [[0, 2, 1, 3], [1, 3, 0, 2], [3, 1, 2, 0], [2, 0, 3, 1]] },
    memory: [
      { id: 1, type: 'text', val: '3+2', matchId: 2 },
      { id: 2, type: 'emoji', val: '🖐️', matchId: 1 },
      { id: 3, type: 'text', val: '5-3', matchId: 4 },
      { id: 4, type: 'emoji', val: '✌️', matchId: 3 },
      { id: 5, type: 'text', val: 'bé', matchId: 6 },
      { id: 6, type: 'emoji', val: '👶', matchId: 5 },
      { id: 7, type: 'text', val: 'ba', matchId: 8 },
      { id: 8, type: 'emoji', val: '👨', matchId: 7 },
    ],
    supermarket: { budget: 30, instruction: '30 xu. Mua quà gia đình!', items: [
      { id: 's1', name: 'Hoa mẹ', emoji: '💐', price: 10 },
      { id: 's2', name: 'Bánh bà', emoji: '🧁', price: 8 },
      { id: 's3', name: 'Trà ba', emoji: '🍵', price: 6 },
      { id: 's4', name: 'Kẹo em', emoji: '🍬', price: 3 },
      { id: 's5', name: 'Sữa', emoji: '🥛', price: 5 },
    ]},
    patterns: [
      { type: 'number', text: 'Tổng hợp: 2, 4, 6, ?', sequence: [2, 4, 6, '?'], answer: '8', options: ['7', '8', '10'], hint: 'Tăng 2' },
      { type: 'shape', text: 'Tiếp theo?', sequence: ['🔴', '🔵', '🟢', '🔴', '🔵', '🟢', '?'], answer: '🔴', options: ['🔴', '🔵', '🟢'], hint: '3 màu lặp' },
      { type: 'number', text: 'Dãy: 5, 3, 1. Giảm bao nhiêu?', sequence: [5, 3, 1], answer: 'Giảm 2', options: ['Giảm 1', 'Giảm 2', 'Giảm 3'], hint: '5→3 giảm 2, 3→1 giảm 2' },
    ],
    mathPuzzles: [
      { category: 'reverse', text: '? + ? + ? = 3 (3 số giống nhau)', answer: '1', options: ['0', '1', '2'], explanation: '1+1+1=3' },
      { category: 'balance', text: '🌟🌟 = 🌙🌙🌙🌙. Vậy 🌟 = mấy 🌙?', answer: '2', options: ['1', '2', '3'], explanation: '2 sao = 4 trăng → 1 sao = 2 trăng' },
      { category: 'word', text: '5 bạn xếp hàng. An đứng giữa. An đứng thứ mấy?', answer: '3', options: ['2', '3', '4'], explanation: 'Giữa 5 = vị trí 3' },
    ],
    advanced: [
      { id: 'a5-1', text: 'Hình nào giống hình tròn?', image: '📦 🏀 📱 📐', answer: '🏀', options: ['📦', '🏀', '📱', '📐'] },
      { id: 'a5-2', text: 'Dãy: 1, 2, 4, ?. Quy luật gì?', answer: '7', options: ['5', '6', '7'] },
      { id: 'a5-3', text: 'Một tuần có bao nhiêu ngày?', answer: '7', options: ['5', '6', '7'] },
      { id: 'a5-4', text: 'Con gì sống dưới nước?', image: '🐱 🐟 🐦 🐶', answer: '🐟', options: ['🐱', '🐟', '🐦', '🐶'] },
      { id: 'a5-5', text: '🐱+🐶=5, 🐱=3. Vậy 🐶=?', answer: '2', options: ['1', '2', '3'] },
    ],
    extraExercises: {
      review: [
        { text: '? + 2 = 5', answer: '3', options: ['2', '3', '4'] },
        { text: '5 - 2 = ?', answer: '3', options: ['2', '3', '4'] },
      ],
      practice: [
        { text: 'Dãy: 1, 1, 2, 2, ?, ?', answer: '3, 3', options: ['2, 3', '3, 3', '3, 4'] },
      ],
      challenge: [
        { text: 'Có 5 bóng: 🔴🔵🔴🔵🔴. Có mấy quả đỏ?', answer: '3', options: ['2', '3', '4'] },
        { text: '🍎+🍎-🍎=?🍎', answer: '1', options: ['0', '1', '2'] },
      ]
    }
  }
];

export function getLesson(week, day) {
  return lessons.find(l => l.week === week && l.day === day);
}

export function getAllLessonsForWeek(week) {
  return lessons.filter(l => l.week === week).sort((a, b) => a.day - b.day);
}
