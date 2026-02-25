import './Accordion.css';

function Accordion() {
const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  // если первый активный — раскрываем
  if (item.classList.contains("active")) {
    answer.style.maxHeight = answer.scrollHeight + "px";
  }

  button.addEventListener("click", () => {

    items.forEach(i => {
      if (i !== item) {
        i.classList.remove("active");
        i.querySelector(".faq-answer").style.maxHeight = null;
      }
    });

    item.classList.toggle("active");

    if (item.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});


    return(
        <section class="faq-section">
            <div class="faq-container">

    <div class="faq-left">
      <h2 class="faq-title-main">Frequently Ask Questions</h2>

      <div class="faq">

        <div class="faq-item active">
          <button class="faq-question">
            <span class="icon">+</span>
            Aliquet lectus urna viverra in odio?
          </button>
          <div class="faq-answer">
            <p>
              Adipiscing nunc arcu enim elit mattis eu placerat proin.
              Imperdiet elementum faucibus dignissim purus.
              Fusce parturient diam magna ullamcorper morbi
              semper massa ac facilisis.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span class="icon">+</span>
            Orci commodo, viverra orci mollis ut euismod?
          </button>
          <div class="faq-answer">
            <p>
              Nunc vitae accumsan in lorem fermentum.
              Dictum sit amet justo donec enim diam vulputate.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span class="icon">+</span>
            Sagittis vitae facilisi rutrum amet mauris?
          </button>
          <div class="faq-answer">
            <p>
              Velit dignissim sodales ut eu sem integer vitae.
            </p>
          </div>
        </div>

        <div class="faq-item">
          <button class="faq-question">
            <span class="icon">+</span>
            In id dolor quis nunc, urna hendrerit pharetra?
          </button>
          <div class="faq-answer">
            <p>
              Facilisis magna etiam tempor orci eu lobortis.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div class="faq-right">
      <img src="/images/Question/accordion.svg" alt="FAQ" />
    </div>

  </div>
</section>

    )
}

export default Accordion;