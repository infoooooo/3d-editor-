document.getElementById('topup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const playerId = document.getElementById('player-id').value;
  const product = document.getElementById('product').value;
  const amount = document.getElementById('amount').value;
  const status = document.getElementById('status');
  status.textContent = `Memproses ${amount} ${product} untuk ID ${playerId}...`;
});