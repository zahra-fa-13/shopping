// (() => {
//   const $ = (s, el = document) => el.querySelector(s);
//   const $$ = (s, el = document) => [...el.querySelectorAll(s)];

//   /* Theme toggle (remembers choice) */
//   const root = document.documentElement;
//   const saved = (() => { try { return localStorage.getItem("theme"); } catch { return null; } })();
//   const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
//   if (saved ? saved === "light" : prefersLight) root.setAttribute("data-theme", "light");

//   $("#theme").addEventListener("click", () => {
//     const isLight = root.getAttribute("data-theme") === "light";
//     if (isLight) root.removeAttribute("data-theme");
//     else root.setAttribute("data-theme", "light");
//     try { localStorage.setItem("theme", isLight ? "dark" : "light"); } catch {}
//   });

//   /* Mobile menu */
//   const burger = $("#burger");
//   const links = $("#links");
//   const setMenu = (open) => {
//     links.classList.toggle("open", open);
//     burger.setAttribute("aria-expanded", String(open));
//   };
//   burger.addEventListener("click", () => setMenu(!links.classList.contains("open")));
//   $$("a", links).forEach((a) => a.addEventListener("click", () => setMenu(false)));
//   document.addEventListener("keydown", (e) => e.key === "Escape" && setMenu(false));

//   /* Stats: show final values immediately (no counting animation) */
//   $$("[data-count]").forEach((el) => {
//     el.textContent = el.dataset.count + (el.dataset.suffix || "");
//   });

//   /* Contact form (front-end validation demo) */
//   const form = $("#form");
//   const note = $("#note");
//   const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

//   form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let ok = true;
//     $$("input, textarea", form).forEach((field) => {
//       const v = field.value.trim();
//       const bad = !v || (field.type === "email" && !emailOk(v));
//       field.classList.toggle("invalid", bad);
//       if (bad) ok = false;
//     });
//     note.className = "form-note" + (ok ? "" : " error");
//     if (!ok) {
//       note.textContent = "Please fill in every field with a valid email.";
//       return;
//     }
//     // Replace with a real request, e.g. fetch("/api/contact", { method: "POST", body: new FormData(form) })
//     note.textContent = "Thank you — your message is on its way. We’ll reply soon ✺";
//     form.reset();
//   });
//   $$("input, textarea", form).forEach((f) => f.addEventListener("input", () => f.classList.remove("invalid")));

//   $("#year").textContent = new Date().getFullYear();
// })();
