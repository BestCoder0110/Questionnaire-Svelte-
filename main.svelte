<script>
  import { createEventDispatcher, onMount } from "svelte";
  import MainContainer from "./mainContainer.svelte";
  import QuestionContainer from "./questionContainer.svelte";
  import Input from "./input.svelte";
  import Checkbox from "./checkbox.svelte";
  import Radio from "./radio.svelte";

  onMount(() => {});

  export let questionnaire;
  export let language;

  const componentsByType = [
    { type: 'boolean', component: Radio},
    { type: 'options', component: Radio},
    { type: 'multiple-choice', component: Checkbox},
    { type: 'string', component: Input},
  ]

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
</script>

<div class="main">
  <MainContainer
    title={getTitle(questionnaire.title)}
    description={questionnaire.description}
  >
    <div slot="questions">
      {#each questionnaire.questions as question, i}
        <QuestionContainer title={getTitle(question.title)} mandatory={question.mandatory}>
          <div slot="question">
            <svelte:component {question}
            questionnaireKey={questionnaire.key}
            {getTitle} this={getComponent(question.type)}/>
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
