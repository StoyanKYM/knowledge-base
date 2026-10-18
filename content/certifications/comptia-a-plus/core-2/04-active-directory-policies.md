---
title: 4. 🏢 Active Directory, домейни и политики
updated: 2026-10-18
---

## 4.1 Workgroup vs Domain

| | Workgroup (работна група) | Domain (домейн) |
|---|---|---|
| Модел | Децентрализиран **Peer-to-Peer (P2P)** | Централизиран **Client-Server** |
| Акаунти | **Local Accounts** в **SAM** на всеки компютър | Един акаунт в **Active Directory** на **Domain Controller** (SSO) |
| Политики | Ръчно на всяка машина | **Group Policies (GPO)** към хиляди машини |
| Мащаб | До ~10–20 устройства | Хиляди и милиони |

## 4.2 🏛️ AD, Domain, Domain Controller
👉 Аналогия с държава:

| Понятие | Аналогия | Тип | Роля |
|---|---|---|---|
| **Active Directory (AD)** | ГРАО — регистърът на населението | Софтуер / база данни (Directory Service) | Съхранява потребители, компютри, принтери, групи, споделени ресурси и правата им |
| **Domain (домейн)** | Държавата и границите ѝ | Логическа граница | Обединява ресурсите под едно име и едни правила (напр. `company.local`); **Domain Join** → SSO |
| **Domain Controller (DC)** | МВР / паспортна служба | Физически/виртуален **Windows Server** с ролята AD | Проверява паролите (Authentication / Authorization) |

⚠️ Винаги **поне два DC** — ако единственият откаже, никой не може да влезе (освен с кеширани данни).

## 4.3 📁 Обекти и функции в AD
- **Security Groups (групи за сигурност)** — правата се дават на групата, не на човека (напр. „HR_Dept“ с Read/Write над папката със заплатите).
- **OU – Organizational Units (организационни единици)** — логически „папки“ за потребители, компютри и групи (по отдел или локация; вложени OU).
  - **GPO се закачат (Link) към OU** — напр. OU Sales без достъп до Control Panel.
  - **Delegation of Control (делегиране)** — младши техник сменя пароли само в OU Sofia_Office.
- **Login Scripts (скриптове при вписване)** — `.bat` / PowerShell при логване (напр. мапване на диск S:).
- **Home Folders (домашни папки)** — лична папка на сървъра (напр. диск H:), архивирана централно.
- **Folder Redirection (пренасочване на папки)** — Desktop/Documents живеят на сървъра → еднакви на всеки компютър.

## 4.4 📜 Local Policy vs Group Policy

| | Local Security Policy (`secpol.msc`) | Group Policy (GPO) |
|---|---|---|
| Обхват | **Само този компютър** | Хиляди компютри от DC |
| Среда | Дом / Workgroup | Домейн |
| Минус / плюс | Ръчно на всяка машина | Централизирано и еднакво |

> ⚠️ Корекция: `gpedit.msc` е **Local** Group Policy Editor. Домейнните GPO се управляват от **Group Policy Management Console (`gpmc.msc`)** на сървъра.

🎯 **LSDOU — ред на прилагане (от най-слаба към най-силна):** **L**ocal → **S**ite → **D**omain → **O**rganizational **U**nit. **Последната приложена печели** → GPO винаги бие локалната политика.

## 4.5 👥 Акаунти и групи в Windows
- **Local Account (локален)** — в **SAM – Security Accounts Manager** (част от регистъра, HKEY_LOCAL_MACHINE).
- **Microsoft Account** — облачен (account.microsoft.com).
- **Network / Domain Account (мрежов)** — в Active Directory на DC.

| Група | Права |
|---|---|
| **Users (потребители)** | Стандартни — новите потребители отиват тук |
| **Administrators (администратори)** | Повишени права |
| **Guests (гости)** | Почти никакви права |
| **Power Users** | Междинно ниво (Legacy) |

| Акаунт | Ниво | Принцип по CompTIA |
|---|---|---|
| username@company.com | Standard User | **Minimizing the Attack Surface (намаляване на повърхността за атака)** |
| username@company_logistics.com | Role-Based Access | **Separation of Duties (разделение на отговорностите)** |
| support_username@company.com | Administrator/Technician | **Principle of Least Privilege (минимални привилегии)** |

## 4.6 🔑 Вписване в Windows

| Тип | Къде се проверяват данните | Мрежа |
|---|---|---|
| **Local Sign-in** | **LSA – Local Security Authority** срещу **SAM** | Не е нужна |
| **Network Sign-in** | DC чрез **Kerberos** | Нужна (или кеширани данни) |
| **Remote Sign-in** | RDP, SSH, VPN, уеб портал (SSL/TLS) | Критична |

Методи: потребител + парола, **Windows Hello PIN / Fingerprint / Face**, **SSO**.

