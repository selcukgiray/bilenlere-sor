# Laravel için PHP ve Nginx tabanlı bir imaj kullanıyoruz
FROM php:8.2-fpm

# Sistem bağımlılıklarını yükle
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev \
    libzip-dev git unzip \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd zip pdo pdo_mysql

# Composer yükle
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Çalışma dizinini ayarlayın
WORKDIR /var/www

# Laravel projenizi konteynıra kopyalayın
COPY ./backend /var/www

# Bağımlılıkları yükle
RUN composer install --no-dev --optimize-autoloader

# Nginx için PHP-FPM portunu açın
EXPOSE 9000

CMD ["php-fpm"]
