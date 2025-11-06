document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form[action*='formspree.io']");
  const msg = document.getElementById("formMessage");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: { "Accept": "application/json" },
      });

      if (response.ok) {
        msg.textContent = "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet 🎉";
        msg.classList.remove("hidden");
        form.reset();
        setTimeout(() => msg.classList.add("hidden"), 5000); // Meldung nach 5 Sekunden ausblenden
      } else {
        msg.textContent = "Ups! Da ist etwas schiefgelaufen. Bitte versuche es später erneut.";
        msg.classList.remove("hidden");
      }
    } catch (error) {
      console.error(error);
      msg.textContent = "Verbindungsfehler — bitte versuche es später erneut.";
      msg.classList.remove("hidden");
    }
  });
});
