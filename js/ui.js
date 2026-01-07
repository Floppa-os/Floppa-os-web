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
