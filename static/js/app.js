const btnTema = document.getElementById("btnTema");
const raiz = document.documentElement;

function actualizarBotonTema() {
  const oscuro = raiz.getAttribute("data-theme") === "dark";
  btnTema.textContent = oscuro ? "☀️ Modo claro" : "🌙 Modo oscuro";
}

// Si no hay tema guardado, usa el del sistema
if (!raiz.getAttribute("data-theme")) {
  const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
  raiz.setAttribute("data-theme", prefiereOscuro ? "dark" : "light");
}

btnTema.addEventListener("click", function () {
  const nuevo = raiz.getAttribute("data-theme") === "dark" ? "light" : "dark";
  raiz.setAttribute("data-theme", nuevo);
  try { localStorage.setItem("tema", nuevo); } catch (e) {}
  actualizarBotonTema();
});

actualizarBotonTema();