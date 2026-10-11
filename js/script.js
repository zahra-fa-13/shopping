// اضافه شدن عدد سبد خرید با کلیک روی دکمه های اضافه شدن به سبد خرید
// متغیر شمارنده
let cartCount = 0;
// تعریف آرایه خالی 
const cart = [];
// پیدا کردن عدد سبد خرید
const cartCountElement = document.getElementById("cart-count");
// پیدا کردن تمام دکمه ها
const addToCartButtons = document.querySelectorAll(".product-card button");

addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        cartCount++;

        // عدد داخل span رو با مقدار جدید متغیر جایگزین می‌کنه.
        // با textContent عدد سبد خرید رو به‌روز می کنیم
        cartCountElement.textContent = cartCount;

        // بریا اینکه محصول رو بگیریم و تو کنسول نشون بدیم تعریفش کردیم
        const productCard = button.closest(".product-card");
        const productName = productCard.querySelector("h3").textContent;

        //  به انتهای آرایه محصول رو اضافه میکنه
        cart.push(productName);

        console.log(cart);
    });
});