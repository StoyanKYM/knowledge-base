---
title: 26. 🚨 Реагиране на инциденти и форензика
updated: 2026-10-18
---

## 26.1 🎯 6-те стъпки на Incident Response (по NIST)
**IRP – Incident Response Plan** — официалният наръчник. **CSIRT – Computer Security Incident Response Team** — екипът, „който тича към пожара“; техникът от Tier 1 ескалира към тях.

| # | Стъпка | Действия | 🎯 Ключови думи |
|---|---|---|---|
| 1 | **Preparation (подготовка)** | Единствената стъпка **ПРЕДИ** инцидента: политики, обучение, Backup, екип | *Before an incident occurs* |
| 2 | **Detection & Analysis / Identification** | Логове, антивирус, Firewall; истинска атака или **False Positive** | *Identifying a breach, analyzing logs* |
| 3 | **Containment (овладяване)** | **Изключване от мрежата**. ⚠️ **Не изключвай захранването** — губят се данните в RAM | *Isolate, disconnect, prevent spreading* |
| 4 | **Eradication (изкореняване)** | Премахване на малуера, затваряне на акаунти, кръпки, често Clean Install | *Remove the malware* |
| 5 | **Recovery (възстановяване)** | От чисти Backup-и, тестове, засилен мониторинг | *Restore from backups, return to production* |
| 6 | **Lessons Learned (научени уроци)** | Доклад след инцидента → обновява стъпка 1 | *Post-incident review, updating policies* |

## 26.2 🔍 Digital Forensics (дигитална форензика)
„Криминалистика за компютърния свят“ — събиране и анализ на доказателства по **правно издържан** начин.

- **Chain of Custody (верига на съхранение)** — писмен запис на **всеки, който е докосвал доказателството**: какво е (сериен номер), кога и къде е взето, кой го е взел, къде се пази, **Check-out / Check-in**. ⚠️ Прекъсната верига → доказателството се отхвърля.
- **Legal Hold (правно задържане)** — разпореждане незабавно да се **спре триенето/промяната** на свързаните данни.
- **Data Preservation (запазване на данни)** — отделна политика за запазване с конкретна цел.

## 26.3 📉 Order of Volatility (ред на нестабилност — RFC 3227)
👉 **Първо се събират данните, които изчезват най-бързо.**
1. **CPU Cache, Registers, Routing Table**;
2. **RAM** — пароли, ключове, процеси, връзки;
3. **Network State & Temporary File Systems**;
4. **HDD/SSD (Persistent Storage)**;
5. **Remote Logs & Monitoring (SIEM)**;
6. **Physical Media (Backup ленти, DVD)**.

🎯 При работещ компрометиран компютър: **не рестартирай → снимка на екрана → Memory Dump (RAM) → едва след това Imaging на диска**.

## 26.4 📋 Data Collection Procedures
- 🛡️ **Capture and Hash System Images** — образ + **хеш** (MD5/SHA) за доказване на непроменимост;
- **Analyze with Tools** — EnCase, Autopsy (без промяна на оригинала);
- **Review Network Traffic and Logs** — Firewall, рутери, сървъри;
- 📹 **Screenshots & Video**; **Take Statements (показания)**;
- 📝 **Review Licensing** (пиратският софтуер може да е Backdoor); **Track Man-hours and Expenses** — за застраховки и съд.

