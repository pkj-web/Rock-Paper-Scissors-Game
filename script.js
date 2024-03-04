let score = JSON.parse(localStorage.getItem('score')) || {wins : 0,losses:0,ties:0};
localStorage.setItem('score',JSON.stringify(score));




function pickComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);

  return moves[randomIndex];
}
function onclicks(um){
  let res = '';
  const cm = pickComputerMove()
  if(cm === um){
    score.ties++;
    res = 'Its a Tie!';
  }
  else if(cm === 'rock'){
    if (um === 'scissors'){
      score.losses++;
      res = 'You Lost!';
    }
    else{
      score.wins++;
      res = 'You Won!';
    }
  }
  else if(cm === 'paper'){
    if (um === 'rock'){
      score.losses++;
      res = 'You Lost!';
    }
    else{
      score.wins++;
      res = 'You Won!';
    }
  }
  else if(cm === 'scissors'){
    if (um === 'paper'){
      score.losses++;
      res = 'You Lost!';
    }
    else{
      score.wins++;
      res = 'You Won!';
    }
  }
  document.querySelector('.js-move').
  innerHTML = `You <img src="${um}-png.png" class="move-icon"> <img src="${cm}-png.png" class="move-icon">Computer`;
  document.querySelector('.js-result').innerHTML=`${res}`;
  document.querySelector('.js-score').innerHTML=`Wins : ${score.wins} Loses : ${score.losses} Ties : ${score.ties}`;
  localStorage.setItem('score',JSON.stringify(score));
}
document.querySelector('.js-score').
innerHTML = `Wins : ${score.wins} Loses : ${score.losses} Ties : ${score.ties}`;

console.log(JSON.parse(localStorage.getItem('score')));












