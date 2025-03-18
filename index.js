document.querySelector(".add-to-cart").addEventListener("click", function() {
    let popup = document.getElementById("cart-popup");

    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
});
