// Создание окна приложения
function createWindow(appId, title, content) {
    const window = document.createElement('div');
    window.className = 'app-window';
    window.id = `window-${appId}`;

    window.innerHTML = `
        <div class="app-header">
            <span class="app-title">${title}</span>
            <button class="app-close" onclick="closeWindow('${appId}')">×</button>
        </div>
        <div class="app-content">${content}</div>
    `;

    document.getElementById('app-container').appendChild(window);

    // Драг-н-дроп
    dragElement(window);

    windows.push(window);
    return window;
}

// Закрытие окна
function closeWindow(appId) {
    const
// Перетаскивание окон
function dragElement(el) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    el.querySelector('.app-header').onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        el.style.top = (el.offsetTop - pos2) + "px";
        el.style.left = (el.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
