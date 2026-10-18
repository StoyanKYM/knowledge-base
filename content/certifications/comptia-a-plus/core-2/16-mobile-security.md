---
title: 16. 📱 Сигурност на мобилни устройства
updated: 2026-10-18
---

## 16.1 🔓 Методи за отключване (Screen Lock)
- **Swipe Gesture (плъзгане)** — без защита;
- **PIN** — 4–8 цифри;
- **Password (парола)** — всякакви символи;
- **Pattern (шаблон)** — свързване на 9 точки;
- **Biometrics** — пръстов отпечатък, Face ID.

## 16.2 🏢 Модели на внедряване (Deployment Models)

| Модел | Собственост | Употреба |
|---|---|---|
| **COBO – Corporate Owned, Business Only** | Фирмата | **Само** служебна |
| **COPE – Corporate Owned, Personally Enabled** | Фирмата | Служебна + лична |
| **CYOD – Choose Your Own Device** | Фирмата | Служителят избира от одобрен списък |
| **BYOD – Bring Your Own Device** | Служителят | Личното устройство в корпоративната мрежа (+ MDM/MAM) |

## 16.3 🛡️ Hardening (укрепване) на мобилни устройства
- Последна версия на ОС, **антивирус**, обучение на потребителя;
- Приложения **само от официалните магазини**;
- ❌ **Без Root / Jailbreak**;
- Изключване на ненужни функции (Wi-Fi, Bluetooth); 💡 кабелната връзка е по-сигурна от безжичната;
- Криптиране на глас и данни; **Full Disk Encryption**;
- Силни пароли или биометрия;
- **Find My Phone**, **Remote Lock / Remote Wipe**, проследяване;
- **Отдалечен Backup** (iCloud, Google Sync, OneDrive, Dropbox, Box);
- Свързване само към защитени мрежи (поне **AES**, по възможност **WPA3**);
- Добра политика за сигурност на мобилните устройства.

## 16.4 ⚠️ Rooting, Jailbreaking, Sideloading
- **Rooting (Android)** — root права (Android е базиран на Linux) → сериозни уязвимости.
- **Jailbreaking (iOS/iPadOS)** — „бягство“ от контрола на Apple.
- **Developer Mode** — разширени настройки и логове.
- 🎯 **MDM открива и блокира** Jailbroken/Rooted устройства и Developer Mode от корпоративните ресурси.
- **Sideloading** — инсталиране **извън официалния магазин** (Android: **.apk**; iOS: инструменти за разработчици или Jailbreak).
- **Bootleg App Stores** — пиратски версии на легитимни приложения.

