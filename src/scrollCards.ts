export function setupHorizontalScroll(containerId: string, scrollAmount = 300) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const leftBtn = document.getElementById("scroll-left");
    const rightBtn = document.getElementById("scroll-right");

    leftBtn?.addEventListener("click", () => {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });
    rightBtn?.addEventListener("click", () => { 
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}