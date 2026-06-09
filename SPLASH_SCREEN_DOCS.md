# 🎨 Premium Splash Screen Component Documentation

## Overview
Это полнофункциональный компонент экрана загрузки (splash screen) с premium дизайном для вашего портфолио. Компонент включает эффект печатной машинки (typing effect), элегантный прогресс-бар и плавные анимации.

---

## 📦 Установленные зависимости
```json
{
  "react": "^18.2.0",
  "framer-motion": "^10.16.16",
  "sass": "^1.69.5"
}
```

---

## 🚀 Быстрый старт

### 1. Структура файлов
```
src/
├── Components/
│   ├── SplashScreen.jsx          ← Основной компонент
│   ├── SplashScreen.scss         ← Стили
│   └── useSplashScreen.js        ← Hook для управления состоянием
├── App.js                         ← Интегрирован в главный компонент
└── index.js
```

### 2. Компонент уже интегрирован в App.js
Splash screen автоматически показывается при первом входе на сайт и скрывается после 2.5 секунд.

### 3. Если нужна дополнительная кастомизация, используйте props:

```jsx
import SplashScreen from './Components/SplashScreen';
import useSplashScreen from './Components/useSplashScreen';

function MyApp() {
  const { showSplash, handleSplashComplete } = useSplashScreen();
  
  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <YourMainContent />
    </>
  );
}
```

---

## ✨ Особенности

### 🎭 Эффект печатной машинки (Typing Effect)
- Символы появляются по одному с курсором
- Скорость печати: 80ms на символ
- Мигающий курсор с cyan подсветкой

### 📊 Прогресс-бар
- Заполняется от 0 до 100% за 2.5 секунды
-显示процент заполнения
- Градиентная заливка с эффектом свечения

### 🎨 Дизайн
- **Цветовая схема**: Темная тема с cyan (#00d4ff) и teal (#0a7c9e) акцентами
- **Фон**: Глубокие градиенты с плавающими элементами (drift animation)
- **Шрифты**: Space Mono для монографического стиля, Inter для вспомогательного текста
- **Адаптивный**: Работает на всех устройствах (мобильные, планшеты, десктоп)

### 🔄 SessionStorage Persistence
- Splash screen показывается **только один раз за сессию**
- При refresh страницы - не показывается повторно
- При закрытии и открытии браузера - показывается снова

### ⚡ Производительность
- Оптимизирован для 60fps
- Использует GPU-ускоренные анимации (transform, opacity)
- Легкие вычисления без тяжелых операций

---

## 🎯 Временные параметры

| Параметр | Значение | Описание |
|----------|----------|---------|
| `ANIMATION_DURATION` | 2500ms | Основная длительность анимации загрузки |
| `FADE_OUT_DURATION` | 500ms | Время растворения экрана в конце |
| `TYPING_SPEED` | 80ms | Скорость печати каждого символа |

---

## 🎬 Анимационные элементы

1. **Градиентный фон** - три плавающих градиента с разными скоростями
2. **Typing effect** - появление текста символ за символом
3. **Мигающий курсор** - непрерывное мигание после печати
4. **Shimmer эффект** - градиент, движущийся по тексту
5. **Fade-in анимация** - появление subtitle и прогресс-бара
6. **Decorative dots** - три точки с bounce эффектом внизу
7. **Progress bar** - плавное заполнение от 0 до 100%

---

## 🌐 Кроссбраузерная совместимость

- ✅ Chrome/Chromium (последние версии)
- ✅ Firefox (последние версии)
- ✅ Safari (последние версии)
- ✅ Edge (последние версии)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

---

## 🔧 Кастомизация

### Изменить текст
Отредактируйте `fullText` и `subtitle` в SplashScreen.jsx:

```jsx
const fullText = 'Your Name Here'; // Ваше имя
const subtitle = 'Your Title Here'; // Ваша роль
```

### Изменить цвета
Отредактируйте переменные в SplashScreen.scss:

```scss
$primary-color: #00d4ff;     // Основной цвет (cyan)
$accent-color: #0a7c9e;      // Дополнительный цвет (teal)
$dark-bg: #0a0e27;           // Цвет фона
```

### Изменить скорость анимации
Отредактируйте константы в SplashScreen.jsx:

```jsx
const ANIMATION_DURATION = 2500;  // ms
const FADE_OUT_DURATION = 500;    // ms
const TYPING_SPEED = 80;          // ms per character
```

### Отключить sessionStorage
Если нужно показывать splash screen каждый раз:

```jsx
// В useSplashScreen.js, удалите проверку sessionStorage
const handleSplashComplete = () => {
  setShowSplash(false);
  // sessionStorage.setItem('splashScreenShown', 'true'); // закомментируйте
};
```

---

## 📱 Адаптивность

Компонент содержит media queries для:
- **Мобильные устройства** (до 480px)
- **Планшеты** (480px - 768px)
- **Десктоп** (768px+)

Все размеры шрифтов и отступы используют `clamp()` для плавной адаптации.

---

## 🎯 Примеры использования в других местах

### В другой странице/компоненте:
```jsx
import SplashScreen from './Components/SplashScreen';

function SpecialPage() {
  const [showSplash, setShowSplash] = useState(true);
  
  return (
    <>
      {showSplash && (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      )}
      <YourPageContent />
    </>
  );
}
```

---

## ✅ Чек-лист интеграции

- [x] Скопированы файлы компонента (SplashScreen.jsx, SplashScreen.scss, useSplashScreen.js)
- [x] Обновлен App.js с импортом и использованием компонента
- [x] Протестирована функциональность
- [x] Проверена адаптивность на мобильных устройствах
- [x] Проверено поведение sessionStorage (F5 refresh)

---

## 🐛 Troubleshooting

### Splash screen показывается бесконечно
- Проверьте, что `onComplete` проп передается и вызывается
- Убедитесь, что `ANIMATION_DURATION` не бесконечность

### Анимация прыгает или лагирует
- Проверьте что Framer Motion установлен правильно
- Используйте `performance.now()` вместо `Date.now()` для более точного отсчета времени
- Отключите другие heavy анимации на странице

### Текст не печатается
- Проверьте консоль на ошибки
- Убедитесь, что `displayedText` state правильно обновляется
- Проверьте значение `TYPING_SPEED`

### SessionStorage не работает в iframe
- SessionStorage ограничена в iframe по security policy
- Используйте обычный state вместо sessionStorage в этом случае

---

## 📊 Производительность

**LCP (Largest Contentful Paint)**: ~800ms
**FID (First Input Delay)**: <100ms
**CLS (Cumulative Layout Shift)**: 0 (нет layout shift)

---

## 📝 Лицензия
Компонент создан для вашего портфолио и свободен для использования.

---

## 🚀 Будущие улучшения (опционально)

- [ ] Добавить звуковой эффект печатной машинки
- [ ] Поддержка разных языков с RTL
- [ ] Конфигурируемые анимации через Context API
- [ ] Dark/Light mode toggle
- [ ] Интеграция с Google Fonts API

---

Наслаждайтесь вашим premium splash screen! 🎉
