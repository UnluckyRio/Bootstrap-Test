// Script per gestire l'animazione della barra di progresso
document.addEventListener("DOMContentLoaded", function () {
  // Seleziono il bottone e la barra di progresso
  const button = document.querySelector(".btn-primary"); // Seleziona il bottone con classe btn-primary
  const progressBar = document.querySelector(".progress-bar"); // Seleziona la barra di progresso

  // Aggiungo un event listener per il click del bottone
  button.addEventListener("click", function () {
    // Controllo se la barra è già al 100%
    const currentWidth = parseInt(progressBar.style.width) || 0; // Ottiene la larghezza corrente o usa 0 come default

    if (currentWidth >= 100) {
      // Se è già al 100%, non fare nulla (bottone disabilitato)
      return;
    } else {
      // Altrimenti aumenta del 20% fino a 100%
      const newWidth = Math.min(currentWidth + 20, 100); // Calcola la nuova larghezza (massimo 100%)
      progressBar.style.width = newWidth + "%"; // Imposta la nuova larghezza
      progressBar.textContent = newWidth + "%"; // Aggiorna il testo
      progressBar.setAttribute("aria-valuenow", newWidth); // Aggiorna l'attributo aria

      // Se la barra ha raggiunto il 100%, cambia il bottone
      if (newWidth >= 100) {
        // Cambia il bottone in verde con scritta "Success!"
        button.classList.remove("btn-primary"); // Rimuove la classe blu
        button.classList.add("btn-success"); // Aggiunge la classe verde
        button.textContent = "Success!"; // Cambia il testo
        button.disabled = true; // Disabilita il bottone

        // Dopo 2 secondi, resetta tutto
        setTimeout(function () {
          // Resetta la barra
          progressBar.style.width = "0%"; // Resetta la larghezza a 0%
          progressBar.textContent = "0%"; // Aggiorna il testo
          progressBar.setAttribute("aria-valuenow", "0"); // Aggiorna l'attributo aria

          // Resetta il bottone
          button.classList.remove("btn-success"); // Rimuove la classe verde
          button.classList.add("btn-primary"); // Aggiunge di nuovo la classe blu
          button.textContent = "Press me to fill the bar"; // Ripristina il testo originale
          button.disabled = false; // Riabilita il bottone
        }, 2000); // 2 secondi di attesa
      }
    }
  });
});
