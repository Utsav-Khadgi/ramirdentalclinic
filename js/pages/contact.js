// No backend: the form opens a pre-filled WhatsApp message to the clinic.
const CLINIC_WHATSAPP = '97798XXXXXXXX'; // TODO: replace with the clinic's number (country code, no +)
const form = document.getElementById('appointment-form');
form?.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const text = encodeURIComponent(
`Hello Ramir Dental Clinic, I'd like to book an appointment.
Name: ${d.get('name')}
Phone: ${d.get('phone')}
Email: ${d.get('email') || '-'}
Treatment: ${d.get('service')}
Date: ${d.get('date')}
Time: ${d.get('slot')}
Message: ${d.get('message') || '-'}`);
  window.open(`https://wa.me/${CLINIC_WHATSAPP}?text=${text}`, '_blank');
});
