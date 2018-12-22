# ts-action-creator


`ts-action-creator` simple library which will let you create typed actions for redux.

### Install

`npm i --save ts-action-creator`

### Usage Example

```javascript
import {makeAction} from 'ts-action-creator'

const myTypedAction = makeAction<{value : string}>('MY_TYPED_ACTION_NAME'); // creating action


// will be dispatched as {type : 'MY_TYPED_ACTION_NAME' , payload : {value : 'value'}}
dispatch(myTypedAction({value : "my value"})); 


function reducer(state = {} , action : Action) {
    if(myTypedAction.match(action)) { // Usage in reducer
        return state;
    }
}

```
