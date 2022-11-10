var message = document.getElementById('message');

function spiritualGenerator() {
  $(document).ready(function() {
    $("#image_controls").on('click', 'div', function() {
      $("#main_image img").removeClass("opaque");

      var newImage = $(this).index();

      $("#main_image img").eq(newImage).addClass("opaque");

      $("#image_controls div").removeClass("selected");
      $(this).addClass("selected");
      });
    });

  var randomMessage;
  var randomNumber = Math.floor(Math.random() * 8);
  
  switch (randomNumber){
    case 0:
      randomMessage = ' \" Trust your instincts. Intuition doesn\'t lie" ';
      break;
    case 1:
      randomMessage = ' \" You yourself, as much as anybody in the entire universe, deserve your love and affection\" ';
      break;
    case 2:
      randomMessage = 'The darkest nights produce the brightest stars';
      break;
    case 3:
      randomMessage = '\" Many of the truths that we cling to depend greatly on our point of view\" ';
      break;
    case 4:
      randomMessage = '\"You will face many defeats in life, but never let yourself be defeated.\" ';
      break;
    case 5:
      randomMessage = '\" Create a life that feels good on the inside, not just one that looks good on the outside\" ';
      break;
    case 6:
      randomMessage = '\" The truth shall set you free but first will shatter your illusions \"';
      break;
    case 7:
      randomMessage = '\" Don\'t ever discount the wonder of your tears. They can be healing waters and a stream of joy. Sometimes they are the best words the heart can speak. \"';
      break;
  };
  message.textContent = randomMessage;
};

var spiritual = document.getElementById('spiritual');
spiritual.addEventListener('click', spiritualGenerator, 'false');

function inspirationalGenerator() {
    $(document).ready(function() {
      $("#image_controls").on('click', 'div', function() {
        $("#main_image img").removeClass("opaque");

        var newImage = $(this).index();
 
        $("#main_image img").eq(newImage).addClass("opaque");

        $("#image_controls div").removeClass("selected");
        $(this).addClass("selected");
      });
    });

  var randomMessage;
  var randomNumber = Math.floor(Math.random() * 8);
  
  switch (randomNumber){
    case 0:
      randomMessage = '\" Failure is the opportunity to begin again more intelligently.\" - Henry Ford';
      break;
    case 1:
      randomMessage = 'What consumes your mind controls your life';
      break;
    case 2:
      randomMessage = 'A little progress each day adds up to BIG results';
      break;
    case 3:
      randomMessage = '\" Out of the mountain of despair, a stone of hope \" - Martin Luther King .Jr';
      break;
    case 4:
      randomMessage = '\" Life is 10% what happens to you abd 90% how to react to it\"';
      break;
    case 5:
      randomMessage = ' \" It always seems impossible until it\'s done.\" - Nelson Mandela ';
      break;
    case 6:
      randomMessage = 'Accept no one\'s definition of your life. Define yourself. ';
      break;
    case 7:
      randomMessage = 'The best view comes after the hardest climb';
      break;
  };
  message.textContent = randomMessage;
};


var inspirational = document.getElementById('inspirational');
inspirational.addEventListener('click', inspirationalGenerator, 'false');

function funnyGenerator() {
    $(document).ready(function() {
      $("#image_controls").on('click', 'div', function() {
        $("#main_image img").removeClass("opaque");

        var newImage = $(this).index();

        $("#main_image img").eq(newImage).addClass("opaque");

        $("#image_controls div").removeClass("selected");
        $(this).addClass("selected");
      });
    });

  var randomMessage;
  var randomNumber = Math.floor(Math.random() * 8);
  
  switch (randomNumber){
    case 0:
      randomMessage = 'If at first you don\'t succeed, then skydiving isn\'t for you.';
      break;
    case 1:
      randomMessage = 'Life is short. Smile while you still have teeth.';
      break;
    case 2:
      randomMessage = 'When all else fails, there\'s always delusion.';
      break;
    case 3:
      randomMessage = 'Come to the dark side...... We have cookies!';
      break;
    case 4:
      randomMessage = 'We didn\'t under estimate them, they were just better than we thought';
      break;
    case 5:
      randomMessage = 'I am not lazy... ...I am on energy saving mode.';
      break;
    case 6:
      randomMessage = 'Just wing it.';
      break;
    case 7:
      randomMessage = 'Bad decisions make good stories.';
      break;
  };
  message.textContent = randomMessage;
};


var funny = document.getElementById('funny');
funny.addEventListener('click', funnyGenerator, 'false');

function randomGenerator() {
  var randomMessage;
  var randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber){
    case 0:
      spiritualGenerator()
      break;
    case 1:
      inspirationalGenerator()
      break; 
    case 2:
      funnyGenerator()
      break; 
  };
};

var random = document.getElementById('random');
random.addEventListener('click', randomGenerator, 'false');
