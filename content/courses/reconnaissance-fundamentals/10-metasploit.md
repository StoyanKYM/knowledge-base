---
title: 10. 💥 Introduction to Metasploit
updated: 2026-10-18
---

👉 Metasploit е **Exploitation и C2 Framework в едно**.

| Тип атака | Описание |
|---|---|
| **Client-side Attack** | Атакуваме хората в компанията (напр. phishing email) |
| **Server-side Attack** | Атакуваме инфраструктурата (напр. DoS/DDoS) |

![Metasploit](images/image56.png)

Metasploit е инфраструктура, която позволява достъп до инфраструктура.

| Команда | Описание |
|---|---|
| `ss -nltp` | Показва всички отворени портове на нашата Linux система |
| `ifconfig` | Показва IP адресите на нашата система |

![ss / ifconfig](images/image37.png)

👉 Идеята е да пренасочим стандартните изходи (Output) към нашата система.

**Bind Model** на комуникация — не се използва често, защото Firewall обикновено е настроен правилно:

![Bind Model](images/image24.png)

**Reverse Shell:**

![Reverse Shell](images/image51.png)

**Какво дават C2 платформите?** (Mythic / Havoc / Metasploit)
- **C2 Platform – Command and Control** — платформа, която управлява достъпа и дава допълнителни функционалности.

![C2 Platform](images/image41.png)

👉 **Metasploit = C2 Platform + Exploit Framework.**

