document.querySelectorAll("[data-include-footer]").forEach(async (el) => {
  const src = el.dataset.includeFooter;
  if (!src) return;

  try {
    const res = await fetch(src);
    if (!res.ok) throw new Error(res.statusText);
    el.innerHTML = await res.text();
  } catch (err) {
    console.error("Kunde inte ladda footer:", err);
  }
});
