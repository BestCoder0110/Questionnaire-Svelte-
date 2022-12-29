<script>
import { createEventDispatcher } from "svelte"
const dispatch = createEventDispatcher()
function eventHandler (e, props, arg) { for(let i in props) { if (i = 'on:'+e) { if (typeof props[i] === 'function') {props[i](arg)} else {dispatch(e, arg)} break } } }
export let title = ''
export let description = ''
</script>
<input type="hidden" id="anPageName" name="page" value="main-container">
    <div class="main-container screen">
      <div class="title-desc">
        <div class="identomat-variable_title">{title}</div>
        <div class="identomat-variable_description">{description}</div>
      </div>
      <div class="identomat-slot_questions"><slot name="questions"></slot></div>
    </div>
<style>

/* The following line is used to measure usage of this code in production. For more info see our usage billing page */


@font-face {
  font-family: "Arial-Bold";
  font-style: normal;
  font-weight: 700;
  src: url("/module-assets/widget/user-questionnaire/fonts/fontsfree-net-arial-bold.ttf") format("truetype");
}
@font-face {
  font-family: "Arial-Regular";
  font-style: normal;
  font-weight: 400;
  src: url("/module-assets/widget/user-questionnaire/fonts/arial.ttf") format("truetype");
}

* {
  box-sizing: border-box;
}

:root { 
  --black: #000000;
  --mirage: #101828;
  --white: #ffffff;
 
  --font-size-s: 14px;
  --font-size-xl: 20px;
 
  --font-family-arial-bold: "Arial-Bold", Helvetica;
  --font-family-arial-regular: "Arial-Regular", Helvetica;
}

/* screen - main-container */

.main-container {
  align-items: flex-start;
  background-color: var(--white);
  border: 1px none;
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 77px;
  min-width: 279px;
  width: 100%;
}

.main-container .title-desc {
  align-items: flex-start;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-color: #d0d5dd;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 12px 0px;
  width: 279px;
}

.main-container .identomat-variable_title {
  color: var(--mirage);
  font-family: var(--font-family-arial-bold);
  font-size: var(--font-size-xl);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 22px;
  margin-top: -1.00px;
  white-space: nowrap;
  width: 278px;
}

.main-container .identomat-variable_description {
  color: var(--mirage);
  font-family: var(--font-family-arial-regular);
  font-size: var(--font-size-s);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 19.6px;
  white-space: nowrap;
  width: fit-content;
}

.main-container .identomat-slot_questions {
  align-self: stretch;
  background-color: var(--white);
  flex: 1;
  height: 1px;
  min-width: 279px;
}

</style>