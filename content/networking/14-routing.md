---
title: 14. 🧭 Routing (маршрутизация)
updated: 2026-10-18
---

| | Routers | Switches |
|---|---|---|
| Адреси | IP (Layer 3) | MAC (Layer 2) |
| Таблица | **Routing Table** | **MAC Address Table** |
| Скалируемост | ✅ За големи мрежи | ❌ Не за големи мрежи |

👉 Switching не работи в Интернет (милиони записи) — не е скалируемо. IP адресите + маските дават йерархичност (VLSM).

**Необходимо за routing:**
- **Subnetting** — определяне на нашия subnet и destination;
- **Default Gateway** — ако destination адресът е извън нашия subnet.

**Default Gateway** — пътят навън към други мрежи/subnet-и (обединяващо правило: всичко, което не е в локалния subnet).

**Routing протоколи** — събират информация и мапват най-добрия път: **Distance Vector**, **Link State**, **Hybrid**.

