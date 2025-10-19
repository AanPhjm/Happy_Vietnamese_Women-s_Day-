function showLetter() {
  const name = document.getElementById('nameInput').value.trim();
  if (!name) {
    alert("Vui lòng nhập tên của bạn trước khi gửi!");
    return;
  }

  document.getElementById('input-box').style.display = 'none';
  const envelope = document.getElementById('envelope');
  envelope.style.display = 'block';
  document.getElementById('greeting').textContent = `Chúc ${name} có một ngày 20/10 vui vẻ, hạnh phúc 💐`;
}

function openLetter() {
  const envelope = document.getElementById('envelope');
  envelope.classList.add('open');
}

function nextPage(e) {
  e.stopPropagation();
  // Chuyển sang trang mà bạn sẽ tự làm
  window.location.href = "20_10_p2.html"; // ← đổi tên nếu bạn dùng file khác
}


// 🌸 Hiệu ứng cánh hoa rơi
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.animationDuration = 5 + Math.random() * 5 + 's';
  petal.style.opacity = Math.random() * 0.7 + 0.3;
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 10000);
}
setInterval(createPetal, 400);
