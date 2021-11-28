<script>
  import Question from "./Question.svelte";
  import EndOfSurvey from "./EndOfSurvey.svelte";

  import questions from "./questions.js";

  let question = -1;
  let type = 0;
  function incrementQuestion(value) {
    if (question === questions.length - 1){
      type = value

    }
    else {
      question++;
    }
  }
</script>

<style>
  @font-face 
  {
    font-family: "Harry-Potter";
    src: url("/fonts/harry_potter.woff")
  }
  h1 {
    font-family: "Harry-Potter, Serif";
  }
  main, h2 {
    font-family: sans-serif;
    text-align: center;
  }
  img {
    height: 300px;
  }
</style>

<main>
  {#if questions[question] }
    <Question 
      title={questions[question].title} 
      options={questions[question].options}
      onNext={incrementQuestion}
      image={questions[question].image}
      />
  {:else if question === -1}
    <h1>Harry Potter House Quiz</h1>
	  <h2>Answer the Questions to see where the Sorting Hat would put you!</h2>
    <img src="/assets/the-hat.jpg" alt="the hat" />
    <br />
    <br />
    <button on:click={() => question ++}>Begin</button>
  {:else}
    <EndOfSurvey type={type}/>
  {/if}

</main>