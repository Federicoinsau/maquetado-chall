function formComponent(element) {
  const formElement = document.createElement("div");

  formElement.innerHTML = `<section class="contact">
  <h2>Escribime</h2>
  <div class="contact__form-container">
    <form  class="contact__form">
      <div class="form__field">
        <label for="name">Nombre</label>
        <input type="text" id="name" placeholder="Su nombre..." />
      </div>
      <div class="form__field">
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Email de contacto..." />
      </div>
      <div class="form__field">
        <label for="message">Mensaje</label>
        <textarea id="message" rows="10"></textarea>
      </div>
      <div class="contact__form__button-container">
        <button class="contact__form__button">Enviar</button>
      </div>
    </form>
  </div>
</section>`;

  element.appendChild(formElement);
}

/*     // Datos que se enviarán en el cuerpo del request (pueden ser JSON, FormData, etc.)
    const data = {
      name: "juan",
      job: "dev",
    };
 */

function formSend() {
  const formEl = document.querySelector(".contact__form");

  const mailEl = formEl.querySelector("#email");
  const messageEl = formEl.querySelector("#message");

  formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    // URL a la que se enviará el request POST
    const url = "https://apx-api.vercel.app/api/utils/dwf";

    // Configuración del request
    const options = {
      method: "POST",
      //mode: "no-cors",
      headers: {
        "Content-Type": "application/json", //Indica que se está enviando JSON en el cuerpo del request
      },
      body: JSON.stringify({
        // Convierte el objeto JavaScript a formato JSON
        to: mailEl.value,
        message: messageEl.value,
      }),
    };

    fetch(url, options);
  });
}
