export const makeAction = function <ActionData>(type: string) {
  function creator(payload?: ActionData) {
    return { type, ...(payload ? { payload } : {}) };
  }

  creator.match = function (action: {
    type: string;
  }): action is { type: string } & { payload: ActionData } {
    return action.type === type;
  };

  creator.type = type;

  return creator;
};
