// Tạo hiệu ứng tim bay
setInterval(() => {
    const heart = document.createElement("div");
    const size = Math.random() * 40 + 10; // Kích thước ngẫu nhiên
    const left = Math.random() * 100; // Vị trí ngẫu nhiên
  
    heart.classList.add("heart");
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${left}%`;
    heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  
    document.querySelector(".bg_heart").appendChild(heart);
  
    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 500);
  
  // Tạo hiệu ứng gõ chữ
  const text = `Hey Bé xxx ơi,  
  Tớ nghĩ mãi mới dám viết những dòng này... Cậu đọc kỹ nhé!  
  Noel năm nay tớ muốn làm điều gì đó thật đặc biệt, và... điều đầu tiên tớ nghĩ tới là... cậu.  
  Tớ không biết vì sao, nhưng mỗi lần gặp cậu, tớ luôn thấy vui và hơi hồi hộp nữa.  
  Cậu có biết không? Mỗi khi cậu cười, tớ thấy cả thế giới sáng bừng lên ấy.  
  Nên... tớ muốn hỏi cậu... Noel này, cậu có thể đi chơi cùng tớ không?  
  Chỉ hai đứa mình thôi. Tớ hứa sẽ không làm cậu thất vọng đâu!  
  Chờ câu trả lời của cậu,xxx  nhé. 😊  
  P/s: Nếu cậu đồng ý, tớ sẽ chuẩn bị sẵn bánh và cả quà nữa! 🎁🎄`;

  
  let i = 0;
  const speed = 50; // Tốc độ gõ chữ (ms)
  const textElement = document.getElementById("text1");
  const fbButton = document.getElementById("fbButton");
  
  function typeWriter() {
    if (i < text.length) {
      if (text[i] === "\n") {
        textElement.innerHTML += "<br>"; // Thêm dòng mới
      } else {
        textElement.innerHTML += text[i];
      }
      i++;
      setTimeout(typeWriter, speed);
    } else {
      fbButton.style.display = "block"; // Hiển thị nút sau khi gõ xong
    }
  }
  
  typeWriter();
  
