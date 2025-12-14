## Getting Started

First, run the development server:

```bash
npm run dev
```

```bash

```

Одна головна сторінка на ній відображені час та таймери.

Час з мілісекунд конвертується у роки, дні, години, хвилини та секунди.

```bash
У компоненті - ConvertTime.
```

## Збереження стану з використанням Zustand.

```bash
 - store
      useTimeStore - відслідковує поточний час,  запускає та зупиняє лічильник.
         тут використовую селектори - які "читають" зі стора лише ту частину стану, яка нам потрібна, що запобігає зайвим рендерам :
             const now = useTimeStore((state) => state.now);
             АБО const {...} = useStore()
             АБО useStore(selector)
```
