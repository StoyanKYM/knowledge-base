---
title: 6. 🍎 macOS
updated: 2026-10-18
---

## 6.1 🛠️ Основни инструменти

| macOS | Windows еквивалент | Описание |
|---|---|---|
| **Finder** | File Explorer | Файлов мениджър; активното приложение при логване |
| **Dock** | Taskbar | Лента с приложения и Trash |
| **System Settings** (стар: System Preferences) | Control Panel / Settings | Мрежи, потребители, Firewall, дисплеи |
| **Activity Monitor** | Task Manager | CPU, RAM, диск, мрежа; Force Quit |
| **Force Quit (Cmd + Option + Esc)** | End Task | Спиране на забило приложение |
| **Terminal** | Command Prompt | Unix CLI (`ls`, `cd`, `sudo`); 🎯 **Zsh** по подразбиране от **Catalina (2019)**, преди — Bash |
| **Disk Utility** | Disk Management | Erase, Partition, **First Aid** (поправка) |
| **Time Machine** | File History / System Restore | 🎯 **Вграден Backup** — почасови/дневни/седмични копия на **външен диск** или NAS |
| **FileVault** | **BitLocker** | Пълно криптиране на диска |
| **Keychain** | Credential Manager | Пароли, Wi-Fi ключове, сертификати |
| **Spotlight (Cmd + Space)** | Windows Search | Търси файлове, съдържание, уеб, смята |
| **Mission Control** | Task View | Всички прозорци и **Spaces (виртуални десктопи)** |
| **Screen Sharing** | Remote Desktop | Вграден **VNC** клиент |

## 6.2 🔐 Сигурност и екосистема
- **Gatekeeper** — позволява само приложения от **идентифицирани разработчици** (защита от малуер).
- **RSR – Rapid Security Responses (бързи отговори за сигурност)** — малки спешни кръпки между редовните ъпдейти (напр. iOS 16.4.1 (a)), често без рестарт.
- **Apple ID / Apple Account** — имейл + парола за цялата екосистема.
- **iCloud** — синхронизация и Backup (5 GB безплатно); **Find My**.
- **iMessage**, **FaceTime**, **AirDrop** (файлове през Bluetooth/Wi-Fi), **Continuity** (безпроблемна работа между Apple устройствата).
- **Apple Business Manager** — корпоративно управление на Mac.
- **Gestures (жестове)** — тракпад/мишка.
- **macOS Firewall:** **PF (Packet Filter)**.

## 6.3 📦 Инсталиране на приложения

| Формат | Описание | Инсталация |
|---|---|---|
| **DMG – Disk Image (дисков образ)** | Виртуален диск (като .iso) — „контейнер“, не инсталатор | **Drag-and-Drop** в Applications → **Eject** |
| **PKG – Package Installer** | Истински инсталатор (вместо setup.exe) — Wizard стъпки | Изисква **администраторска парола**, често рестарт; за сложни програми и драйвери |
| **.app** | Bundle (пакет) — различно от .exe | — |
| **App Store** | Официалният и най-сигурен източник | — |

## 6.4 💾 Файлови системи
- **APFS – Apple File System** — модерна, по подразбиране, за **SSD/Flash**; криптиране, Journaling (журналиране), бързо клониране.
- **HFS+ (Mac OS Extended)** — по-старата, за механични HDD.

## 6.5 🖥️ Хардуер
- **Apple Silicon (M1/M2/M3)** — **ARM** архитектура; старите Mac — Intel (x86).
- ⚠️ **Boot Camp** (Windows на отделен дял, Dual-boot) — само за **Intel Mac**; не се поддържа на Apple Silicon.
- **Thunderbolt 3/4** използва **USB-C** конектор.
- Устройства: Mac — **macOS**; iPad — **iPadOS**; iPhone — **iOS**; Apple Watch — **watchOS**.

