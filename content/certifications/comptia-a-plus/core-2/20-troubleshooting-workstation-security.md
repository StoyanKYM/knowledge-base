---
title: 20. 🧹 Отстраняване на проблеми със сигурността на работни станции
updated: 2026-10-18
---

## 20.1 🎯 CompTIA 7-те стъпки за премахване на малуер
1. **Investigate and Verify Malware Symptoms (идентифицирай симптомите)** — pop-ups, забавяне, пренасочване, заключени файлове; сканиране.
2. **Quarantine the Infected System (изолирай)** — 🎯 **ПЪРВОТО действие:** извади мрежовия кабел и изключи Wi-Fi (логическо/физическо изолиране).
3. **Disable System Restore (изключи възстановяването)** — малуерът се крие в Restore Points; изключи и облачния/външния Backup.
4. **Remediate (излекувай):**
   - **4A — Update Anti-malware** — дефинициите се свалят на флашка от чист компютър (системата е офлайн);
   - **4B — Scan and Remove** — в **Safe Mode** или **WinPE / Bootable Scanner**, за да не е активен малуерът в RAM.
5. **Schedule Scans and Run Updates** — автоматично сканиране + Windows Update.
6. **Enable System Restore and Create a Restore Point** — нова „здрава“ точка; включи отново Backup-ите.
7. **Educate the End User (обучи потребителя)** — фишинг, банери, пиратски софтуер.

## 20.2 🌐 Признаци в браузъра и системата
- **Browser Redirection** — ръчно или автоматично; ⚠️ проверете **hosts файла** (`C:\Windows\System32\drivers\etc\hosts` — изпълнява се преди DNS).
- **Certificate Warnings** — сканирайте, преинсталирайте браузъра; странен език без прокси = възможна инфекция.
- **Alerts and Notifications** — Stage 1 Dropper → Stage 2 Payload.
- **OS Update Failures** и **File System Errors** — възможна инфекция; файлове, имитиращи системни (`svchost` vs `svchosts`).

