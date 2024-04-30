// Проверка legacy контента редактора
const urlEncodedContent = '%D0%AD%D1%82%D0%BE+%D0%BA%D0%BE%D0%BC%D0%BC%D0%B5%D0%BD%D1%82+%D0%B4%D0%BB%D1%8F+%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D1%80%D0%BA%D0%B8+%D1%80%D0%B5%D0%B4%D0%B0%D0%BA%D1%82%D0%BE%D1%80%D0%B0%0D%0A%0D%0A%23%23+321312321312%0D%0A%0D%0A*32131232131*%0D%0A*22222*%0D%0A32131231231231231232%0D%0A!%5Bimage%5D(https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0c%2Fbb%2Fa3%2F97%2Fpredator-ride-in-the.jpg)%0D%0AThis+is+coll+md+for+%5Btest%5D(https%3A%2F%2Fmedia-cdn.tripadvisor.com%2Fmedia%2Fphoto-s%2F0c%2Fbb%2Fa3%2F97%2Fpredator-ride-in-the.jpg)%0D%0A33213123121';

export default `
#  Заголовок h1
##  Заголовок h2
###  Заголовок h3
####  Заголовок h4
#####  Заголовок h5
######  Заголовок h6


## Горизонтальная линия
---


## Перевод строки

Пере-\\
вод


## Акценты

**Жирный текст**

*Курсивный текст*

~~Перечеркнутый текст~~

Текс в верхнем ^регистре^


## Цитата

> Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.


## Параграф

Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.\\
Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.

Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.


## Списки

Маркированный

- Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты
- Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.
- Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.

Нумерованный

1. Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты
2. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана.
3. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.


## Ссылки

[Обычная ссылка](https://google.com/)

[Ссылка с заголовком](https://google.com/ "title text!")

:link[Расширенная ссылка с параметрами]{title="title text!" href="https://google.com/" classNames="class1 class2" id="link" variant="base"}


## Картинка

![Штурмовик](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")


## Видео

::youtube[Видео с YouTube]{#XKfgdkcIUxw}

\`\`\`youtube XKfgdkcIUxw\`\`\`

## URL ENCODED
${urlEncodedContent}
`;
