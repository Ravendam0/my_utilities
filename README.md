# Main.js – Official Manual

Welcome to **MY UTILITIES**, a lightweight and modern JavaScript library built to make your website **smart, dynamic, and globally alive**!

---

## Features

### 1. Flag Icons (Country Display)

Display any country’s flag with **style and simplicity**.

**Usage**

```html
<span id="countryFlag"></span>

<script>
  displayFlag('Kenya', 'countryFlag');
</script>
```

**Output Example**

```
🇰🇪 Kenya
```

> You can replace `"Kenya"` with any country name or ISO code (e.g., `"US"`, `"JP"`).

---

### 2. Current Time Display

Display your platform’s **real-time local clock**.

**Usage**

```html
<span id="currentTime"></span>

<script>
  displayCurrentTime('currentTime');
</script>
```

**Output Example**

```
Saturday, Nov 8, 2025 — 10:43 PM
```

> Automatically updates every second — no refresh needed.

---

### 3. Realtime Tracker (Since Launch)

Keep your audience engaged with a **live counter** since your project launch.

**Usage**

```html
<span id="timeActive"></span>

<script>
  startActiveTimer('2025-10-26T00:00:00+03:00', 'timeActive');
</script>
```

**Output Example**

```
0 yrs : 13 days : 5 hrs : 47 min : 09 sec
```

> Perfect for “Website running since…” banners or project launch timers.

---

### 4. Next Year Footer

Automatically **update your footer year** — no manual edits needed.

**Usage**

```html
<footer>© <span id="nextYear"></span> Royal Tech</footer>

<script>
  updateFooterYear('nextYear');
</script>
```

**Output Example**

```
© 2026 Royal Tech
```

---

### 5. Styling Tips

You can customize the appearance to match your brand:

```css
#currentTime, #timeActive {
  color: #e91e63;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
}
```

---

### 6. Combined Example

Combine all features for a **smart status bar**:

```html
<div class="status-bar">
  <span id="countryFlag"></span> |
  <span id="currentTime"></span> |
  <span id="timeActive"></span>
</div>
```

**Output Example**

```
🇰🇪 | Saturday, Nov 8, 2025 — 10:45 PM | Active for 0 yrs : 13 days : 5 hrs
```

---

## Author

**Royal Tech Owner**
Innovating the web — one script at a time.

---

## License

This project is open-source and free to use for learning and development purposes.
