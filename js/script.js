// اضافه شدن عدد سبد خرید با کلیک روی دکمه های اضافه شدن به سبد خرید
// متغیر شمارنده
let cartCount = 0;
// پیدا کردن عدد سبد خرید
const cartCountElement = document.getElementById("cart-count");
// پیدا کردن تمام دکمه ها
const addToCartButtons = document.querySelectorAll(".product-card button");

addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        cartCount++;
        // عدد داخل span رو با مقدار جدید متغیر جایگزین می‌کنه.
        cartCountElement.textContent = cartCount;
        // با textContent عدد سبد خرید رو به‌روز می کنیم
    });
});
