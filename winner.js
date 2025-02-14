let winner=localStorage.getItem('winner');
const greeting=document.getElementById("greeting");
if (winner === 'Draw') {
    greeting.innerHTML = 'It\'s a Draw!';
} else {
    greeting.innerHTML = `WINNER: ${winner}`;
}
    