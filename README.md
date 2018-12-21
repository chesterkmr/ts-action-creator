# ts-action-creator


`ts-action-creator` simple library which will let you create type actions.

### Usage Example

```javascript
import {makeAction} from 'ts-action-creator'

const myTypedAction = makeAction<{value : string}>('MY_TYPED_ACTION_NAME');

myTypedAction(); // {type : 'MY_TYPED_ACTION_NAME' , payload : {value : 'value'}}
```