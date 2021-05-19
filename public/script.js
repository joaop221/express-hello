fetch('http://localhost:3000/user/joaop221')
  .then(data => data.json())
  .then(data => {
    const el = document.querySelector('h3');
    el.innerText = data.email;
  });
