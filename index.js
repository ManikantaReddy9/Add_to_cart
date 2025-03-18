document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.querySelector(".add-to-cart");
    
    addToCartButton.addEventListener("click", () => {
        const popup = document.createElement("div");
        popup.textContent = "✔ Item added to cart successfully!";
        popup.style.position = "fixed";
        popup.style.bottom = "20px";
        popup.style.left = "50%";
        popup.style.transform = "translateX(-50%)";
        popup.style.background = "#28a745";
        popup.style.color = "white";
        popup.style.padding = "10px 20px";
        popup.style.borderRadius = "5px";
        popup.style.boxShadow = "0px 0px 10px rgba(0,0,0,0.2)";
        popup.style.opacity = "0";
        popup.style.transition = "opacity 0.5s ease-in-out";
        
        document.body.appendChild(popup);
        
        setTimeout(() => {
            popup.style.opacity = "1";
        }, 10);
        
        setTimeout(() => {
            popup.style.opacity = "0";
            setTimeout(() => {
                popup.remove();
            }, 500);
        }, 2000);
    });
});

