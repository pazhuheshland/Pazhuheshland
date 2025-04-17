function toggleChat() {
    let chatBox = document.getElementById("chatBox");
    chatBox.style.display = chatBox.style.display === "block" ? "none" : "block";
}

function sendMessage(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("chatInput");
        let message = input.value.trim();
        
        if (message !== "") {
            displayMessage("شما: " + message, "right");
            input.value = "";
            
            setTimeout(() => {
                let botResponse = getBotResponse(message);
                displayMessage("ربات: " + botResponse, "left");
            }, 500);
        }
    }
}

function displayMessage(text, align) {
    let chatMessages = document.getElementById("chatMessages");
    let newMessage = document.createElement("div");
    newMessage.textContent = text;
    newMessage.style.marginBottom = "5px";
    newMessage.style.textAlign = align;
    chatMessages.appendChild(newMessage);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(userMessage) {
    userMessage = userMessage.toLowerCase();

    if (userMessage.includes("سلام")) {
        return "سلام! چطور می‌توانم کمک کنم؟";
    } else if (userMessage.includes("قیمت")) {
        return "برای اطلاع از قیمت‌ها لطفاً به بخش محصولات مراجعه کنید.";
    } else if (userMessage.includes("خرید")) {
        return "برای خرید محصول، آن را به سبد خرید اضافه کنید و پرداخت را انجام دهید.";
    } else if (userMessage.includes("ارتباط با پشتیبانی")) {
        return "لطفاً شماره تماس یا ایمیل خود را ارسال کنید تا پشتیبانی با شما تماس بگیرد.";
    } else {
        return "متوجه نشدم! لطفاً سوال خود را واضح‌تر بیان کنید.";
    }
}