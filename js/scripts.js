function addToCart(name, price){
  alert(name + " ditambahkan ke keranjang. Harga per unit: Rp" + price.toLocaleString());
}

// Demo form handlers (no backend) — they validate and show a friendly message
function handleRegister(e){
  e.preventDefault();
  const f = document.getElementById('register-form');
  const name = f.fullname.value.trim();
  const email = f.email.value.trim();
  if(!name || !email){ alert('Isi nama dan email.'); return false; }
  const result = document.getElementById('register-result');
  result.style.display = 'block';
  result.innerText = 'Terima kasih, ' + name + '. Akun registrasi telah diproses (demo). Cek email: ' + email;
  f.reset();
  return false;
}

function handleContact(e){
  e.preventDefault();
  const f = document.getElementById('contact-form');
  const name = f.name.value.trim();
  const email = f.email.value.trim();
  const msg = f.message.value.trim();
  if(!name || !email || !msg){ alert('Mohon isi semua kolom.'); return false; }
  const result = document.getElementById('contact-result');
  result.style.display = 'block';
  result.innerText = 'Pesan Anda telah terkirim. Terima kasih, ' + name + '. Kami akan merespon ke ' + email + '.';
  f.reset();
  return false;
}
