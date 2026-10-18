---
title: 2. ⚙️ Windows инструменти и конзоли
updated: 2026-10-18
---

## 2.1 🏃 Конзоли от Run (Win + R)

| Команда | Инструмент | Предназначение |
|---|---|---|
| `services.msc` | **Services (услуги)** | Стартиране/спиране/рестарт на услуги, тип на стартиране |
| `devmgmt.msc` | **Device Manager (диспечер на устройствата)** | Драйвери, Roll Back Driver |
| `diskmgmt.msc` | **Disk Management (управление на дискове)** | Инициализиране, дялове, букви, Basic/Dynamic, софтуерен RAID 0/1/5 |
| `eventvwr.msc` | **Event Viewer (преглед на събития)** | Логове с грешки и предупреждения — **защо** услуга е спряла |
| `perfmon.msc` | **Performance Monitor** | Дългосрочна статистика, Baseline, Alerts |
| `resmon.exe` | **Resource Monitor** | Детайли в реално време |
| `taskmgr.exe` | **Task Manager** | Бърз преглед, End Task, Startup приложения |
| `msinfo32.exe` | **System Information** | Хардуерна и софтуерна информация |
| `secpol.msc` | **Local Security Policy** | Локални политики за сигурност |
| `gpedit.msc` | **Local Group Policy Editor** | Локални групови политики (напр. Password Policy) |
| `wf.msc` | **Windows Defender Firewall with Advanced Security** | Inbound/Outbound правила |
| `optionalfeatures` | **Turn Windows Features On or Off** | Включване/изключване на компоненти на Windows |

> Допълнително (не са в бележките, но са в конспекта): `compmgmt.msc` (Computer Management), `lusrmgr.msc` (Local Users and Groups), `taskschd.msc` (Task Scheduler), `regedit` (Registry Editor), `msconfig` (System Configuration), `dxdiag` (DirectX Diagnostics), `cleanmgr` (Disk Cleanup).

## 2.2 📊 Task Manager vs Resource Monitor vs Performance Monitor
👉 Нива на детайлност: **сега → детайли в реално време → история и анализ**.

| Инструмент | Роля | 🎯 Ключова дума |
|---|---|---|
| **Task Manager** | „Първа линия“: кой процес яде CPU/RAM **в момента**; **End Task**; Startup apps | *Kill a frozen application* |
| **Resource Monitor** | „Детективът“: кои **файлове** чете/пише процесът, към кои **IP адреси и портове** се свързва; Pause/Suspend на процес | *Specific file or network connection used by a process* |
| **Performance Monitor** | „Анализаторът“: **Data Collector Sets**, **Alerts** (напр. имейл при < 10% свободно място); **НЕ** убива процеси | *Long-term analysis, Baseline, Logs and Alerts* |

## 2.3 🔁 Драйвери, актуализации и функции
- **Roll back a driver (връщане на драйвер):** Device Manager → устройството → **Roll Back Driver**.
- **Roll back an update (премахване на актуализация):** Programs and Features → **View installed updates**.
- **Turn Windows Features On or Off:** Control Panel → Programs and Features или `optionalfeatures`.

