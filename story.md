# user-questionnaire

Following document describes user-questionnaire module and changes to be performed

## Install
    npm i
    npm run install-modules
    npm start

user-questionnaire module accepts questionnaire object and builds ui based on that object.

For local execution questionnaire object is placed initialParametersForLocalRun.js file and will
be imported into main.svelte component once **npm start** is executed

![Questionnaire img](/quest.png "questionnaire img")

Current project uses svelte component framework to decompose elements into components.
These components are:
1. MainContainer
2. QuestionContainer
3. Input
4. Radio
5. Checkbox

## MainContainer
MainContainer is the top components that contains QuestionContainer component as well as the title
and description. It uses questions slot to place multiple QuestionContainer component at it's internal.

### Example
    <MainContainer title={getTitle(questionnaire.title)} description={questionnaire.description}>
        <div slot="questions"></div>
    </MainContainer>

## QuestionContainer
QuestionContainer components contains question title and one of the input components based on a question type

### Example
    <QuestionContainer title={getTitle(question.title)} mandatory={question.mandatory}>
          <div slot="question">
            <svelte:component {question} questionnaireKey={questionnaire.key} {getTitle} this={getComponent(question.type)}/>
          </div>
    </QuestionContainer>

In the example above svelte component changes dynamically based on a question type.

## Input components
There are 3 main input components in current module, these are
1. Input
2. Radio
3. Checkbox

Each of these elements displays corresponding input element and allows valueChanged event to be emitted once their value changes.
Subsequently these events need to be monitored to evaluate the validity of the form.

## Requirement 1: Done
Emit onValidityChange event containing form validity status from main.svelte component everytime a value is changed in input components.
Form is valid if all mandatory elements have a value. Keep in mind that if there are no mandatory fields, onValidityChange event has to be emitted
immediately.

## Requirement 2
Cypress tests on different questionnaire object configurations that might include missing properties, large number of checkboxes 
or radio buttons, long texts in descriptions or question titles.

### NOTE do not change mainContainer.svelte and questionContainer.svelte file contents

