---
title: 19. 🛠️ Отстраняване на проблеми с Windows
updated: 2026-10-18
---

## 19.1 Чести проблеми
BSOD, бавна работа, проблеми при зареждане, чести изключвания, неработещи услуги, сриващи се приложения, ниска памет, предупреждения за ресурси на USB контролера, нестабилност, „No OS Found“, бавно зареждане на профила, **Time Drift (отместване на часа)**.

## 19.2 🚦 Проблеми при зареждане

| Симптом | Решение |
|---|---|
| **Failure to boot / Invalid boot disk** | Boot Order — вътрешният диск да е първи |
| **No OS Found** | Проверете ОС и Boot Loader; **`bootrec /rebuildbcd`** (добавя инсталацията в BCD); `/fixmbr` (само Legacy); `/fixboot` |
| **GUI не се зарежда / черен екран** | Видео драйвер → **Safe Mode**. Тест: **Win + Ctrl + Shift + B** — звук = системата отговаря, графиката е замръзнала |

## 19.3 🧯 Windows RE и инструменти за възстановяване
- **Достъп:** **Shift + Restart**; или Settings → System → Recovery → Advanced startup → Restart now. 🎯 Автоматично след **2–3 неуспешни зареждания**.
- **Windows RE (Recovery Environment)** — минимална ОС на базата на **Windows PE**, на скрит дял — „чадърът“ на всички инструменти.
- Път: **Choose an option → Troubleshoot → Advanced options**.

| Инструмент | Описание | Данни |
|---|---|---|
| **Startup Repair** | **Автоматично** поправя boot файлове, BCD, регистър (като sfc/bootrec/chkdsk автоматично). 🎯 **Пуска се първи** | ✅ |
| **Safe Mode** | Минимални драйвери и услуги, базово видео. Стабилно в Safe Mode → проблемът е **софтуерен** (драйвер/вирус) | ✅ |
| Safe Mode **with Networking** | + мрежа (напр. обновяване на антивируса) | ✅ |
| Safe Mode **with Command Prompt** | Без GUI, само CLI | ✅ |
| **System Restore** | Връща **системни файлове, регистър, драйвери** към **Restore Point**. ⚠️ Изисква предварително създадена точка | ✅ **Личните файлове остават**; ❌ не възстановява приложения/данни |
| **Uninstall Updates** | Премахва последния Quality/Feature update (BSOD след ъпдейт) | ✅ |
| **System Image Recovery** | Пълно възстановяване от образ (външен диск) | ❌ Всичко се презаписва |
| **Command Prompt** | С администраторски права — `bootrec`, `chkdsk`, `sfc` | — |
| **Reset This PC** | Преинсталира Windows | Зависи от избора |

- **System Restore:** System → About → **System Protection**. 💡 Създавайте Restore Point преди рискови промени.
- **System Image:** Control Panel → System and Security → Backup and Restore → **Create a system image** (снимка на всичко, вкл. лични файлове и приложения).

## 19.4 🐢 Производителност и нестабилност

| Проблем | Решение |
|---|---|
| **Not enough RAM** | Затворете програми / добавете RAM (иначе **Paging** на бавния диск) |
| **Not enough CPU cores** | Upgrade hardware |
| **Insufficient disk space** | По-голям SSD (Pagefile и Temp се нуждаят от място) |
| **Overheating** | Подобрете въздушния поток, почистете прах, сменете термопастата (иначе **Thermal Throttling**) |
| **Slow profile load** | Изключете **Startup Programs** (Task Manager → Startup) |
| **Incorrect OS architecture** | ОС и приложенията да са **x64** (32-bit вижда ≤ 4 GB RAM) |
| **System instability / замръзване** | **Windows Memory Diagnostic** (RAM); **SFC** (повредени файлове); USB |
| **Application crashing** | Деинсталирайте и инсталирайте отново |
| **Service fails to start** | Стартирайте ръчно; за ядрени услуги — **SFC**; 🎯 **Event Viewer** показва **защо** услугата е спряла |
| **Time Drift** | **CMOS / RTC** батерия; NTP синхронизация |
| **Повреден потребителски профил** | ⚠️ Не копирайте **AppData** и **ntuser** — лесно се повреждат |

