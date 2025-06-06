    const correctAnswers = {
      q1: "HyperText Markup Language",
      q2: "<a>",
      q3: "<link rel='stylesheet' href='style.css'>",
      q4: "color",
      q5: "<button>",
      q6: "<h1>"
    };

    function escapeHTML(str) {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    }

    let cnt=0;
    let answeredCount = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    function handleAnswer(questionId, selectedValue) {
      const feedback = document.getElementById(`feedback-${questionId}`);
      if (selectedValue === correctAnswers[questionId]) {
        feedback.textContent = "✅ Correct!";
        feedback.className = "feedback correct";
        cnt++;
      } else {
        feedback.innerHTML = "❌ Incorrect!"+"<br><span style='color: green; font-weight: bold;'>Correct answer: </span>"+ "<strong>" + escapeHTML(correctAnswers[questionId]) + "</strong>";
        feedback.className = "feedback incorrect";
      }
    }

    // Attach event listeners
    Object.keys(correctAnswers).forEach((questionId) => {
    const options = document.getElementsByName(questionId);
    let answered = false; 
    options.forEach((option) => {
        option.addEventListener("click", () => {
        if (answered) return;
        handleAnswer(questionId, option.value);

        options.forEach((opt) => {
            opt.disabled = true;
        });

        answered = true; 
        answeredCount++;

        if (answeredCount === totalQuestions) {
            ans.style.display = "inline-block";
        }
        });
    });
    });

    const ans = document.querySelector(".submit-btn");
    const feed = document.getElementById("feed");
    ans.style.display = "none"; 
    ans.addEventListener("click",handle);
    function handle()
    {
        if(cnt===totalQuestions)
        {
            feed.innerHTML = "Your score is " + cnt + "<br><span style ='font-size:2rem' >😎🥱</span>";
        }
        else if(cnt>2)
            feed.innerHTML = "Your score is "+cnt+"<br><span style ='font-size:2rem' >😅</span>"; 
        else
            feed.innerHTML = "Your score is "+cnt+"<br><span style ='font-size:2rem' >😶</span>";
    }