<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher()
  export let question
  export let questionnaireKey
  export let getTitle
  
  function onChange(key, value ) {
    dispatch("valueChanged", {key, value})
	}

</script>

<div class="radio">
  <fieldset id={questionnaireKey+"_"+question.key} class="radio-group">
    {#if !question.options}
      <div class="option">
        <label class="container">Yes
        <input type="radio" checked={question.answer} id={questionnaireKey+"_"+question.key+"_yes"} name={questionnaireKey+"_"+question.key} on:change={(event) => onChange(question.key, true)} value = {question.answer?question.answer:false} />
        <span class="checkmark"></span>
        </label>
      </div>
      <div class="option">
        <label class="container">No
        <input type="radio" checked={question.answer!==undefined && question.answer===false} id={questionnaireKey+"_"+question.key+"_no"} name={questionnaireKey+"_"+question.key} on:change={(event) => onChange(question.key, false)} value = {question.answer?question.answer:false} />
        <span class="checkmark"></span>
        </label>
      </div>
    {:else}
      {#each question.options as option, i}
        <div class="option">
          <label class="container">
            {getTitle(option.title)}
          <input
            type="radio"
            checked={question.answer && question.answer === option.key}
            id={option.key}
            name={questionnaireKey+"_"+question.key}
            on:change={(event) => onChange(question.key, event.currentTarget.id)}
            value={question.answer?question.answer:question.key}/>
            <span class="checkmark"></span>
        </label>
        </div>
      {/each}
    {/if}
  </fieldset>
</div>

<style>
  input {
    margin: 0.4rem;
  }
  .radio {
    display: flex;
    flex-direction: column;
  }
  .radio-group {
    display: flex;
    flex-direction: column;
    border: 0px;
    padding: 0px;
    gap: 20px;
  }
  .option {
    padding-left: 0px;
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #000000;
  }

  .container {
    display: block;
    position: relative;
    padding-left: 25px;
    padding-top: 0px;
    margin-bottom: 7px;
    cursor: pointer;
    margin-right: 20px;
    font-family: Arial;
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 16px;
    width: 16px;
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    outline: 1px solid var(--NeutralColor500, #D0D5DD);
  }
  .container:hover input ~ .checkmark {
    background-color: #EAECF0;
  }
  .container input:checked ~ .checkmark {
    background-color: white;
    outline: 1px solid var(--PrimaryColor500, #7846ff);
  }
  .container:hover input:checked ~ .checkmark {
    background-color: #EEE9FF;
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  .container input:checked ~ .checkmark:after {
    display: block;
  }
  .container .checkmark:after {
    top: 4px;
    left: 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--PrimaryColor500, #7846ff);
  }
</style>
