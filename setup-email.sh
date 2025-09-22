#!/bin/bash

echo "🚀 Настройка отправки email для Pixward Games"
echo "=============================================="
echo ""

# Проверяем, существует ли .env.local
if [ -f ".env.local" ]; then
    echo "⚠️  Файл .env.local уже существует!"
    echo "Хотите перезаписать его? (y/n)"
    read -r response
    if [[ "$response" != "y" ]]; then
        echo "❌ Отменено. Файл .env.local не изменен."
        exit 0
    fi
fi

echo "📧 Выберите провайдера email:"
echo "1) Gmail (рекомендуется)"
echo "2) SendGrid"
echo "3) Mailgun"
echo "4) Yandex"
echo "5) Другой SMTP"
echo ""
read -p "Введите номер (1-5): " provider

case $provider in
    1)
        echo ""
        echo "📝 Настройка Gmail:"
        echo "1. Включите двухфакторную аутентификацию в Google аккаунте"
        echo "2. Создайте пароль приложения:"
        echo "   - Настройки Google → Безопасность → Пароли приложений"
        echo "   - Выберите 'Почта' и 'Другое устройство'"
        echo "   - Введите название: 'Pixward Games'"
        echo "   - Скопируйте 16-символьный пароль"
        echo ""
        read -p "Введите ваш Gmail адрес: " email
        read -p "Введите пароль приложения: " password
        
        cat > .env.local << EOF
# SMTP Configuration for Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=$email
SMTP_PASS=$password
EOF
        ;;
    2)
        echo ""
        read -p "Введите SendGrid API ключ: " api_key
        
        cat > .env.local << EOF
# SMTP Configuration for SendGrid
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=$api_key
EOF
        ;;
    3)
        echo ""
        read -p "Введите Mailgun SMTP username: " username
        read -p "Введите Mailgun SMTP password: " password
        
        cat > .env.local << EOF
# SMTP Configuration for Mailgun
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=$username
SMTP_PASS=$password
EOF
        ;;
    4)
        echo ""
        read -p "Введите ваш Yandex email: " email
        read -p "Введите пароль: " password
        
        cat > .env.local << EOF
# SMTP Configuration for Yandex
SMTP_HOST=smtp.yandex.ru
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=$email
SMTP_PASS=$password
EOF
        ;;
    5)
        echo ""
        read -p "Введите SMTP хост: " host
        read -p "Введите SMTP порт (обычно 587): " port
        read -p "Введите SMTP username: " username
        read -p "Введите SMTP password: " password
        read -p "Использовать SSL? (true/false): " secure
        
        cat > .env.local << EOF
# SMTP Configuration
SMTP_HOST=$host
SMTP_PORT=$port
SMTP_SECURE=$secure
SMTP_USER=$username
SMTP_PASS=$password
EOF
        ;;
    *)
        echo "❌ Неверный выбор. Выход."
        exit 1
        ;;
esac

echo ""
echo "✅ Файл .env.local создан!"
echo ""
echo "🔄 Перезапустите сервер для применения настроек:"
echo "   npm run dev"
echo ""
echo "🧪 Для тестирования:"
echo "   1. Откройте http://localhost:3000"
echo "   2. Заполните форму предварительной регистрации"
echo "   3. Проверьте консоль сервера на наличие ошибок"
echo "   4. Проверьте почту vs@pixward.com"
echo ""
echo "📚 Подробная инструкция: EMAIL_SETUP_GUIDE.md"
