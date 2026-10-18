---
title: 22. 📋 Оперативни процедури: тикети, активи, документация
updated: 2026-10-18
---

## 22.1 🎫 Ticketing System (система за заявки)
| Тип | Описание |
|---|---|
| **Request (заявка)** | Искане за нещо — акаунт, монитор, принтер |
| **Incident (инцидент)** | Еднократен или изолиран проблем |
| **Problem (проблем)** | Повтарящ се при много потребители/устройства |

- **Категории:** Hardware, Software/Applications, Network/Connectivity, **Account/Access** (нулиране на пароли — най-честият тикет), Security.
- 💡 Събирайте максимум информация и задавайте уточняващи въпроси.
- **Feedback в тикета:** Problem Description, Progress Notes, Problem Resolution.

**Приоритети (две често срещани схеми):**

| Ниво | Описание | Пример | SLA |
|---|---|---|---|
| 🔥 **P0 – Emergency / Blocker** | „Къщата гори“ — критична услуга за цялата компания | Онлайн магазинът не приема плащания | Всичко спира |
| 🔴 **P1 – Critical** | Бизнесът спира | Цялата мрежа е долу, сървър криптиран | 15–30 мин |
| 🟠 **P2 – High** | Голяма група е засегната | Счетоводството не може да печата | Часове |
| 🟡 **P3 – Medium/Normal** | Индивидуален проблем | Един компютър не се включва | В работния ден |
| 🟢 **P4 – Low** | Козметичен | „Иконата е малко вляво“, нова мишка | Дни |

- **Major Incident** — автоматично P0/P1, кризисен щаб, уведомяване на ръководството.
- **Standard Incident** — рутинен, с готов наръчник (забравена парола).
- **Pending Triage** — още не е приоритизиран.
- **High / Medium / Low** за планирани задачи — до края на деня / седмицата / „когато остане време“.

**🪜 Escalation (ескалация):**
- **Functional (функционална)** — към по-голяма експертиза: **Tier 1** (Help Desk) → **Tier 2** (Desktop Support / Network Admin) → **Tier 3** (Engineers / Developers).
- **Hierarchical (йерархична)** — уведомяване на мениджмънта при критични инциденти.

**🔄 Ticket Lifecycle:** **New/Open → In Progress → On Hold/Pending → Resolved → Closed**.

💡 **Documentation е златното правило: ако не е документирано, не се е случило.**

## 22.2 ⏱️ SLA – Service Level Agreement
- **Uptime / Availability** — в „деветки“ (99.9% ≈ 43 мин престой на месец);
- **Response Time (време за реакция)** — признаване на проблема;
- **Resolution Time (време за разрешаване)** — пълно оправяне;
- **SLA Breach (нарушение)** → автоматична **ескалация**; неустойки от доставчика.

## 22.3 🏷️ Asset Management (управление на активите)
- **Hardware Assets** и **Software Assets (лицензи)** — да не се плаща за неизползвани лицензи и да няма нелицензиран софтуер.
- **Asset Tag** — баркод/RFID на устройството.
- **CMDB – Configuration Management Database** — централна база: Assigned Users, Warranty, Licensing.
- **Lifecycle:** **Procurement (закупуване) → Deployment (внедряване) → Maintenance (поддръжка) → Retirement (извеждане) → Disposal (унищожаване + Data Destruction)**.
- Ползи: сигурност („не можеш да защитиш това, което не знаеш, че съществува“), финанси, **Compliance (одити)**.

## 22.4 📚 Документация
- **Knowledge Base (KB)** — статии, FAQ, наръчници, ръководства, видео, Troubleshooting guides.
- **Network Topology Diagrams** — картата на мрежата.
- **SOP – Standard Operating Procedure** — инструкции стъпка по стъпка за повтарящи се задачи (чеклисти). 🎯 Инсталиране на **вътрешен (custom)** софтуер → **SOP** от KB.
- **Incident Reports** — **Root Cause Analysis (анализ на първопричината)**.
- **AUP** — вижте [27.3](27-privacy-licensing-policies.md).

