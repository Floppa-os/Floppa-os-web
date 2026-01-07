// Регистрация приложений
apps = {
    notepad: {
        title: 'Блокнот',
        template: `
            <textarea id="notepad-content" rows="15" style="width: 100%; font-size: 14px; padding: 5px;"></textarea>
            <div style="margin-top: 10px;">
                <button onclick="saveNotepad()">Сохранить</button>
                <button onclick="loadNotepad()">Загрузить</button>
            </div>
        `
    },
    calculator: {
        title: 'Калькулятор',
        template: `
            <input type="text" id="calc-input" value="0" style="width: 100%; padding: 10px; font-size: 16px; text-align: right;" readonly>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 5px; margin-top: 10px;">
                <button onclick="calcInput('7')">7</button>
                <button onclick="calcInput('8')">8</button>
                <button onclick="calcInput('9')">9</button>
                <button onclick="calcOp('/')">÷</button>
                <button onclick="calcInput('4')">4</button>
                <button onclick="calcInput('5')">5</button>
                <button onclick="calcInput('6')">6</button>
                <button onclick="calcOp('*')">×</button>
                <button onclick="calcInput('1')">1</button>
                <button onclick="calcInput('2')">2</button>
                <button onclick="calcInput('3')">3</button>
                <button onclick="calcOp('-')">−</button>
                <button onclick="calcInput('0')">0</button>
                <button onclick="calcOp('.')">.</button>
                <button onclick="calcEquals()">=</button>
                <button onclick="calcOp('+')">+</button>
                <button onclick="calcClear()" colspan="2">C</button>
            </div>
        `
    }
};

// Открытие приложения
function openApp(appId) {
    if (!apps[appId]) return;

    const app = apps[appId];
    const window = createWindow(appId, app.title, app.template);

    // Специальные инициализации
    if (appId === 'notepad') {
        loadNotepad();
    } else if (appId === 'calculator') {
        document.getElementById('calc-input').value = '0';
    }
}

// Блокнот: сохранение
function saveNotepad() {
    const content = document.getElementById('notepad-content').value;
    localStorage.setItem('floppaOS_notepad', content);
    alert('Сохранено!');
}

// Блокнот: загрузка
function loadNotepad() {
    const content = localStorage.getItem('floppaOS_notepad') || '';
    document.getElementById('notepad-content').value = content;
}

// Калькулятор: ввод цифры
function calcInput(digit) {
    const input = document.getElementById('calc-input');
    if (input.value === '0') {
        input.value = digit;
    } else {
        input.value += digit;
    }
}

// Калькулятор: операция
function calcOp(op) {
    const input = document.getElementById('calc-input');
    input.value += op;
}

// Калькулятор: вычисление
function calcEquals() {
    try {
        const input = document.getElementById('calc-input');
        input.value = eval(input.value.replace('÷', '/').replace('×', '*'));
    } catch (e) {
        alert('Ошибка!');
        calcClear();
    }
}

// Калькулятор: очистка
function calcClear() {
    document.getElementById('calc-input').value = '0';
}
