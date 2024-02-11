const message = function (msg) {
  const secretWord = '. This is a secret';

  const secretMessage = function () {
    console.log(msg + secretWord);
  };

  return secretMessage;
};

const totalMessage = message('I hide my snacks in the closet');

totalMessage();
