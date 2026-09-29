document.addEventListener("mousemove", (e) => {
    const width = window.innerWidth / 2;
    const height = window.innerHeight / 2;

    const mouseX = e.clientX - width;
    const mouseY = e.clientY - height;

    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
                        
        const x = (mouseX * speed) / 100;
        const y = (mouseY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});