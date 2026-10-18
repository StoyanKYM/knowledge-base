---
title: 10. 🔧 DHCP и DNS
updated: 2026-10-18
---

## 10.1 DHCP
**DHCP – Dynamic Host Configuration Protocol** — предоставя автоматично IP информация: **IP адрес, Subnet Mask, Default Gateway, DNS Server** и др. Без DHCP тези неща се въвеждат ръчно в мрежовата карта. **Industry Standard.**

| | Dynamic IP | Static IP |
|---|---|---|
| Как | Автоматично от DHCP сървър | Ръчно |

**Компоненти:**
- **DHCP Server** — съдържа **DHCP Scope** (набор от IP адреси + настройки);
- **DHCP Client** — настроен да ползва DHCP;
- **DHCP Relay Agent** — обслужва заявки, когато има само 1 DHCP сървър (команда `ip helper` прави **Unicast** заявка към сървъра през рутера).

**DHCP Process (DORA):**
1. Client → **IP Address Request**
2. Server → **IP Address Offer**
3. Client → **IP Address Selection**
4. Server → **IP Address Acknowledgement**

- **DHCP Reservation** — предварително указание: при заявка от определен **MAC адрес** винаги давай същия IP.

## 10.2 DNS и други услуги
- **DNS – Domain Name System** — йерархична, разпределена система; преобразува **имена ↔ IP адреси** и намира услуги в мрежата (напр. email).
- **WINS** — computer name → IP address.
- **Proxy** — пази страница в cache за по-бързо зареждане следващия път (вижте [15.3](15-network-security.md)).
- **Routing Protocols** — събират информация и мапват най-добрия път: типове **Distance Vector**, **Link State**, **Hybrid**. **Loopback** — виртуален интерфейс на рутер за тестване и администриране.
- **Packets:** **Packet Switching** (пакетите поемат различни пътища) vs **Circuit Switching** (обратното).

