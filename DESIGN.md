---
name: Проремонт
description: "Ремонт телефонов во Владивостоке. Мир «Запчасть и этикетка»: розовый антистатический пакет, белые термоэтикетки с ценой, настоящий Code 128."
colors:
  esd: "#f5a3c0"
  esd-ink: "#5b2a3c"
  zip: "#e0322e"
  caution: "#ffd23f"
  danger: "#b42318"
  ink: "#171315"
  ink-soft: "#4b4448"
  ink-mute: "#6b6368"
  line: "#d8d4d6"
  ground: "#eeedef"
  liner: "#e2dfe1"
  paper: "#ffffff"
  night: "#151114"
  night-ink: "#f4eff2"
  night-soft: "#b9aeb4"
  night-line: "rgb(244 239 242 / 0.14)"
typography:
  display:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "4.85rem"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "normal"
    fontFeature: "tnum"
  headline:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "3.75rem"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "normal"
    fontFeature: "tnum"
  price:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "4.75rem"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "normal"
    fontFeature: "tnum"
  display-sm:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 800
    lineHeight: 0.96
    letterSpacing: "normal"
    fontFeature: "tnum"
  title:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.56
  body:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  button:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
  field:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.08em"
  readout:
    fontFamily: "Fira Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.43
    fontFeature: "tnum"
  code:
    fontFamily: "Fira Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.12em"
    fontFeature: "tnum"
  display-mobile:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "2.65rem"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  display-lg:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "4.2rem"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  display-sm-screen:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "4.4rem"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  headline-mobile:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "2.75rem"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  cta-mobile:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "3.3rem"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  price-mobile:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "4.25rem"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  price-receipt:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  wordmark:
    fontFamily: "Fira Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "23px"
    fontWeight: 800
    lineHeight: 0.96
    fontFeature: "tnum"
  segment:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 600
    lineHeight: 1.3
  segment-narrow:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 600
    lineHeight: 1.3
  strip:
    fontFamily: "Golos Text, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
  code-xs:
    fontFamily: "Fira Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.12em"
    fontFeature: "tnum"
rounded:
  label: "6px"
  segment: "7px"
  field: "8px"
  control: "10px"
  panel: "16px"
  pill: "9999px"
spacing:
  track: "4px"
  row: "12px"
  liner: "14px"
  gutter: "16px"
  label: "20px"
  gutter-sm: "24px"
  label-wide: "32px"
  heading: "40px"
  column: "48px"
  heading-md: "56px"
  section: "80px"
  section-md: "112px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.ink-soft}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-channel:
    backgroundColor: "transparent"
    textColor: "{colors.night-ink}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  segment-track:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "{spacing.track}"
  segment:
    textColor: "{colors.ink}"
    rounded: "{rounded.segment}"
    padding: "0 12px"
    height: "44px"
  segment-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  chip:
    backgroundColor: "rgb(255 255 255 / 0.55)"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "44px"
  chip-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.field}"
    padding: "0 16px"
    height: "48px"
  thermal-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "{spacing.label}"
  liner:
    backgroundColor: "{colors.liner}"
    rounded: "{rounded.panel}"
    padding: "{spacing.liner}"
  receipt-line-hover:
    backgroundColor: "{colors.ground}"
    rounded: "{rounded.label}"
  caution-plate:
    backgroundColor: "{colors.caution}"
    textColor: "{colors.ink}"
    rounded: "{rounded.label}"
    padding: "12px 16px"
  demo-strip:
    backgroundColor: "{colors.caution}"
    textColor: "{colors.ink}"
    padding: "8px 16px"
  field-esd:
    backgroundColor: "{colors.esd}"
    textColor: "{colors.ink}"
  field-night:
    backgroundColor: "{colors.night}"
    textColor: "{colors.night-ink}"
  header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: "72px"
  mobile-bar:
    backgroundColor: "{colors.paper}"
    padding: "8px 12px"
---

# Design System: Проремонт

## Overview

**Creative North Star: "Запчасть и этикетка"**

Сайт устроен как запчасть в упаковке. Первый и последний экран занимает плоский розовый антистатический пакет во всю ширину, по его верхнему краю идёт двойная красная линия зиплока. Всё, что клиент хочет проверить (цену, срок, гарантию, адрес, номер заявки), печатается на белой термоэтикетке с чёрной печатью. Этикетка лежит на поверхности: скругление 6px, мягкая тень, рамки нет. Эта тень и есть вся глубина системы.

Голос этикетки звучит узким гротеском Fira Sans Extra Condensed 800 прописными, крупно и с цифрами одной ширины. Текст и названия полей набраны Golos Text, показания (сроки, коды, числа) набраны Fira Mono. Плотность спокойная: крупные заголовки, секции по 80–112px, строка текста не шире 42rem. Страница держится на предметах этикеточного мира: штрихкоды Code 128 читаются сканером, прайс печатается чеком с точечными выносками, шаги ремонта лежат на подложке рулона с перфорацией.

Подтверждённые визуальные отказы: шаблон категории (тёмный «техно»-герой, сток-пинцет, синяя и бирюзовая гамма, сетки иконок) и прошлый мир «Диагностика» с его диагностической консолью.

**Key Characteristics:**
- Плоское розовое поле `esd` только на первом и последнем экране, с двойной красной линией `zip`.
- Белые термоэтикетки `.label` несут единственную тень системы.
- Заголовки и цены набраны прописным узким гротеском 800 с интерлиньяжем 0.96.
- Fira Mono достаётся только показаниям с цифрами.
- Штрихкоды настоящие, Code 128, с осмысленными кодами.
- Кнопки: чёрные прямоугольники 10px; пилюли только у мелких чипов.
- Одно сигнатурное движение: этикетка выезжает из принтера.

## Colors

Прохладные нейтральные с лёгким розовым подтоном, один плоский розовый пакет, красная линия зиплока, жёлтый стикер для предупреждений и чёрные поля для записи и подвала.

### Primary
- **Розовый антистатического пакета** (`esd`, #f5a3c0): плоское поле во всю ширину на первом экране и на финальном призыве перед подвалом. Мелкими сигналами встречается и вне поля: бирка в знаке логотипа, индикатор на корпусе принтера, выделение текста, кольцо фокуса на чёрном поле, мягкое кольцо фокуса у полей ввода (60%), наведение на телефон в подвале.
- **Чернила по розовому** (`esd-ink`, #5b2a3c): второстепенный текст на розовом поле: подводка, названия полей выбора, график и адрес. Контраст с `esd` 5.9:1.

### Secondary
- **Красный зиплок** (`zip`, #e0322e): только двойная линия по верхнему краю розового поля: две полосы по 2px с просветом 4px, в 14px от края, непрозрачность 0.85.

### Tertiary
- **Жёлтый ESD-стикер** (`caution`, #ffd23f): только предупреждения: демо-полоса над шапкой и плашка над демо-отзывами. Чернила на нём дают 12.8:1.
- **Красный ошибки** (`danger`, #b42318): ошибки формы: текст под полем, рамка поля с `aria-invalid`, плашка неудачной отправки на подложке `danger` 8%.

### Neutral
- **Чернила** (`ink`, #171315): основной текст, чёрные кнопки, выбранные сегменты и чипы, сплошные линии 2px, корпус принтера.
- **Мягкие чернила** (`ink-soft`, #4b4448): абзацы и подводки секций, пункты меню, наведение на основную кнопку.
- **Приглушённые чернила** (`ink-mute`, #6b6368): названия полей на этикетках, подписи, мета. 5.8:1 на белом, 5.0:1 на `ground`.
- **Линия** (`line`, #d8d4d6): разделители строк в списках, нижняя граница шапки, кольцо трека переключателя на белом.
- **Фон страницы** (`ground`, #eeedef): прохладный серый фон, подсветка строки прайса, трек выбора способа связи, `themeColor` браузера.
- **Подложка рулона** (`liner`, #e2dfe1): лента под этикетками шагов, с которой их снимают.
- **Термобумага** (`paper`, #ffffff): этикетки, шапка, панель связи, белые секции для спокойного чтения (условия, вопросы). В коде это `white` и `#fff`, отдельной переменной нет.
- **Ночь** (`night`, #151114): сплошное чёрное поле записи и подвала.
- **Текст ночи** (`night-ink`, #f4eff2), **приглушённый текст ночи** (`night-soft`, #b9aeb4, 8.7:1) и **линия ночи** (`night-line`, `night-ink` 14%): текст, подписи и разделители на чёрном поле.

### Named Rules
**The One Bag Rule.** Розовый `esd` как поле появляется только на первом и последнем экране, плоским и во всю ширину, всегда с линией `.zip` по верхнему краю. Розовых карточек, градиентов и текстур посреди страницы нет.

**The Sticker Rule.** Жёлтый `caution` означает «внимание»: демо-полоса и плашка демо-отзывов. Акцентом, фоном секции или подсветкой цены он не служит.

**The Night Field Rule.** Чёрное поле `night` отдано записи и подвалу. Форма лежит на нём белой этикеткой, фокус на тёмном подсвечивается розовым (класс `.on-dark`).

## Typography

**Display Font:** Fira Sans Extra Condensed 800 (с «Arial Narrow», sans-serif)
**Body Font:** Golos Text 400/500/600 (с ui-sans-serif, system-ui)
**Label/Mono Font:** Fira Mono 400 (с ui-monospace, SFMono-Regular, Menlo)

Все три подключены через `next/font` с кириллицей, переменные `--font-display`, `--font-sans`, `--font-mono`.

**Character:** Узкий гротеск прописными звучит как печать на этикетке: плотно, крупно, с цифрами одной ширины. Golos Text ведёт спокойный разговорный текст, Fira Mono появляется только там, где стоит число.

### Hierarchy
- **Display** (800, 2.65rem → 4.4rem с `sm` → 4.2rem с `lg` → 4.85rem с `xl`, 0.96, прописные): заголовок первого экрана. Финальный призыв крупнее: 3.3rem → 4.5rem с `sm` → 6rem с `lg`.
- **Headline** (800, 2.75rem → 3.75rem с `sm`, 0.96, прописные): заголовки секций (`SectionHeading` и такие же `h2`).
- **Price** (800, 4.25rem → 4.75rem с `sm`, 0.96, в одну строку): цена на этикетке-оценке. Номер заявки 3.75rem → 4.5rem, адрес на транспортной этикетке 3rem → 3.75rem, цена в строке прайса 1.6rem.
- **Display small** (800, 1.25–1.875rem, 0.96): шапки этикеток, строки условий ремонта, номера шагов.
- **Title** (Golos 600, 1.25rem, 1.4, −0.01em): заголовки шагов и подразделов (`h3`). Вопросы FAQ: 600, 1.125rem.
- **Lead** (Golos 400, 1.125rem, 1.56): подводка первого экрана и секций с `sm`, на телефоне 1rem. Ширина до 42rem.
- **Body** (Golos 400, 1rem, 1.5): абзацы и ответы. Отзывы: 17px, интерлиньяж 1.625.
- **Button** (Golos 600, 15px): подписи кнопок. Сегменты 13px → 14px с `sm` (600), чипы 14px (500).
- **Field** (Golos 600, 11px, 1.3, трекинг 0.08em, прописные): названия полей на этикетках и в формах: «ТЕЛЕФОН», «СРОК», «ЦЕНА ОТ».
- **Readout** (Fira Mono 400, 14px на этикетке, 12px в строках прайса и шагах, `tabular-nums`): сроки, гарантии с цифрами, суммы в показаниях, часы работы.
- **Code** (Fira Mono 400, 11px, трекинг 0.12em): подпись под штрихкодом; 10px на транспортной этикетке, 12px на этикетке заявки.

### Named Rules
**The Breve Rule.** Интерлиньяж `.display` равен 0.96 и не уплотняется: при меньшем значении бреве «Й» задевает выносной элемент «Д» строкой выше. Класс `.display` объявлен вне каскадных слоёв Tailwind, поэтому утилиты `leading-*` его не перебивают.

**The Field Name Rule.** Название поля (`.field`) живёт только внутри этикетки или формы: над своим значением, как легенда группы выбора или подпись поля ввода. Пара «название поля / значение» внутри этикетки допустима, даже когда значение набрано узким гротеском. Надзаголовком над заголовком секции название поля не ставится.

**The Reading Rule.** Fira Mono (`.readout`) получает только показания с цифрами. Значение, которое может оказаться словом (гарантия «по результату», мета шага «до начала работ»), проходит через `isReading()`. Слова остаются в Golos, телефоны набираются Golos с `tabular-nums`.

**The NBSP Rule.** Цены выводятся только через `formatPrice()`: разряды и знак ₽ отделяются U+00A0. Узкого пробела U+202F в Fira Sans Extra Condensed нет.

**The Plain Copy Rule.** Тексты пишутся по навыку `stop-slop`: без длинного тире в прозе, в действительном залоге, без оборота «не X, а Y». Тире как пустое значение в ячейке этикетки допустимо.

## Layout

- **Контейнер** (`Container`): до 72rem (1152px), поля 16px, с `sm` 24px.
- **Сетка:** одна колонка на телефоне, 12 колонок с `lg`, промежуток между колонками 48px. Деления 7/5, 5/7 и 4/8: текстовая колонка и колонка с этикеткой или списком. Колонка рядом с длинной этикеткой может быть липкой (прайс, `top` 112px).
- **Ритм секций:** 80px по вертикали, 112px с `md`. Первый экран плотнее (56/40px, с `lg` 64/56px), финальный призыв 80/64px, с `md` 96/80px. Заголовочный блок отделён от содержимого 40px, с `md` 56px.
- **Поля во всю ширину:** `ground` для основного потока, белая `paper` для спокойного чтения, `esd` на входе и выходе, `night` для записи и подвала. Поля сменяют друг друга без разделителей и теней.
- **Шапка:** закреплена сверху, белая, 64px, с `md` 72px. Якоря и фокус отступают на 5.5rem (`scroll-padding-top`).
- **Телефон:** ниже 768px снизу закреплена панель связи (`MobileBar`); страница резервирует под неё 76px, `scroll-padding-bottom` 5.5rem.
- **Точки перелома:** стандартные Tailwind (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px) и узкий шаг до 380px, на котором сегменты переключателя ужимаются.
- **Зоны нажатия:** от 44px (сегменты, чипы, иконки шапки, каналы связи), кнопки 48px.

## Elevation & Depth

Система плоская, с одной тенью. Поля (пакет, ночь, белые секции) лежат плоско. Глубина появляется только у термоэтикетки, потому что этикетка лежит на поверхности. Шапка, поля ввода и кнопки отделяются линией или цветом. Подложка рулона `liner` даёт тональный слой под этикетками без собственной тени.

### Shadow Vocabulary
- **Тень этикетки** (`box-shadow: 0 1px 2px rgb(23 19 21 / 0.08), 0 12px 28px -14px rgb(23 19 21 / 0.35)`): у каждой `.label`: этикетка-оценка, шаги ремонта, прайс-чек, форма заявки, этикетка заявки, транспортная этикетка адреса. Мягкая, со смещением вниз.

### Named Rules
**The One Shadow Rule.** Тень в системе одна и объявлена один раз, в классе `.label`. Белая этикетка несёт тень без рамки. Новый объект либо становится этикеткой и берёт `.label`, либо лежит плоско.

## Shapes

Скругления небольшие и привязаны к предмету:
- **Этикетка** (6px, `label`): термоэтикетки, жёлтая плашка, подсветка строки прайса.
- **Сегмент** (7px, `segment`): выбранный сегмент внутри трека 10px с отступом 4px.
- **Поле** (8px, `field`): поля ввода и списки, квадратная кнопка FAQ, плашка ошибки.
- **Кнопка** (10px, `control`): все кнопки-действия, трек сегментированного переключателя, иконки шапки, каналы связи, кнопки панели связи.
- **Подложка** (16px, `panel`): подложка рулона под шагами.
- **Пилюля** (`pill`): только мелкие чипы выбора поломки и точки на корпусе принтера.
- Корпус принтера скруглён только сверху (14px), губа принтера скруглена на 6px.

Линии этикеточного мира:
- **Сплошная 2px `ink`:** под шапкой формы и транспортной этикетки, над ценой, над списками (условия, вопросы, отзывы, маршрут в ТЦ).
- **Пунктир 1px `ink` 25–30%:** разделы внутри этикетки, как линия отрыва.
- **Перфорация** (`.perforated`): пунктир 1px `ink` 28% между этикетками на подложке, горизонтальный на телефоне, вертикальный с `md`.
- **Точечная выноска** (`.leader`): 2px `ink` 28% между названием услуги и ценой, как в чеке.
- **Зиплок** (`.zip`): двойная линия `zip` по верхнему краю розового поля.
- **Знак логотипа:** розовая бирка 32×22 со скруглением 4px, отверстием и пятью штрихами.

## Components

### Buttons
Чёрные прямоугольники с ровной подписью, без теней и градиентов.
- **Shape:** скругление 10px, высота 48px, поля 24px, промежуток до иконки 8px; иконка 16px справа (стрелка) или слева (телефон).
- **Primary:** `ink` с белой подписью Golos 600 15px. Наведение: `ink-soft`, переход цвета 200ms.
- **Hover / Focus:** кольцо фокуса 2px `ink` с отступом 3px, на чёрном поле розовое. Недоступная кнопка: непрозрачность 60%, курсор `not-allowed`; во время отправки формы спиннер и «Отправляем…».
- **Outline:** рамка 1px `ink` 70%, подпись `ink`; наведение заливает `ink` и делает подпись белой. Ставится второй кнопкой рядом с основной («Позвонить», «2ГИС»).
- **Компактная в шапке:** высота 44px, поля 20px.
- **Каналы связи на чёрном поле:** высота 44px, поля 16px, рамка 1px `night-ink` 25% (наведение: 70% и подложка `night-ink` 5%), подпись `night-ink` 14px 600.

### Chips
- **Style:** пилюля высотой 44px (40px с `lg`), поля 14px, Golos 500 14px. На розовом поле подложка белая 55% с кольцом `ink` 10%.
- **State:** выбранный чип залит `ink` с белой подписью; наведение делает подложку белой. Фокус: кольцо 2px `ink` с отступом 2px. Внутри скрытая радиокнопка, группа оформлена `fieldset` с легендой `.field`.

### Сегментированный переключатель (`BrandSwitch`)
Выбор телефона: один компонент для розового поля и для прайса.
- **Трек:** скругление 10px, отступ 4px. На `ground` белый с кольцом `line`, на розовом поле белый 45% с кольцом `ink` 10%. Прокручивается по горизонтали без полосы прокрутки.
- **Сегменты:** высота 44px, делят ширину поровну, Golos 600, невыбранные `ink` 75% (наведение `ink`). Выбранный сегмент залит `ink`, подпись белая, скругление 7px.
- Тот же рисунок у выбора способа связи в форме, с треком `ground`.

### Cards / Containers
Термоэтикетка (`.label`) несёт факты; других карточек в системе нет.
- **Corner Style:** 6px.
- **Background:** `paper`, текст `ink`.
- **Shadow Strategy:** тень этикетки (см. Elevation & Depth).
- **Border:** нет. Внутренние разделы идут пунктиром, шапка и цена отделены сплошной линией 2px.
- **Internal Padding:** 20px, с `sm` 24–32px; у прайса-чека 28px по вертикали, с `sm` 36px.
- **Устройство:** шапка с названием сервиса узким гротеском слева и названием документа `.field` справа («ОЦЕНКА РЕМОНТА»); факты парами «название поля / значение».
- **Подложка рулона:** `liner` со скруглением 16px, отступ и промежуток 14px; этикетки на ней разделены перфорацией.

### Inputs / Fields
- **Style:** белые, высота 48px, скругление 8px, рамка 1px `ink` 25%, поля 16px, Golos 16px; подсказка `ink-mute`. Подпись сверху стилем Field `ink-mute`. У списков своя стрелка 18px (`.select`) и отступ справа 44px. Телефон набирается `tabular-nums`.
- **Focus:** рамка `ink` и мягкое кольцо 3px `esd` 60%, обводки нет.
- **Error / Disabled:** рамка `danger`, текст ошибки 14px `danger` под полем; первое ошибочное поле получает фокус. Галочка согласия 20px с `accent-color: ink`.

### Navigation
- **Шапка:** белая, закреплена сверху, нижняя граница `line`. Знак и название слева. С `lg` пункты меню Golos 500 15px `ink-soft`, наведение `ink`. С `md` телефон 15px 600 `tabular-nums` и график 12px `ink-mute`. Справа компактная основная кнопка «Записаться».
- **Мобильная шапка:** иконки 44px со скруглением 10px, наведение `ground`. Меню раскрывается белым списком Golos 500 18px с разделителями `line` и полной основной кнопкой.
- **Панель связи (`MobileBar`):** ниже 768px закреплена снизу, белая с верхней границей `line`. Три кнопки 48px в сетке 1.35fr / 1fr / 1fr: «Позвонить» основной, Telegram и WhatsApp с рамкой `ink` 20%. Учитывает `safe-area-inset-bottom`.
- **Подвал:** поле `night`; ссылки `night-soft` 14px, наведение `night-ink`; телефон `night-ink` с `tabular-nums`, наведение `esd`.

### Принтер этикеток (`EstimatePrinter`)
Сигнатура системы. Посетитель выбирает телефон (`BrandSwitch`) и поломку (чипы), термопринтер печатает этикетку-оценку.
- **Корпус:** полоса `ink` высотой 40px, скругление 14px сверху, розовый индикатор 8px и две прорези белые 15%. Под корпусом губа: чёрная полоса 16px, на 8px шире корпуса с каждой стороны, скругление 6px, с прорезью белой 10%.
- **Этикетка:** выходит из-под губы, заходит под неё на 6px, выход обрезан. Шапка «ПРОРЕМОНТ / ОЦЕНКА РЕМОНТА» над пунктиром; пары «Телефон» и «Ремонт»; сплошная линия 2px; «ЦЕНА ОТ» и цена стилем Price; пунктир; три показания «Срок», «Гарантия», «Диагностика»; штрихкод высотой 40px с кодом оценки (`quoteCode()`, например `PR-APL-DSP-4900`) и подпись «Цену фиксируем до начала ремонта» Golos 600 12px.
- **Действие:** под этикеткой основная кнопка во всю ширину «Записаться с этим ремонтом».
- **Движение:** смена выбора перепечатывает этикетку классом `.feed`: выезд из `translateY(-100%)` за 0.75s с `--ease-out-expo` (`cubic-bezier(0.16, 1, 0.3, 1)`). При загрузке этикетка уже напечатана, анимация идёт только в ответ на выбор. При `prefers-reduced-motion: reduce` анимация выключена. Область этикетки объявлена `aria-live="polite"`.
- **Этикетка заявки:** после отправки формы появляется тот же объект `.label` с номером заявки стилем Price и штрихкодом номера (`П-593256` печатается как `P593256`), без анимации печати.

### Прайс-чек (`Prices`)
Прайс печатается чеком на одной этикетке шириной до 36rem. По центру название сервиса, адрес 12px `ink-mute` и строка `.field` «Прайс · бренд · цены «от»». Строка услуги: название Golos 600, точечная выноска, цена узким гротеском 1.6rem; ниже показания срока и гарантии 12px. Строка целиком служит кнопкой записи: наведение и фокус дают подложку `ground` со скруглением 6px, а с `md` проявляют «Записаться →». Внизу штрихкод `PRICE-<бренд>` высотой 36px.

### Штрихкод (`Barcode`)
Настоящий Code 128 (набор B) из `src/lib/barcode.ts`: SVG из прямоугольников цвета текста, `shape-rendering: crispEdges`, модуль равен целому числу пикселей, поэтому код читается сканером прямо с экрана. Под штрихкодом код стилем Code. Кодируются только осмысленные значения: код оценки, код прайса, номер заявки, код пункта приёма (`VVO-LUGOVAYA-21A-221`). Набор B принимает только ASCII 32–126, кириллица переводится в латиницу.

### Предупреждения и демо-режим
- **Демо-полоса** (`DemoBanner`): `caution` во всю ширину над шапкой, Golos 500 13px `ink`, иконка треугольника 16px.
- **Плашка демо-отзывов:** `caution`, скругление 6px, поля 16px и 12px, Golos 500 14px, та же иконка.
- **Флаг `SITE_IS_DEMO`:** пока он включён, над шапкой висит демо-полоса, страница закрыта от индексации (`robots: noindex, nofollow`), разметка JSON-LD (`LocalBusiness`, `FAQPage`) не выводится.

### Вопросы (`Faq`)
Аккордеон на `<details>` без JS. Список открывается сплошной линией 2px `ink`, вопросы Golos 600 18px разделены линиями `line`. Справа квадратная кнопка 36px со скруглением 8px и рамкой `ink` 20%; плюс поворачивается на 45° за 300ms.

## Do's and Don'ts

### Do:
- **Do** держите розовое поле `esd` плоским и во всю ширину, только на первом и последнем экране, с двойной линией `.zip` по верхнему краю.
- **Do** выносите проверяемые факты (цену, срок, гарантию, адрес, номер заявки) на белую термоэтикетку `.label`.
- **Do** делайте крупные кнопки чёрными прямоугольниками: `ink`, скругление 10px, высота 48px.
- **Do** набирайте заголовки и цены классом `.display`: Fira Sans Extra Condensed 800 прописными, интерлиньяж 0.96.
- **Do** пропускайте через `isReading()` любое значение, которое может оказаться словом, прежде чем ставить `.readout`; телефоны набирайте Golos с `tabular-nums`.
- **Do** выводите цены только через `formatPrice()`, с разрядами через U+00A0.
- **Do** рисуйте каждый штрихкод компонентом `Barcode` из осмысленного кода.
- **Do** отдавайте чёрное поле `night` записи и подвалу, жёлтый `caution` только предупреждениям.
- **Do** пишите тексты по навыку `stop-slop`: без длинного тире в прозе, в действительном залоге, без «не X, а Y».

### Don't:
- **Don't** ставьте названия полей `.field` надзаголовками над заголовками секций.
- **Don't** скругляйте крупные кнопки в пилюлю: пилюля остаётся мелким чипам.
- **Don't** добавляйте вторую тень, рамку вокруг этикетки или жёсткую тень со смещением.
- **Don't** уплотняйте интерлиньяж `.display` ниже 0.96.
- **Don't** запускайте печать `.feed` в покое, при `prefers-reduced-motion` или на других объектах.
- **Don't** рисуйте декоративные полоски вместо штрихкода; стилизованные штрихи есть только в знаке логотипа.
- **Don't** ставьте U+202F в ценах.
- **Don't** красьте в `esd` карточки и секции посреди страницы и не делайте `caution` акцентом.
- **Don't** возвращайте шаблон категории (тёмный «техно»-герой, сток-пинцет, синяя и бирюзовая гамма, сетки иконок) и диагностическую консоль прошлого мира «Диагностика».
