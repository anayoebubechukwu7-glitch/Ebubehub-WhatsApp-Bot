const graphVersion = process.env.GRAPH_API_VERSION || 'v23.0';

export async function sendText(to, body) {
  const phoneNumberId = process.env.PHONE_NUMBER_ID;
  const token = process.env.WHATSAPP_TOKEN;
  if (!phoneNumberId || !token) {
    throw new Error('Missing PHONE_NUMBER_ID or WHATSAPP_TOKEN');
  }

  const response = await fetch(
    `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to,
        type: 'text',
        text: { preview_url: false, body }
      })
    }
  );

  const data = await response.json();
  if (!response.ok) throw new Error(`WhatsApp API error: ${JSON.stringify(data)}`);
  return data;
}
