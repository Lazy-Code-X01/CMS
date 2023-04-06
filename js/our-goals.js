const countries = document.getElementById('countries');
const churches = document.getElementById('churches');
const support = document.getElementById('support');
const gadget = document.getElementById('gadget');
const counterPosition = countries.getBoundingClientRect().top;

// countries
function countrieS(target) {
    let count = 0;
    setInterval(() => {
      if (count < target) {
        count++;
        countries.innerHTML = count + '+';
      }
    }, 10);
}
// church
function churcH(target) {
    let count = 0;
    setInterval(() => {
      if (count < target) {
        count++;
        churches.innerHTML = count + '+';

        if (count >= 1000) {
            churches.innerHTML = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '+';
          } else {
            churches.innerHTML = count + '+';
          }
      }
    }, 5);
}
// support
function supporT(target) {
    let count = 0;
    setInterval(() => {
      if (count < target) {
        count++;
        support.innerHTML = count + '+';

        if (count >= 1000) {
            support.innerHTML = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '+';
          } else {
            support.innerHTML = count + '+';
          }
      }
    }, 5);
}

// gadgets
function gadgeT(target) {
    let count = 0;
    setInterval(() => {
      if (count < target) {
        count++;
        gadget.innerHTML = count + '+';

        if (count >= 1000) {
            gadget.innerHTML = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '+';
          } else {
            gadget.innerHTML = count + '+';
          }
      }
    }, 5);
}

  


window.addEventListener('scroll', () => {
    if (window.pageYOffset >= counterPosition - window.innerHeight / 2) {
        countrieS(`${20}`);
        churcH(`${50000}`);
        supporT(`${5000}`);
        gadgeT(`${200000}`);
    }
});
  