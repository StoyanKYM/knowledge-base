---
title: 4. 🐛 Finding Vulnerabilities (намиране на уязвимости)
updated: 2026-10-18
---

![Finding Vulnerabilities 1](images/image35.png)
![Finding Vulnerabilities 2](images/image21.png)
![Finding Vulnerabilities 3](images/image55.png)

📌 Ресурс: **80, 443 — Pentesting Web Methodology | HackTricks**.

![HackTricks](images/image3.png)

🎯 Важно:
- `nmap -sC -sV` прави детайлен scan + показва версия + добавя скриптове.
- При видяна версия — винаги проверявай дали е най-новата. Стара версия може да е **Exploitable**.
- **Missing HTTPS** — винаги докладвай, ако приложението е HTTP. Уеб винаги трябва да има сигурност (**TLS/SSL сертификат**).
- **Missing Field Sanitization (липса на валидиране на полета)** — където има поле: `'`, HTML tag, `<script>`.
- **SQL Injection**.

## 4.1 Fuzzing
**Fuzzing** — процес, при който навсякъде, където можем, слагаме определени **Payloads (полезни товари)**, за да видим как системата реагира при стрес.
- 👉 Даваме много payloads, за да видим как реагира (напр. при FTP). Проверяваме как сървърът ще работи в определени ситуации.

![Fuzzing 1](images/image9.png)
![Fuzzing 2](images/image42.png)

- 💡 Fuzzing е много полезен за уеб приложения. Може да имаме приложения на различни портове.

![Приложения на различни портове](images/image33.png)

## 4.2 Checklist
- За всеки pentest има **Checklist**, който го има във всеки проект, но винаги първо тествай сам.
- Checklist-ът дава „контрол на качеството“ — тествай с пълна креативност, а накрая провери checklist-а, ако си изтървал нещо.
- 👉 Checklist-ът е **bare minimum (минимумът)**.

## 4.3 Техники

![Finding Vulnerabilities Techniques](images/image47.png)

**Low Hanging Fruits (лесните неща):**

![Low Hanging Fruits 1](images/image29.png)
![Low Hanging Fruits 2](images/image53.png)

- **Default Credentials** — `admin/admin`, `anonymous/anonymous`, `qwerty/qwerty`.

![Default Credentials](images/image19.png)

- **Backup Files** — винаги искаме да вземем и изследваме backup. 💡 Винаги се оглеждай за backup файлове.

![Backup Files](images/image6.png)

**Mind Map за тестване на FTP услуга:**

![FTP Mind Map 1](images/image14.png)
![FTP Mind Map 2](images/image17.png)

## 4.4 Инструменти за Active Recon
| Инструмент | Предназначение |
|---|---|
| **SearchSploit / Exploit-DB** | База данни от публично достъпни exploits. В Kali — `searchsploit`. Винаги проверявай тук при видяна версия (също и в GitHub) |
| **sqlmap** | Инструмент за SQL injection |
| **Web Browser** | Също възможност за търсене на уязвимости |
| **Burp Suite** | Уеб уязвимости |
| **Nessus** | (за следващ път) |

