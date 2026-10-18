---
title: 3. ⌨️ Команден ред в Windows (CLI)
updated: 2026-10-18
---

## 3.1 🔑 Поправка на системата и дисковете

| Команда | Предназначение | 🎯 Сценарий |
|---|---|---|
| **`sfc /scannow`** – System File Checker | Сканира и **подменя повредени системни файлове** на Windows от локалното хранилище | Windows **зарежда**, но има BSOD, липсващи функции, забиващи програми |
| **`dism /online /cleanup-image /restorehealth`** | Поправя **самия образ (Component Store)**, от който SFC взима файловете — тегли чисти файлове от Windows Update | **SFC не успява** да поправи |
| **`chkdsk /f`** | Поправя **логически** грешки във файловата система | Грешки във файловата система |
| **`chkdsk /r`** | Открива **лоши сектори** и възстановява четимите данни (включва /f) | Щракащ диск, грешки при четене |
| **`bootrec /fixmbr`** | Пренаписва **MBR** (Legacy BIOS; ⚠️ не за UEFI/GPT) | Повреден MBR, Boot-сектор вирус |
| **`bootrec /fixboot`** | Записва **нов Boot Sector** върху системния дял | Повреден/презаписан зареждащ сектор |
| **`bootrec /rebuildbcd`** | **Сканира диска за Windows инсталации и ги добавя в BCD** | 🎯 „Operating System Not Found“, но дискът се вижда в BIOS; *„add the Windows installation to the boot manager“* |
| **`diskpart`** | CLI алтернатива на Disk Management: `list disk`, `select disk 0`, `clean`, `create partition primary`; MBR ↔ GPT | GUI не работи; скриптово конфигуриране |
| **`format`** | Форматира дял: `format D: /fs:NTFS` | — |

- 🎯 **bootrec** поправя секторите, които казват **как да се запали** Windows; **sfc** поправя файловете **след като** Windows е запалил.
- bootrec се пуска от **WinRE** (или инсталационна флашка → Repair your computer → Troubleshoot → Command Prompt).
- ❌ `diskpart list` — грешен синтаксис (правилно е `list disk` / `list volume`) и не поправя зареждането.

## 3.2 🌐 Мрежови команди

| Команда | Предназначение |
|---|---|
| **`ipconfig`** | IP, Subnet Mask, Default Gateway |
| `ipconfig /all` | + **MAC** (Physical Address) и **DNS** сървъри |
| `ipconfig /release` + `/renew` | Освобождава и иска нов адрес от **DHCP** (🎯 при APIPA 169.254.x.x) |
| `ipconfig /displaydns` | Показва DNS кеша |
| `ipconfig /flushdns` | **Изчиства DNS кеша** (сайтът е сменил IP) |
| **`ping`** | Проверка на връзката чрез **ICMP** (4 пакета по подразбиране); `-t` без спиране, `-n` брой пакети |
| **`tracert`** | **Пътят** до целта — всеки рутер (**Hop**); **къде прекъсва** връзката |
| **`pathping`** | ping + tracert; събира статистика ~5 мин → **Packet Loss (загуба на пакети) на всеки hop** |
| **`nslookup`** | **Диагностика на DNS** — работи по IP, но не по име |
| **`netstat`** | Всички активни връзки и отворени портове (`-a` всички/слушащи, `-n` цифрово) — 🎯 откриване на зловреден софтуер |
| **`net use Z: \\server\share`** | **Мапване на мрежов диск** |
| `net share` / `net view` | Споделени папки на компютъра / ресурси в мрежата |
| `net user Ivan pass /add` | Управление на потребителски акаунти |
| **`nbtstat`** (с две „t“) | NetBIOS имена — `-n` локални, `-A [IP]` отдалечени |
| **`hostname`** | Името на текущия компютър |

**Ключови понятия:** **ICMP – Internet Control Message Protocol** (съобщения за грешки/статус); **Hop (скок)** — всеки рутер по пътя; **TTL – Time to Live** — намалява с 1 на всеки hop; при 0 пакетът се изхвърля (ICMP Time Exceeded).

### 🪜 Йерархия на тестването с ping
1. `ping 127.0.0.1` (**Loopback / localhost**) → тества **TCP/IP стека** (софтуера). Провал = проблем в ОС/драйвера.
2. `ping [собственото IP]` → тества **NIC**.
3. `ping [Default Gateway]` → тества **връзката до рутера** (кабел, Wi-Fi).
4. `ping 8.8.8.8` → тества **излизането в интернет**.
5. `ping google.com` → тества **DNS**. 🎯 Ако 4 работи, а 5 не → проблемът е 100% в **DNS**.

💡 Аналогия: ping на localhost = да провериш дали телефонът изобщо се включва, преди да се оплачеш от покритието.

## 3.3 📂 Файлове, политики, процеси, изключване

| Команда | Предназначение |
|---|---|
| `copy` | Копира **само файлове** (без подпапки) |
| `xcopy /s` | Копира директории с подпапките |
| **`robocopy`** | „Кралят“ на копирането — **продължава след прекъсване на мрежата**, запазва **NTFS права** и времеви печати |
| **`gpupdate /force`** | Прилага новите **Group Policies веднага** (иначе ~90 мин) |
| **`gpresult /r`** | Кои политики са приложени — защо нещо е блокирано |
| `tasklist` | Списък с процеси и **PID** |
| **`taskkill /f /im chrome.exe`** / `/pid 1234` | Принудително спиране на процес |
| `shutdown /s /t 60` | Изключване след 60 сек |
| `shutdown /r` / `/l` / `/h` / `/a` | Рестарт / Log off / Hibernate / Abort |
| `certutil -hashfile файл sha256` | Хеш на файл |

## 3.4 🎮 PBQ сценарии (Performance-Based Questions)
💡 Симулаторите не са истински Windows — непознати команди дават *„Command not recognized“*; синтаксисът трябва да е перфектен (`\`, не `/`).

1. **Мрежов диск:** `net use S: \\server\accounting`.
2. **APIPA адрес:** `ipconfig` → 169.254.x.x → `ipconfig /release` → `ipconfig /renew`.
3. **„Server Not Found“:** `ping 8.8.8.8` ✅ → `ping google.com` ❌ → `nslookup google.com` ❌ → сменете DNS в Adapter Properties (8.8.8.8 / 1.1.1.1) → `ipconfig /flushdns`.

