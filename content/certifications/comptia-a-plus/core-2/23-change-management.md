---
title: 23. 🏗️ Управление на промените (Change Management)
updated: 2026-10-18
---

👉 Никой техник не променя сървъри/мрежа „на своя глава“ — промяната се **планира, тества и одобрява**.

## 23.1 Понятия
- **Change** — добавяне, промяна или премахване, засягащо ИТ услугите.
- **Change Authority** — кой одобрява.
- **RFC – Request for Change / CR – Change Request** — официалната форма.
- **CAB – Change Advisory Board** — съвет от мениджъри и експерти, които одобряват/отхвърлят и определят **Maintenance Window (прозорец за поддръжка)**.
- **Sandbox** — изолирана тестова среда.

| Тип промяна | Описание |
|---|---|
| **Standard** | Рутинна, нисък риск, предварително одобрена — без CAB |
| **Normal** | Изисква планиране и одобрение |
| **Emergency** | Действа се веднага; документира се след това |

## 23.2 🎯 7-те стъпки на RFC
1. **Document the Reason for the Change** — причина и предложено решение.
2. **Determine the Scope** — Minor или Major; засегнати системи/отдели; време и ресурси.
3. **Perform a Risk Analysis** — вероятност от срив и цена на престоя.
4. **Create a Rollback / Backout Plan** — 🎯 **НАЙ-ВАЖНОТО**: как да се върне работещото състояние (Backup непосредствено преди).
5. **Present to the CAB for Approval** — одобрение и Maintenance Window.
6. **Implement the Change** — при провал → Rollback планът.
7. **Verify and Document the Outcome** — тестове, затваряне на RFC.

## 23.3 📄 Документи към RFC
| Документ | Въпрос |
|---|---|
| **Business Case / Justification (бизнес обосновка)** | Защо ни трябва? |
| **Risk Analysis / Assessment** | Какво може да се счупи? |
| **Implementation / Change Plan** | Как ще го направим? |
| **Rollback / Backout Plan** | Как да спасим положението? |
| **Test / Verification Plan** | Как да докажем, че работи? |
| **End-User Notification** | Кога системата няма да е достъпна? |

## 23.4 ✅ End User Acceptance / UAT
**UAT – User Acceptance Testing (потребителско приемно тестване)** — хората, които ще работят с промяната, потвърждават, че тя върши работа: съответствие с бизнес нуждите, откриване на пропуснати бъгове, по-малко съпротива.

