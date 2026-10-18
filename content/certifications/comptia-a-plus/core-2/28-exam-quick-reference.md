---
title: 28. 🎯 Бърз изпитен справочник: сценарий → отговор
updated: 2026-10-18
---

| Сценарий | ✅ Отговор |
|---|---|
| Повредени системни файлове, Windows зарежда | `sfc /scannow` |
| SFC не успява | `dism /online /cleanup-image /restorehealth` |
| Лоши сектори, щракащ диск | `chkdsk /r` |
| „OS Not Found“, дискът се вижда в BIOS | `bootrec /rebuildbcd` |
| Повреден MBR / Boot-сектор вирус (Legacy) | `bootrec /fixmbr` |
| Дялове през CLI | `diskpart` |
| Смяна на буква на флашка | **Disk Management** |
| Дефрагментиране на SSD | ❌ Никога — **TRIM** |
| Мапване на мрежов диск | `net use Z: \\server\share` |
| IP 169.254.x.x | **APIPA** → `ipconfig /release` + `/renew` |
| Работи по IP, не по име | **DNS** → `nslookup`, `ipconfig /flushdns` |
| Къде прекъсва връзката | `tracert` |
| Загуба на пакети на всеки hop | `pathping` |
| Скрити връзки / троянец | `netstat` |
| Нова политика веднага | `gpupdate /force` |
| Кои политики са приложени | `gpresult /r` |
| Копиране, което продължава след прекъсване | `robocopy` |
| Убиване на процес през CLI | `taskkill /f /pid` |
| Защо услуга е спряла | **Event Viewer** |
| Дългосрочен Baseline и Alerts | **Performance Monitor** |
| Кои файлове/IP ползва процесът | **Resource Monitor** |
| Забило приложение | **Task Manager → End Task** |
| Печатът не работи | Рестарт на **Print Spooler** (services.msc) |
| Първият инструмент при неуспешно зареждане | **Startup Repair** |
| Тест дали проблемът е от драйвер/вирус | **Safe Mode** |
| Обновяване на антивирус в Safe Mode | **Safe Mode with Networking** |
| Връщане след лош драйвер без загуба на файлове | **System Restore** |
| BSOD след месечния ъпдейт | **Uninstall Updates** |
| Black screen — отговаря ли системата? | **Win + Ctrl + Shift + B** |
| Достъп до WinRE | **Shift + Restart** |
| Група А: Read + група Б: Write | **Read + Write** (NTFS сбор) |
| Explicit Deny + Full Control | **Deny печели** |
| Share Read + NTFS Full Control през мрежата | **Read** (най-ограничаващото) |
| Ред на GPO | **LSDOU** — OU печели |
| Криптиране на цял диск (Windows) | **BitLocker** (+ TPM) |
| Криптиране на флашка | **BitLocker To Go** |
| Криптиране на отделни файлове | **EFS** |
| macOS Backup | **Time Machine** |
| macOS криптиране на диска | **FileVault** |
| macOS пароли | **Keychain** |
| macOS — само приложения от идентифицирани разработчици | **Gatekeeper** |
| macOS Force Quit | **Cmd + Option + Esc** |
| Linux права | `chmod` (755 = rwx r-x r-x) |
| Linux собственик | `chown` |
| Linux поправка на файлова система | `fsck` |
| Linux клониране/образ/изтриване | `dd` |
| Linux процеси в реално време / снимка | `top` / `ps` |
| Linux текст във файл / файлове по име | `grep` / `find` |
| Linux DNS записи (MX) | `dig` |
| Linux пароли | `/etc/shadow` |
| Linux DNS настройки | `/etc/resolv.conf` |
| Linux планирани задачи | **Cron** |
| Linux споделяне към Windows | **Samba** |
| Debian / Red Hat пакети | **APT** / **DNF (YUM, RPM)** |
| Отдалечен десктоп Windows | **RDP 3389** |
| Междуплатформен отдалечен десктоп | **VNC 5900** |
| VM със звук, USB, няколко монитора | **SPICE** |
| PowerShell команди отдалечено | **WinRM 5985/5986** |
| SSO в локална AD мрежа | **Kerberos (88)** |
| Уеб/облачен SSO, XML | **SAML (443)** |
| Wi-Fi Enterprise / VPN автентикация | **RADIUS (UDP 1812/1813)** |
| Админ достъп до рутери, криптира целия пакет | **TACACS+ (TCP 49)** |
| Заявки към AD | **LDAP 389 / LDAPS 636** |
| Неуспешен вход — часовникът се различава > 5 мин | **Kerberos / NTP** |
| Самоналагащ се малуер без потребителско действие | **Worm** |
| Маскиран като полезен софтуер | **Trojan** |
| Криптира файлове, иска откуп | **Ransomware** |
| Администраторски контрол без откриване | **Rootkit** |
| Записва клавиши | **Keylogger** |
| Изскачащ прозорец за парола в публични постове | **XSS** |
| Нежелано действие от логнат потребител | **CSRF** |
| Пример за IP Spoofing | **On-path Attack** |
| Атака чрез доверен доставчик (SolarWinds) | **Supply Chain** |
| Фишинг към CEO | **Whaling** |
| Фишинг чрез SMS / обаждане / QR | **Smishing / Vishing / Quishing** |
| Минава след служител без знанието му | **Tailgating** |
| Служителят държи вратата | **Piggybacking** |
| Шлюз с две врати срещу Tailgating | **Access Control Vestibule** |
| Фалшива Wi-Fi точка | **Evil Twin** |
| Само алармира | **IDS** |
| Блокира, In-line, DPI | **IPS** |
| Устройство, сканиращо трафика без софтуер на клиентите | **Network-based anti-malware (UTM)** |
| Не открива Zero-day | **Signature-based** |
| Първа стъпка при заразен компютър | **Quarantine** (извади кабела) |
| Защо се изключва System Restore | Малуерът се крие в Restore Points |
| Най-добра защита срещу социално инженерство | **User Education** |
| WEP / WPA / WPA2 / WPA3 | **RC4 / TKIP / AES-CCMP / SAE** |
| Wi-Fi функция, уязвима на Brute Force | **WPS** — изключи |
| Неприпокриващи се 2.4 GHz канали | **1, 6, 11** |
| Външен достъп до вътрешен сървър | **Port Forwarding** (+ статичен IP) |
| Приложенията сами отварят портове | **UPnP** — изключи |
| Публичен уеб сървър, изолиран от LAN | **Screened Subnet (DMZ)** |
| Най-сигурен DMZ модел | **Dual Firewalls** |
| DNS скрит в уеб трафика / на порт 853 | **DoH / DoT** |
| Прокси без настройка на клиента | **Transparent Proxy** |
| Прокси пред уеб сървъри (Load Balancing) | **Reverse Proxy** |
| „Connection not private“ на всички сайтове | **Грешна дата/час** (CMOS) |
| Hash mismatch | Изтегли отново от сигурен източник |
| Incognito прави ли анонимен? | ❌ Не |
| Фирмен телефон само за работа | **COBO** |
| Фирмен телефон за работа и лична употреба | **COPE** |
| Избор от одобрен списък | **CYOD** |
| Корпоративни данни на личен телефон | **MAM** (BYOD) |
| Инсталиране извън магазина | **Sideloading** (.apk) |
| Блокиране на rooted/jailbroken устройства | **MDM** |
| Изтриване на SSD | **Shredding** / **Secure Erase** / **Cryptographic Erase** |
| Демагнитизиране | Само **HDD** (не SSD/CD/DVD) |
| Чести спадове на напрежението | **Line Conditioner** |
| Мълния / пикове | **Surge Suppressor** |
| Пълно спиране на тока — безопасно изключване | **UPS** |
| Дълго прекъсване (часове) | **Generator** |
| Отдалечен рестарт на контакт в Rack | **Smart PDU** |
| Нулево превключване на батерия | **Online / Double-Conversion UPS** |
| Само RAM е захранена | **S3 Sleep** |
| RAM на диска, 0% консумация | **S4 Hibernate** (`hiberfil.sys`) |
| Изхвърляне на химикал / тонер в очите | **SDS** |
| Пожар в сървърното | **CO₂ / Class C** — без вода |
| Влажност в сървърното | **~40–60%** |
| Ниска влажност → ? | **ESD** |
| Най-бързо възстановяване | **Full** |
| Най-бърз Backup | **Incremental** |
| Full + последния архив | **Differential** |
| Full без натоварване на мрежата | **Synthetic Full** |
| Дневни/седмични/месечни архиви | **GFS** |
| 3 копия, 2 носителя, 1 извън офиса | **3-2-1** |
| Най-важен елемент на RFC | **Rollback / Backout Plan** |
| Кой одобрява промяната | **CAB** |
| Рутинна предварително одобрена промяна | **Standard Change** |
| Стъпка, която е ПРЕДИ инцидента | **Preparation** |
| Изолиране на заразената система | **Containment** |
| Кой е докосвал доказателството | **Chain of Custody** |
| Какво да се събере първо при форензика | **RAM** (Order of Volatility) |
| Спиране на триенето на данни за съд | **Legal Hold** |
| Медицински данни | **PHI / HIPAA** |
| Данни на банкови карти | **PCI-DSS** |
| Граждани на ЕС | **GDPR** |
| Какво служителят може да прави с фирмения лаптоп | **AUP** |
| Инсталиране на вътрешен софтуер | **SOP** |
| Договор с външен изпълнител за проект | **SOW** |
| Гарантиран Uptime и време за реакция | **SLA** |
| Необвързващо споразумение | **MOU** |
| Защита от копиране на дигитално съдържание | **DRM** |
| Масово активиране на Windows | **KMS / MAK** |
| Автоматично внедряване без техник | **Zero-touch (Autopilot)** |
| Мрежова инсталация на ОС | **PXE** |
| Поправка на Windows със запазване на данните | **Repair Installation (In-place Upgrade)** |
| Минимални изисквания за Windows 11 | 1 GHz 2 ядра, 4 GB, 64 GB, **TPM 2.0**, **Secure Boot** |
| Linux аналогът на Windows Service | **Daemon** |
| Скрипт за Windows (модерен) | **.ps1** |
| Скрипт за Linux | **.sh** |
| Проблем в Kernel Mode | **BSOD** |

