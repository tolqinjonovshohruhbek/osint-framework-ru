// OSINT Framework [RU] — Данные с русскими переводами
const osintData = {
  name: "OSINT Framework",
  nameRu: "OSINT Framework",
  children: [
    {
      name: "Username",
      nameRu: "Имя пользователя",
      descRu: "Поиск аккаунтов по никнейму",
      children: [
        {
          name: "Username Search Engines",
          nameRu: "Поисковики по никнейму",
          descRu: "Сервисы для поиска аккаунтов на разных платформах",
          children: [
            { name: "Sherlock (T)", url: "https://github.com/sherlock-project/sherlock", descRu: "Мощный инструмент для поиска аккаунтов" },
            { name: "WhatsMyName", url: "https://whatsmyname.app/", descRu: "Проверка никнейма на 500+ сайтах" },
            { name: "Namechk", url: "https://namechk.com/", descRu: "Проверка доступности имени" },
            { name: "UserSearch.org", url: "https://usersearch.org/", descRu: "Поиск по соцсетям и форумам" },
            { name: "Instant Username Search", url: "https://instantusername.com/", descRu: "Мгновенная проверка никнейма" },
            { name: "IDCrawl Username Search", url: "https://www.idcrawl.com/username", descRu: "Поиск профилей по имени" }
          ]
        },
        {
          name: "Specific Sites",
          nameRu: "Конкретные сайты",
          descRu: "Поиск на определённых платформах",
          children: [
            { name: "Github User (M)", url: "https://api.github.com/users/<username>/events/public", descRu: "API событий пользователя GitHub" },
            { name: "Keybase", url: "https://keybase.io/", descRu: "Криптографические подтверждения личности" }
          ]
        }
      ]
    },
    {
      name: "Email Address",
      nameRu: "Email адрес",
      descRu: "Поиск информации по электронной почте",
      children: [
        {
          name: "Email Search",
          nameRu: "Поиск по email",
          descRu: "Сервисы поиска информации по почте",
          children: [
            { name: "Hunter", url: "https://hunter.io/", descRu: "Поиск корпоративных email" },
            { name: "GHunt (T)", url: "https://github.com/mxrch/GHunt", descRu: "OSINT по Google аккаунтам" },
            { name: "Epieos", url: "https://epieos.com/", descRu: "Поиск связанных аккаунтов" },
            { name: "theHarvester (T)", url: "https://github.com/laramies/theHarvester", descRu: "Сбор email, поддоменов, IP" },
            { name: "OSINT Industries", url: "https://osint.industries/", descRu: "Платформа OSINT исследований" }
          ]
        },
        {
          name: "Email Verification",
          nameRu: "Проверка email",
          descRu: "Валидация и проверка существования почты",
          children: [
            { name: "Reacher Demo", url: "https://reacher.email", descRu: "Проверка доставляемости email" },
            { name: "Email Reputation", url: "https://emailrep.io/", descRu: "Репутация email адреса" },
            { name: "MailboxValidator", url: "https://www.mailboxvalidator.com/demo", descRu: "Валидация почтового ящика" }
          ]
        },
        {
          name: "Breach Data",
          nameRu: "Утечки данных",
          descRu: "Проверка email в базах утечек",
          children: [
            { name: "Have I been pwned?", url: "https://haveibeenpwned.com/", descRu: "Главный сервис проверки утечек" },
            { name: "Hudson Rock", url: "https://www.hudsonrock.com/threat-intelligence-cybercrime-tools", descRu: "Разведка киберугроз" },
            { name: "DeHashed (R)", url: "https://dehashed.com/", descRu: "Поиск по базам утечек" }
          ]
        }
      ]
    },
    {
      name: "Domain Name",
      nameRu: "Доменное имя",
      descRu: "Анализ доменов и веб-сайтов",
      children: [
        {
          name: "Whois Records",
          nameRu: "WHOIS записи",
          descRu: "Информация о владельце домена",
          children: [
            { name: "DomainTools Whois", url: "http://whois.domaintools.com/", descRu: "Детальная информация WHOIS" },
            { name: "Who.is", url: "https://who.is/", descRu: "Простой WHOIS поиск" },
            { name: "ViewDNS.info", url: "http://viewdns.info/", descRu: "Набор DNS инструментов" },
            { name: "Netlas.io", url: "https://app.netlas.io/whois_domains/", descRu: "Поиск по WHOIS данным" }
          ]
        },
        {
          name: "Subdomains",
          nameRu: "Поддомены",
          descRu: "Обнаружение поддоменов сайта",
          children: [
            { name: "Sublist3r", url: "https://github.com/aboul3la/Sublist3r", descRu: "Перечисление поддоменов" },
            { name: "DNS Dumpster", url: "https://dnsdumpster.com/", descRu: "Разведка DNS и поддоменов" },
            { name: "Gobuster (T)", url: "https://github.com/OJ/gobuster", descRu: "Брутфорс директорий и поддоменов" }
          ]
        },
        {
          name: "Discovery",
          nameRu: "Обнаружение",
          descRu: "Сканирование и анализ",
          children: [
            { name: "Shodan", url: "https://www.shodan.io/", descRu: "Поисковик по устройствам IoT" },
            { name: "Censys", url: "https://censys.io/", descRu: "Сканирование интернет-хостов" },
            { name: "urlscan.io", url: "https://urlscan.io/search/#*", descRu: "Анализ и сканирование URL" }
          ]
        },
        {
          name: "Reputation",
          nameRu: "Репутация",
          descRu: "Проверка репутации домена",
          children: [
            { name: "VirusTotal", url: "https://www.virustotal.com/", descRu: "Проверка на вирусы и репутацию" },
            { name: "URL Void", url: "http://www.urlvoid.com/", descRu: "Проверка сайта в чёрных списках" },
            { name: "Sucuri SiteCheck", url: "https://sitecheck.sucuri.net/", descRu: "Проверка на малварь" }
          ]
        }
      ]
    },
    {
      name: "IP & MAC Address",
      nameRu: "IP и MAC адреса",
      descRu: "Анализ сетевых адресов",
      children: [
        {
          name: "Geolocation",
          nameRu: "Геолокация",
          descRu: "Определение местоположения по IP",
          children: [
            { name: "IP2Location.com", url: "https://www.ip2location.com/demo", descRu: "Геолокация IP адресов" },
            { name: "MaxMind Demo", url: "https://www.maxmind.com/en/home", descRu: "GeoIP база данных" },
            { name: "DB-IP", url: "https://db-ip.com/", descRu: "Бесплатная геолокация IP" }
          ]
        },
        {
          name: "Host / Port Discovery",
          nameRu: "Обнаружение хостов/портов",
          descRu: "Сканирование сети",
          children: [
            { name: "Shodan", url: "https://www.shodan.io/", descRu: "Поисковик устройств в интернете" },
            { name: "Nmap (T)", url: "https://nmap.org/download.html", descRu: "Сканер сети и портов" },
            { name: "Masscan (T)", url: "https://github.com/robertdavidgraham/masscan", descRu: "Быстрый сканер портов" }
          ]
        },
        {
          name: "Reputation",
          nameRu: "Репутация IP",
          descRu: "Проверка репутации IP адреса",
          children: [
            { name: "AbuseIPDB", url: "https://www.abuseipdb.com/", descRu: "База вредоносных IP" },
            { name: "IP Void", url: "http://www.ipvoid.com/", descRu: "Проверка IP в чёрных списках" },
            { name: "Grey Noise", url: "https://viz.greynoise.io/", descRu: "Анализ интернет-шума" }
          ]
        }
      ]
    },
    {
      name: "Images / Videos / Docs",
      nameRu: "Изображения / Видео / Документы",
      descRu: "Анализ медиафайлов",
      children: [
        {
          name: "Reverse Image Search",
          nameRu: "Обратный поиск изображений",
          descRu: "Поиск по картинке",
          children: [
            { name: "Google Images", url: "https://images.google.com/", descRu: "Поиск картинок Google" },
            { name: "TinEye", url: "http://tineye.com/", descRu: "Обратный поиск изображений" },
            { name: "Yandex Images", url: "https://www.yandex.com/images/", descRu: "Яндекс Картинки — лучший для лиц" },
            { name: "PimEyes (R)", url: "https://pimeyes.com/en", descRu: "Поиск лиц в интернете" }
          ]
        },
        {
          name: "Metadata",
          nameRu: "Метаданные",
          descRu: "Извлечение метаданных из файлов",
          children: [
            { name: "ExifTool (T)", url: "http://www.sno.phy.queensu.ca/~phil/exiftool/", descRu: "Чтение/запись метаданных" },
            { name: "Jeffrey's Exif Viewer", url: "http://exif.regex.info/", descRu: "Онлайн просмотр EXIF" },
            { name: "FotoForensics", url: "http://fotoforensics.com/", descRu: "Криминалистика изображений" }
          ]
        }
      ]
    },
    {
      name: "Social Networks",
      nameRu: "Социальные сети",
      descRu: "Поиск в социальных сетях",
      children: [
        {
          name: "Facebook",
          nameRu: "Facebook",
          descRu: "Инструменты для Facebook",
          children: [
            { name: "Facebook Graph Search", url: "https://www.facebook.com/", descRu: "Поиск в Facebook" },
            { name: "Lookup-ID.com", url: "https://lookup-id.com/", descRu: "Поиск ID профиля Facebook" }
          ]
        },
        {
          name: "Twitter",
          nameRu: "Twitter / X",
          descRu: "Инструменты для Twitter",
          children: [
            { name: "TweetDeck", url: "https://tweetdeck.twitter.com/", descRu: "Мониторинг Twitter" },
            { name: "Twint (T)", url: "https://github.com/twintproject/twint", descRu: "Скрапер Twitter без API" }
          ]
        },
        {
          name: "Instagram",
          nameRu: "Instagram",
          descRu: "Инструменты для Instagram",
          children: [
            { name: "Instagram", url: "https://www.instagram.com/", descRu: "Официальный сайт" },
            { name: "Imginn", url: "https://imginn.com/", descRu: "Анонимный просмотр историй" }
          ]
        },
        {
          name: "LinkedIn",
          nameRu: "LinkedIn",
          descRu: "Профессиональная сеть",
          children: [
            { name: "LinkedIn", url: "https://www.linkedin.com/", descRu: "Официальный сайт" }
          ]
        },
        {
          name: "Telegram",
          nameRu: "Telegram",
          descRu: "Инструменты для Telegram",
          children: [
            { name: "Telegram Web", url: "https://web.telegram.org/", descRu: "Веб-версия Telegram" },
            { name: "TGStat", url: "https://tgstat.ru/", descRu: "Статистика каналов (RU)" }
          ]
        }
      ]
    },
    {
      name: "Phone Numbers",
      nameRu: "Телефонные номера",
      descRu: "Поиск информации по номеру телефона",
      children: [
        {
          name: "Phone Lookup",
          nameRu: "Поиск по номеру",
          descRu: "Определение владельца номера",
          children: [
            { name: "Truecaller", url: "https://www.truecaller.com/", descRu: "Определитель номера" },
            { name: "NumLookup", url: "https://www.numlookup.com/", descRu: "Бесплатный поиск по номеру" },
            { name: "PhoneInfoga (T)", url: "https://github.com/sundowndev/phoneinfoga", descRu: "Сканер телефонных номеров" }
          ]
        }
      ]
    },
    {
      name: "People Search Engines",
      nameRu: "Поиск людей",
      descRu: "Поисковые системы по людям",
      children: [
        {
          name: "General People Search",
          nameRu: "Общий поиск",
          descRu: "Поиск информации о людях",
          children: [
            { name: "Pipl", url: "https://pipl.com/", descRu: "Мощный поисковик по людям" },
            { name: "That's Them", url: "https://thatsthem.com/", descRu: "Бесплатный поиск людей (США)" },
            { name: "WebMii", url: "https://webmii.com/", descRu: "Поиск упоминаний в интернете" }
          ]
        }
      ]
    },
    {
      name: "Dark Web",
      nameRu: "Даркнет",
      descRu: "Инструменты для исследования даркнета",
      children: [
        {
          name: "Tor",
          nameRu: "Tor сеть",
          descRu: "Доступ к .onion сайтам",
          children: [
            { name: "Tor Project", url: "https://www.torproject.org/", descRu: "Официальный сайт Tor" },
            { name: "Ahmia", url: "https://ahmia.fi/", descRu: "Поисковик по .onion" }
          ]
        }
      ]
    },
    {
      name: "Exploits & Advisories",
      nameRu: "Уязвимости",
      descRu: "Базы данных уязвимостей",
      children: [
        {
          name: "Vulnerability Databases",
          nameRu: "Базы уязвимостей",
          descRu: "CVE и эксплойты",  
          children: [
            { name: "CVE Details", url: "https://www.cvedetails.com/", descRu: "База CVE уязвимостей" },
            { name: "Exploit-DB", url: "https://www.exploit-db.com/", descRu: "База эксплойтов" },
            { name: "NVD", url: "https://nvd.nist.gov/", descRu: "Национальная база уязвимостей США" }
          ]
        }
      ]
    },
    {
      name: "Geolocation",
      nameRu: "Геолокация",
      descRu: "Инструменты геолокации",
      children: [
        {
          name: "Maps",
          nameRu: "Карты",
          descRu: "Картографические сервисы",
          children: [
            { name: "Google Maps", url: "https://www.google.com/maps", descRu: "Карты Google" },
            { name: "Google Earth", url: "https://earth.google.com/", descRu: "3D карты мира" },
            { name: "Yandex Maps", url: "https://yandex.ru/maps/", descRu: "Яндекс Карты" },
            { name: "OpenStreetMap", url: "https://www.openstreetmap.org/", descRu: "Открытые карты" }
          ]
        },
        {
          name: "Geolocation Tools",
          nameRu: "Инструменты геолокации",
          descRu: "Определение местоположения",
          children: [
            { name: "GeoGuessr", url: "https://www.geoguessr.com/", descRu: "Игра для тренировки геолокации" },
            { name: "SunCalc", url: "https://www.suncalc.org/", descRu: "Позиция солнца для геолокации" }
          ]
        }
      ]
    }
  ]
};
