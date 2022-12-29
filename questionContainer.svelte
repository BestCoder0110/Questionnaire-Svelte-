<script>
import { createEventDispatcher } from "svelte"
const dispatch = createEventDispatcher()
function eventHandler (e, props, arg) { for(let i in props) { if (i = 'on:'+e) { if (typeof props[i] === 'function') {props[i](arg)} else {dispatch(e, arg)} break } } }
export let title = ''
export let mandatory = false
</script>
<input type="hidden" id="anPageName" name="page" value="question-container">
    <div class="question-container screen">
      <div class="text"><div class="identomat-variable_title">{title}{#if mandatory}<span class="mandatory">*</span>{/if}</div></div>
      <div class="identomat-slot_question"><slot name="question"></slot></div>
    </div>
<style>

/* The following line is used to measure usage of this code in production. For more info see our usage billing page */


@font-face {
  font-family: "Arial-Bold";
  font-style: normal;
  font-weight: 700;
  src: url("/module-assets/widget/user-questionnaire/fonts/fontsfree-net-arial-bold.ttf") format("truetype");
}

* {
  box-sizing: border-box;
}

:root { 
  --black: #000000;
 
  --font-size-s: 14px;
 
  --font-family-arial-bold: "Arial-Bold", Helvetica;
}

/* screen - question-container */

.question-container {
  align-items: flex-start;
  border: 1px none;
  display: flex;
  flex-direction: column;
  gap: 16px; 
  min-height: 56px;
  min-width: 90px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 24px;
}

.question-container .text {
  height: 20px;
  margin-right: -2.00px;
  min-width: 92px;
  position: relative;
}

.question-container .identomat-variable_title {
  color: var(--black);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-s);
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: 19.6px;
  position: absolute;
  top: 0;
  white-space: nowrap;
}

.question-container .identomat-slot_question {
  min-width: 42px;
}

.mandatory {
    color: var(--ErorColor500, #E34242);
    padding-left: 3px;
  }

</style>