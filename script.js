// 深色模式切换
const btn = document.getElementById("darkToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// 平滑滚动
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        if (href.startsWith("#")) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});
