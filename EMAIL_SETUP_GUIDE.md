# Настройка реальной отправки email

## 1. Создайте файл .env.local в корне проекта

```bash
# SMTP Configuration for email sending
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 2. Настройка Gmail (рекомендуется)

### Шаг 1: Включите двухфакторную аутентификацию
1. Перейдите в настройки Google аккаунта
2. Безопасность → Двухэтапная аутентификация
3. Включите её

### Шаг 2: Создайте пароль приложения
1. В настройках Google аккаунта
2. Безопасность → Пароли приложений
3. Выберите "Почта" и "Другое устройство"
4. Введите название: "Pixward Games"
5. Скопируйте сгенерированный пароль
6. Используйте этот пароль в SMTP_PASS

### Шаг 3: Обновите .env.local
```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-actual-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

## 3. Альтернативные провайдеры

### SendGrid (для продакшена)
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### Mailgun
```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASS=your-mailgun-smtp-password
```

### Yandex
```bash
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=587
SMTP_USER=your-email@yandex.ru
SMTP_PASS=your-password
```

## 4. Проверка работы

После настройки:
1. Перезапустите сервер: `npm run dev`
2. Откройте http://localhost:3000
3. Заполните форму предварительной регистрации
4. Проверьте консоль сервера на наличие ошибок
5. Проверьте почту vs@pixward.com

## 5. Безопасность

- Никогда не коммитьте .env.local в git
- Используйте сильные пароли
- В продакшене используйте переменные окружения хостинга
- Регулярно обновляйте пароли приложений
