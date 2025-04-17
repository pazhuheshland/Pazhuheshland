document.addEventListener("DOMContentLoaded", function () {
    let cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    let cartList = document.getElementById("cart-items");
    let totalPriceElement = document.getElementById("total-price");

    function updateCart() {
        cartList.innerHTML = "";
        let total = 0;

        cartItems.forEach((item, index) => {
            let li = document.createElement("li");
            li.textContent = ${item.name} - ${item.price} تومان - تعداد: ${item.quantity};

            let removeButton = document.createElement("button");
            removeButton.textContent = "❌";
            removeButton.onclick = function () {
                cartItems.splice(index, 1);
                localStorage.setItem("cart", JSON.stringify(cartItems));
                updateCart();
            };

            li.appendChild(removeButton);
            cartList.appendChild(li);
            total += Number(item.price) * Number(item.quantity);
        });

        totalPriceElement.textContent = مبلغ کل: ${total.toLocaleString()} تومان;
    }

    updateCart();

    window.clearCart = function () {
        localStorage.removeItem("cart");
        cartItems = [];
        updateCart();
    };
});