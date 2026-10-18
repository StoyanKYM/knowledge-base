---
title: 5. 🔐 Сигурност в Windows
updated: 2026-10-18
---

## 5.1 🗂️ NTFS vs Share Permissions

| | Share Permissions (права за споделяне) | NTFS Permissions (файлови права) |
|---|---|---|
| Кога важат | **Само през мрежата** (`\\server\share`) | **Винаги** — локално и през мрежата |
| Файлова система | Всяка (дори FAT32) | Само NTFS |
| Опции | Read, Change, Full Control | Read, Write, List Folder Contents, Read & Execute, Modify, Full Control |
| Inheritance (наследяване) | — | ✅ От родителската папка |

🎯 **Изчисляване на Effective Permissions (ефективни права):**
1. **NTFS + NTFS = сбор** (групи А: Read + Б: Write → Read + Write).
2. **Explicit DENY (изрична забрана) винаги печели.**
3. **Мрежов достъп: Share + NTFS = НАЙ-ОГРАНИЧАВАЩОТО (Most Restrictive).**
4. **Explicit (изрични) права имат приоритет пред наследените.** Преместването в друга папка може да промени наследяването.

💡 Сценарий: Share = Read, NTFS = Full Control. Локално → Full Control; през мрежата → **Access Denied** при запис (само Read).

## 5.2 🔒 Криптиране

| Технология | Какво криптира | Особености |
|---|---|---|
| **EFS – Encrypting File System** | **Отделни файлове и папки** (NTFS) | ❌ Не е в Home изданието |
| **BitLocker** | **Целия фиксиран диск** (FDE – Full Disk Encryption) | ❌ Не е в Home; ключът се пази в **TPM** |
| **BitLocker To Go** | **Преносими** носители (USB, SD) | — |
| **SSL/TLS** | Данни **в движение** по мрежата | — |

**📦 Състояния на данните (Data States):**

| Състояние | Описание | Защита |
|---|---|---|
| **Data at Rest (в покой)** | Записани на HDD/SSD | BitLocker / FDE, EFS |
| **Data in Transit / Motion (в движение)** | Пътуват по мрежата | TLS/SSL, HTTPS, SSH, VPN |
| **Data in Use / Processing (в употреба)** | В RAM, CPU кеш, регистри | — |

- **Encrypted (криптирани)** — четат се само с правилния ключ; **Unencrypted / Plain Text / Clear Text** — всеки може да ги прочете.

## 5.3 🛡️ Вградена защита
- **Microsoft Defender Antivirus** — вграден, работи постоянно, управлява се от **Windows Security**; защитава от вируси и други заплахи.
- **Windows Defender Firewall** — **Host-based / Personal / Software Firewall**; `wf.msc` за Inbound/Outbound правила. Винаги включен (изключва се временно само за диагностика).
- **UAC – User Account Control (контрол на потребителските акаунти)** — пита за потвърждение при действия с повишени права.

## 5.4 👤 Account Management (управление на акаунтите)
- **Restricting User Permissions (Least Privilege)** — минимални права.
- **File Permission Control** — кой може да чете/променя/трие.
- **Сменете акаунта и паролата по подразбиране** (Windows: Administrator; Linux/macOS: root).
- **Disable Guest Account** — изключен по подразбиране в Windows 10/11.
- **Restricting Login Times (часове за вход)** — напр. пн–пт 9–17.
- **Failed Login Attempts (неуспешни опити)** — заключване/изчакване → защита от Brute Force.
- **Concurrent Logins (едновременни сесии)** — ограничаване.
- **Timeouts & Screen Locks** — автоматично заключване.

## 5.5 🔑 Пароли и крайни потребители
- **Password Policy:** Local Group Policy Editor → Windows Settings → Account Policies → Password Policy (сложност, изтичане).
- **BIOS/UEFI пароли.**
- **Lock Screen: Win + L**; Screensaver Lock.
- **Clean Desk Policy (политика за чисто бюро)** — защита на **PII**.
- **Disable AutoRun / AutoPlay** — автоматичното изпълнение на CD/USB е сериозна уязвимост.
- **Disable Unused Services** — всяка неизползвана услуга да се изключи.

