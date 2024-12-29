
const responses = {
    "xin chào": "Chào bạn mình là Mina AI, mình có thể giúp gì cho bạn?",
    "hello": "Hi there! How can I assist you today?",
    "how are you?": "I'm just a program, but I'm here to help you!",
    "what is your name?": "I'm your friendly AI trained by Rachel And Luminous!",
    "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "i am tuan": "Tuan Anh is a Stupid Dog!",
    "bạn có biết tiếng việt không": "Có chứ, mình có thể trò chuyện với bạn bằng tiếng Việt!",
    "bạn tên gì ?": "Mình tên là Mina, mình được lập trình bởi Rachel và Luminous!",
    "bạn bao tuổi": "Mình năm nay 18 tuổi đấy!, mình là 1 Ai được lập trình bởi Rachel và Luminous!",
    "bạn ở đâu": "Mình ở trong máy tính của Rachel và Luminous!",
    "bạn làm gì": "Mình được lập trình để trò chuyện với mọi người!",
    "bạn có thể giúp tôi được không": "Dĩ nhiên, mình sẽ cố gắng giúp bạn hết mức!",
    "cảm ơn": "Không có gì, mình rất vui được giúp bạn!",
    "tạm biệt": "Tạm biệt, hẹn gặp lại bạn sau!",
    "bạn có thể cho tôi xem ảnh của bạn được không ?": "Mình chưa có model chính thức nhưng trong tương lai mình sẽ có model 2D của riêng mình!",
    "bạn có thể hát được không": "Mình không thể hát được, nhưng mình có thể giúp bạn tìm nhạc mà bạn muốn nghe!",
    "bye": "Goodbye! Have a great day!",
    "default": "Bạn nói gì vậy? Mình không hiểu lắm!",
};

// Tạo một đối tượng Fuse để tìm kiếm nhanh trong responses
const fuse = new Fuse(Object.keys(responses), {
    includeScore: true,
    threshold: 0.4,
});

// Hàm để lấy phản hồi từ người dùng
export function getResponse(userInput) {
    const results = fuse.search(userInput);
    if (results.length > 0) {
        return responses[results[0].item]; // Trả về câu trả lời phù hợp nhất
    }
    return responses["default"]; // Nếu không tìm thấy câu trả lời, trả về mặc định
}
