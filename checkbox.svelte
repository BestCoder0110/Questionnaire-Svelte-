<script>
    import { createEventDispatcher } from "svelte";
    
    const dispatch = createEventDispatcher()
    export let question
    export let questionnaireKey
    export let getTitle
    let answers = {}

    function onChange(key, option, val) {
        answers[option] = val;
        let value = []
        for (var k in answers){
            if (answers[k]){
                value.push(k)
            }
        }
        dispatch("valueChanged", {key, value})
	}
    
    question.options.forEach(element => {
        answers[element.key] = false
    });
    question.answer?.forEach(element => {
        if (element in answers){
            answers[element] = true
        }
    });
</script>

<div class="checkbox">
    <fieldset id="chekbox_group" class="fieldset">
        {#each question.options as option, i}
                <label class="container">{getTitle(option.title)}
                    <input
                class="box"
                type="checkbox"
                id={option.key}
                name={questionnaireKey+"_"+question.key}
                on:change={(event) => onChange(question.key, event.currentTarget.id, event.currentTarget.checked)}
                bind:checked={answers[option.key]}
                />
                    <span class="checkmark"></span>
                  </label>
        {/each}
    </fieldset>
</div>

<style>
    .checkbox {
        display: flex;
        flex-direction: column;
    }

    .box {
        height: 16px;
        width: 16px;
    }

    .fieldset {
        margin: 0px 0px 0px 1px;
        display: flex;
        flex-direction: column;
        border: 0px;
        padding: 0px;
        gap: 20px;
    }

    .container {
        display: block;
        position: relative;
        padding-left: 25px;
        padding-right: 25px;
        margin-bottom: 4px;
        cursor: pointer;
        font-family: 'Arial';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        color: #000000;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    .checkmark {
        position: absolute;
        top: -2px;
        left: 0;
        height: 16px;
        width: 16px;
        background-color: #ffffff;
        outline: 1px solid #8B8BA7;
        border-radius: 2px;
    }

    .container:hover input ~ .checkmark {
        background: #EAECF0;
        outline: 1px solid var(--PrimaryColor500, #7846ff);
    }

    .container input:checked ~ .checkmark {
        background-color: #ffffff;
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
        left: 5px;
        top: 1px;
        width: 3px;
        height: 8px;
        border: solid var(--PrimaryColor500, #7846ff);
        border-width: 0 3px 3px 0;
        border-radius: 2px;
        -webkit-transform: rotate(50deg);
        -ms-transform: rotate(50deg);
        transform: rotate(50deg);
    }
</style>
