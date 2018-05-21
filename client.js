$(document).ready(onReady);

let counter = 0;

function onReady(){
  $('#generateButton').on('click', generateDiv);
}

function generateDiv(){
  counter++;
  $('#target').append(`<div class="red">
                        <p>${counter}</p>
                        <button type="submit" class="swapButton" onclick="swap()">Swap</button>
                        <button type="submit" class="deleteButton" onclick="deleteDiv()">Delete</button>
                      </div>`);
}

function swap(){
  console.log('in swap');
  if($('#target div').hasClass('red')){
    $('#target div').removeClass('red')
    $('#target div').addClass('yellow');
  } else if($('#target div').hasClass('yellow')) {
    console.log(false);
    $('#target div').removeClass('yellow')
    $('#target div').addClass('red');
  }

}

function deleteDiv(){
  console.log('in deleteDiv');
  $('#target div').empty();
}
