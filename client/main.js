function viz(data){

  //ORDER THE DATA BY FARE AMOUNT
  data.sort(function(a, b){return a.fields.fare - b.fields.fare});


  const males = data.filter(passenger => passenger.fields.sex === 'male')
  const females = data.filter(passenger => passenger.fields.sex === 'female')

  let currentSex = "male";
  display(data, false);

  function display(data, death){
    data.forEach((passenger) => {
      addData(passenger)
    });
    function addData(passenger){
      let isAlive = passenger.fields.survived == "Yes" ? true : false;
      let sexColor = passenger.fields.sex == "male" ? "#6d7ce7" : "#e76dc5";
      let dataBar = document.createElement('div');
      dataBar.classList.add('dataBar');
      $(dataBar).css({
        width : "5px",
        marginRight: "1px",
        height : `50px`,
        backgroundColor : sexColor
      })
      if(death){
        $(dataBar).css('backgroundColor', isAlive ? "red" : sexColor)
      }
      $('#graph').append(dataBar);
    }
  }

  $('#fullSpeedAheadBtn').on('click', () => {
    $('#iceberg').css('transform', 'translate(130px, 10px)')
    setTimeout(() => {
      $('#graph').empty();
      display(data, true)
    }, 6000)
  })

}

fetch('/data/titanic.json')
 .then(res => res.json())
 .then(json => viz(json))
 .catch(err => console.log(err.message))
