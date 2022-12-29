<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher()
    export let question
    export let questionnaireKey
    
    function onChange(key, value ) {
        dispatch("valueChanged", {key, value})
    }
</script>
    <input type="text" id="{questionnaireKey+'_'+question.key}" name="{questionnaireKey+'_'+question.key}"  
        placeholder=" "
        value = {question.answer?question.answer:null} on:input={(event) => onChange(question.key, event.currentTarget.value.trim())}>
<style>
    input {
        width: 250px;
        background: white;
        height: 42px; 
        border: 1px solid #D7D7E9;
        box-sizing: border-box;
        border-radius: 6px;
        font-family: Arial;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0.01em;
        text-align: left;
        padding: 13px 16px;
        margin-top: 0rem;
        transition: border-color 0.2s ease;
    }

    input:focus {
        outline: none;
        border: 2px solid var(--PrimaryColor400, #936bff);
    }

    @supports (not (-ms-ime-align:auto)) {
        label {
        margin-left: 25px;
        color: #999;
        transform: translate(0.32rem, -2.2rem);
        transition: all 0.2s ease-out;
        }
        
        input:focus + label,
        input:not(:placeholder-shown) + label {
        color: #999;
        font-size: 12px;
        transform: translate(0.32rem, -3.0rem);
        }
    }
</style>
