onload = () => {
    document.body.classList.remove("container");
  };

  const wrapper = document.querySelector(".wrapper");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  const card = document.querySelector('.card');
  
  openBtn.addEventListener("click", () => {
      wrapper.classList.add("open");
      openBtn.style.display = "none";
      closeBtn.style.display = "inline-block";
      card.style.display = "block";
  });
  
  closeBtn.addEventListener("click", () => {
      wrapper.classList.remove("open");
      closeBtn.style.display = "none";
      openBtn.style.display = "inline-block";
      card.style.display = 'none';
  });
  
  document.querySelector('.wrapper')?.addEventListener('click', () => {

    if (!wrapper.classList.contains("open")) return;

    const envelope = document.querySelector('.envelope');
    const lid = document.querySelector('.lid');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const letter = document.querySelector('.letter');
    const open = document.querySelector('.open');
    const gallery = document.querySelector('.Gallery');

    if (envelope) envelope.style.display = 'none';
    if (lid) lid.style.display = 'none';
    if (one) one.style.display = 'none';
    if (two) two.style.display = 'none';
    if (letter) letter.style.display = 'none';
    if (open) open.style.display = 'none';
    if (gallery) gallery.style.display = 'block';
    wrapper.style.display = 'none';
    closeBtn.style.display = 'none';
});

const lastP = document.querySelector('.card p:last-child');
if (lastP) {
  lastP.addEventListener('animationend', (e) => {
    if (e.animationName === 'typewriter') {
      card.style.display = 'none';
    }
  });
}
