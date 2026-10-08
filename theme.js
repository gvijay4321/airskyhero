// Light/dark switch (the moon button in the header). Dark is the default; the choice is remembered in this browser.
// Loaded in <head> so a saved light theme applies before the page is drawn.
(function () {
  var root = document.documentElement;
  try { if (localStorage.getItem("theme") === "light") root.dataset.theme = "light"; } catch (e) {}
  document.addEventListener("click", function (e) {
    if (!e.target.closest || !e.target.closest("#theme-btn")) return;
    var next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = next === "light" ? "#ffffff" : "#0b1118";
  });
})();
