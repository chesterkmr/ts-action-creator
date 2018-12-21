# ts-action-creator


`ts-action-creator` simple library which will let you create type actions.

### Install

`npm i --save ts-action-creator`

### Usage Example

```javascript
import {makeAction} from 'ts-action-creator'

const myTypedAction = makeAction<{value : string}>('MY_TYPED_ACTION_NAME'); // creating action

dispatch(myTypedAction()); // will be dispatched as {type : 'MY_TYPED_ACTION_NAME' , payload : {value : 'value'}}


function reducer(state = {} , action : Action) {
    if(myTypedAction.match(action)) { // Usage in reducer
        return state;
    }
}

```
