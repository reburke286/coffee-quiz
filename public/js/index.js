$(document).ready(function () {
  const renderQuestions = () => {
    const questionsContainer = $(".questions-container");
    const pEl = $("<p>");
    questionsContainer.append(pEl);

    questions.forEach((q) => {
      const title = $("<p>");
      const lineBreak = $("<p>");
      // const choiceOne = $(
      //   `<input type="radio" class="choices choice-one" id="${q.choices[0]}" name="fav_language" value="${q.choices[0]}"><label for="${q.choices[0]}">${q.choices[0]}</label>`
      // );
      // const choiceTwo = $(
      //   `<input type="radio" class="choices choice-two" id="${q.choices[1]}" name="fav_language" value="${q.choices[1]}"><label for="${q.choices[1]}">${q.choices[1]}</label>`
      // );
      // const choiceThree = $(
      //   `<input type="radio" class="choices choice-three" id="${q.choices[2]}" name="fav_language" value="${q.choices[2]}"><label for="${q.choices[2]}">${q.choices[2]}</label>`
      // );
      // const choiceFour = $(
      //   `<input type="radio" class="choices choice-four" id="${q.choices[3]}" name="fav_language" value="${q.choices[3]}"><label for="${q.choices[3]}">${q.choices[3]}</label>`
      // );

      title.text(q.title);
      title.addClass("question-title");
      pEl.append(title);

      for (var value of questions.choices) {
        $(title)
          .append(
            $("<input>").prop({
              type: "radio",
              id: value,
              name: "contact",
              value: value,
            })
          )
          .append(
            $("<label>")
              .prop({
                for: value,
              })
              .html(value)
          );
      }

      // pEl.append(title);
      // title.append(lineBreak);
      // lineBreak.append(choiceOne);
      // choiceOne.append(choiceTwo);
      // choiceTwo.append(choiceThree);
      // choiceThree.append(choiceFour);
    });
  };

  renderQuestions();

  const submitBtn = $(".submit-btn");
  $(submitBtn).click(function () {});
});
