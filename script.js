const downloadButton = document.getElementById('downloadButton');
const glowShadow = document.getElementById('glowShadow');

downloadButton.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { offsetWidth, offsetHeight } = downloadButton;
    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;
    glowShadow.style.backgroundPosition = `${x}% ${y}%`;
    glowShadow.style.opacity = '0.5';
});

downloadButton.addEventListener('mouseleave', () => {
    glowShadow.style.opacity = '0';
});
