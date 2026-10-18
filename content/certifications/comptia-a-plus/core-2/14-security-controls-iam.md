---
title: 14. 🏛️ Контроли за сигурност, IAM и автентикация
updated: 2026-10-18
---

## 14.1 Категории контроли

| Категория | Описание | Примери |
|---|---|---|
| **Physical (физически)** | Защита на хора и сгради | Огради, ключалки, баджове, охрана, **Access Control Vestibules**, биометрия |
| **Logical / Technical (логически/технически)** | Хардуер/софтуер, ограничаващ достъпа | Firewall, IDS/IPS, криптиране, протоколи |
| **Managerial / Administrative (управленски)** | Политики, стандарти, процедури | **Data Classification**, надзор, **Security Awareness Training** |

## 14.2 🏢 Физическа сигурност
- **Perimeter Defense (периметър):** огради, **Bollards (ограничителни стълбчета)**, осветление, охрана.
- **Surveillance (наблюдение):** видеонаблюдение, аларми, **Motion Sensors (датчици за движение)**, **Magnetometers (метал детектори)**.
- **Physical Access Controls:**
  - **Door Locks** — механични, електронни;
  - **Equipment Locks** — Kensington Lock;
  - **Badge Readers** — **RFID** карти;
  - **Access Control Vestibule (шлюзова камера, бивш Mantrap)** — две врати, като втората се отваря само след затваряне на първата → спира **Tailgating/Piggybacking**.

## 14.3 🔐 Принципи за сигурност
- **Least Privilege (най-малки привилегии)** — само нужното за работата.
- **Zero Trust (нулево доверие)** — всеки потребител се автентикира, оторизира и валидира преди достъп.
- **JIT – Just-In-Time Access** — администраторски права **временно**.

| Модел | Кой решава достъпа | Употреба |
|---|---|---|
| **DAC – Discretionary Access Control** | **Собственикът** на ресурса | Стандартни ОС |
| **MAC – Mandatory Access Control** | **Системата** по етикети (Unclassified → Top Secret) | Военни/правителствени |
| **RBAC – Role-Based Access Control** | **Ролята/групата** (IT, Sales, Finance) | 🎯 Добра практика: потребител → група с права |

## 14.4 🔑 MFA – Multi-Factor Authentication

| Фактор | Значение | Примери |
|---|---|---|
| **Knowledge (знание)** | Нещо, което **знаеш** | Парола, PIN |
| **Ownership / Possession (притежание)** | Нещо, което **имаш** | Токен, смарт карта, USB ключ, **OTP** |
| **Characteristic / Inherence (характеристика)** | Нещо, което **си** | Биометрия |
| **Location (местоположение)** | Къде **си** | Сигнал при нова локация |
| **Action / Behavior (действие)** | Нещо, което **правиш** | Рядко |

## 14.5 🆔 IAM – Identity & Access Management
Рамка, която гарантира, че **правилните хора** имат достъп до **правилните ресурси** в **правилното време**.

**AAA (Triple A):**
- **Authentication (автентикация)** — кой си?
- **Authorization (оторизация)** — какво можеш?
- **Accounting (отчетност)** — какво направи? (логове)

**Unique Subjects (уникални субекти):** служители, **Endpoints (крайни устройства)**, сървъри (Machine-to-Machine), софтуер, **Roles (роли)**.

## 14.6 👑 PAM – Privileged Access Management
Подкатегория на IAM за „**ключовете на кралството**“ — root, Administrator, **Service Accounts**, мрежови администратори.
- **Credential / Password Vaulting** — паролите се пазят в криптиран „сейф“ и се „заемат“.
- **JIT Access** — права за ограничено време (напр. 2 часа).
- **Session Monitoring & Recording** — всяко действие се записва.

## 14.7 🎟️ Протоколи за автентикация

| Протокол | Порт | Транспорт | Употреба | 🎯 Особеност |
|---|---|---|---|---|
| **Kerberos** | **88** | TCP/UDP | **SSO в локална Windows / AD мрежа** | **Tickets (билети)** от **KDC** (Domain Controller): **TGT – Ticket Granting Ticket** → **Service Ticket**. Паролата **не пътува** по мрежата. ⚠️ Разлика в часовника > **5 мин** → неуспех (разчита на **NTP**) |
| **RADIUS** | **1812/1813** (стари: 1645/1646) | **UDP** | Крайни потребители — **WPA2/3-Enterprise Wi-Fi (802.1X)** и **VPN** | Криптира **само паролата**; **комбинира** AuthN и AuthZ |
| **TACACS+** | **49** | **TCP** | **Администриране на мрежови устройства** (Cisco) | Криптира **целия пакет**; **разделя** трите A |
| **LDAP / LDAPS** | **389 / 636** | TCP | **Заявки към директорията** (AD) | „Телефонният указател“; синтаксис `CN=JohnDoe,OU=Sales,DC=Company,DC=com` (X.500); ❌ не е пълна система за автентикация |
| **SAML** | **443** (HTTPS) | — | **Уеб/облачен SSO** (Federation) | **XML Assertion (твърдение)**; **IdP** + **SP** |
| **802.1X** | — | — | Port-based контрол — без достъп до суич/Wi-Fi до успешна автентикация пред **RADIUS** | — |
| **EAP – Extensible Authentication Protocol** | — | — | **Рамка (Framework)** за различни методи (пароли, сертификати, смарт карти) | — |
| **Diameter** | — | — | Наследник на RADIUS; телеком, 4G/5G | — |

## 14.8 🌐 SSO и SAML
- **SSO – Single Sign-On (единно влизане)** — един вход → много приложения; решава **Password Fatigue (умора от пароли)**. При напускане се деактивира **един** акаунт; MFA се налага централно.
- **SAML – Security Assertion Markup Language** — XML-базиран отворен стандарт, пренасящ идентичността между:
  - **Principal / User (потребител)**;
  - **IdP – Identity Provider (доставчик на идентичност)** — Microsoft Entra ID, Okta, Ping Identity;
  - **SP – Service Provider (доставчик на услуга)** — Salesforce, Zoom, Slack.
- Процес: опит за вход в SP → **Redirect** към IdP → вход + MFA → **SAML Assertion** (подписан XML) → браузърът го предава на SP → SP проверява подписа → достъп. 👉 Паролата никога не напуска IdP.
- 💡 Аналогия: увеселителен парк — касата (IdP) дава гривна (SAML Token), атракциите (SP) вярват на гривната.

🎯 **SAML vs Kerberos:** и двата дават SSO, но **SAML = Web/Cloud (порт 443)**; **Kerberos = локална AD мрежа (порт 88, блокиран навън)**. SAML / OAuth / OIDC → уеб.

## 14.9 📚 Directory Services (директорийни услуги)
„Телефонният указател“ на мрежата — централна база за **Objects (обекти)**: Users, Computers, Groups, Printers & Resources. Ползи: **Single Login** на всеки компютър, **Global Changes** (едно място), **Security Policies** (напр. заключване след 5 мин).
- **Active Directory Domain Services (AD DS)** — On-premises; LDAP за заявки, Kerberos за автентикация.
- **Microsoft Entra ID** (бивш Azure AD) — облачна „Directory Service as a Service“.
- **OpenLDAP** — безплатна алтернатива за Linux.

## 14.10 📲 Enterprise Mobility Management
| | MDM | MAM | EMM |
|---|---|---|---|
| Обхват | **Цялото устройство** | **Само служебните приложения** | **MDM + MAM + MCM** (Mobile Content Management) |
| Възможности | Remote Wipe, парола, блокиране на камерата, Wi-Fi профили, локация | Забрана на Copy/Paste към лични приложения, отделен PIN, изтриване само на фирмената поща | Цялостно решение (**Intune**, **Workspace ONE**) |
| Модел | Фирмени устройства | **BYOD** | — |

👉 **EMM ≠ MDM — MDM е подмножество на EMM.**

## 14.11 🚫 DLP – Data Loss Prevention
Софтуер/стратегия, която открива и **спира изтичането на чувствителни данни** — умишлено или случайно. 💡 Ако Data Classification поставя етикета „Секретно“, DLP е полицаят, който проверява всяка чанта на изхода.

