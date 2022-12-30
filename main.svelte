<script>
  import { createEventDispatcher, onMount } from "svelte";
  import MainContainer from "./mainContainer.svelte";
  import QuestionContainer from "./questionContainer.svelte";
  import Input from "./input.svelte";
  import Checkbox from "./checkbox.svelte";
  import Radio from "./radio.svelte";

  onMount(() => {
    questions = questionnaire.questions;
    for (let i = 0; i < questions.length; i++) {
        questions[i].value = null;
    }
  });

  let questions = [];
  let isValidate = false;
  export let questionnaire;
  export let language;

  $: {
    if(questions.length) {
      let pass = false;
      for (let i = 0; i < questions.length; i++) {
       if(questions[i].mandatory && isEmpty(questions[i])) {
         pass = true;
         break;
       }
      }
      isValidate = pass ? false : true;
    }
  }

  const componentsByType = [
    { type: 'boolean', component: Radio},
    { type: 'options', component: Radio},
    { type: 'multiple-choice', component: Checkbox},
    { type: 'string', component: Input},
  ]

  function isEmpty(data) {
    return data.value === null || data.value.length === 0;
  }

  function getTitle(title) {
    if (!title) return "";
    if (typeof title === "string") return title;
    if (title.hasOwnProperty(language)) return title[language];
    if (title.hasOwnProperty("en")) return title.en;
    for (let lang in title) {
      return title[lang];
    }
  }
  function getComponent(type){
   const component = componentsByType.find(elem => elem.type === type)
   return component?component.component:null
  }

  function onValidityChange(e) {
    for (let i = 0; i < questions.length; i++) {
      if(questions[i].key === e.detail.key) 
        questions[i].value = e.detail.value
    }
  }
</script>

<div class="main">
  {#if isValidate}
    Okay
  {:else}
    Wrong
  {/if}
  <MainContainer
    title={getTitle(questionnaire.title)}
    description={questionnaire.description}
  >
    <div slot="questions">
      {#each questionnaire.questions as question, i}
        <QuestionContainer title={getTitle(question.title)} mandatory={question.mandatory}>
          <div slot="question">
            <svelte:component 
              {question}
              questionnaireKey={questionnaire.key}
              {getTitle} 
              this={getComponent(question.type)}
              on:valueChanged = {onValidityChange}
            />
          </div>
        </QuestionContainer>
      {/each}
    </div>
  </MainContainer>
</div>

<style>
  .main {
    color: black;
  }
</style>
