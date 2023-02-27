function criaMensagemAtendente(inputMsgCustomer) {
  const contentBox = document.getElementById("contentBox");
  contentBox.insertAdjacentHTML(
    "beforeend",
    `
    <div class="atendente" id="customerDiv">
      <p class="atendente-title">
        Atendente diz:
      </p>
      <p class="atendente-msg">
        ${inputMsgCustomer}
      </p>
    </div>
    `
  );
  contentBox.scrollTop = contentBox.scrollHeight;
}

function criaMensagemCliente(inputMsgClient) {
  const contentBox = document.getElementById("contentBox");
  contentBox.insertAdjacentHTML(
    "beforeend",
    `
    <div class="cliente" id="clientDiv">
      <p class="cliente-title">
        Você diz:
      </p>
      <p class="cliente-msg">
        ${inputMsgClient}
      </p>
    </div>
    `
  );
  contentBox.scrollTop = contentBox.scrollHeight;
}

const formMsg = document.getElementById("formMsg");
formMsg.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputClient = document.getElementById("inputClient");
  const inputCustomer = document.getElementById("inputCustomer");

  if (inputClient.value === "") {
    if (inputCustomer.value === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Não dá pra mandar vazio mano :(",
      });
    } else {
      criaMensagemAtendente(inputCustomer.value);
      inputMsgCustomer.focus();
      formMsg.reset();
    }
  } else {
    criaMensagemCliente(inputClient.value);
    inputMsgCustomer.value = "";
    inputMsgClient.focus();
    formMsg.reset();
  }
});
