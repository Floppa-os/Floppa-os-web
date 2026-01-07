// Глобальные переменные
let apps = {};
let windows = [];

// Инициализация ОС
function initOS() {
    // Имитация загрузки
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
        updateClock();
        loadSavedData();
    }, 2500);
}

// Обновление времени
function updateClock() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
    document.getElementById('clock').textContent = timeStr;
    setTimeout(updateClock, 60000); // раз в минуту
}

// Загрузка сохранённых данных
function loadSavedData() {
    const saved = localStorage.getItem('floppaOSData');
    if (saved) {
        console.log('Данные загружены:', JSON.parse(saved));
    }
}

// Сохранение данных
function saveData() {
    const data = {
        windows: windows.map(w => ({
            id: w.id,
            title: w.title,
            left: w.style.left,
            top: w.style.top,
            width: w.style.width,
            height: w.style.height
        }))
    };
    localStorage.setItem('floppaOSData', JSON.stringify(data));
    console.log('Данные сохранены');
}

window.onload = initOS;
