const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = Math.ceil(target / 50);
    if (current < target) {
      counter.innerText = `${Math.min(current + increment, target)}`;
      setTimeout(updateCount, 20);
    }
  };
  updateCount();
});
