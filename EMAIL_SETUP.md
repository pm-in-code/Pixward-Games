# Настройка отправки email

## Для работы формы предварительной регистрации необходимо настроить SMTP

### 1. Создайте файл .env.local в корне проекта:

```bash
# SMTP Configuration for email sending
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 2. Настройка Gmail (рекомендуется для разработки):

1. Включите двухфакторную аутентификацию в Google аккаунте
2. Создайте пароль приложения:
   - Перейдите в настройки Google аккаунта
   - Безопасность → Пароли приложений
   - Создайте новый пароль для "Почта"
   - Используйте этот пароль в SMTP_PASS

### 3. Альтернативные SMTP провайдеры:

#### SendGrid:
```bash
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Mailgun:
```bash
SMTP_USER=your-mailgun-smtp-username
SMTP_PASS=your-mailgun-smtp-password
```

### 4. Для тестирования (Ethereal Email):

1. Установите: `npm install ethereal-email`
2. Создайте тестовый аккаунт на https://ethereal.email
3. Используйте полученные данные в .env.local

### 5. Обновление API endpoint:

Если используете другой SMTP провайдер, обновите настройки в `pages/api/send-email.ts`:

```typescript
const transporter = nodemailer.createTransporter({
  host: 'your-smtp-host.com',
  port: 587, // или 465 для SSL
  secure: false, // true для порта 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
```

## Проверка работы

После настройки:
1. Запустите сервер: `npm run dev`
2. Откройте http://localhost:3000
3. Заполните форму предварительной регистрации
4. Проверьте почту vs@pixward.com

## Безопасность

- Никогда не коммитьте .env.local в git
- Используйте сильные пароли для SMTP
- В продакшене используйте переменные окружения хостинга
