import { useState } from 'react';

function useInput(initialValue, customChange) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: args => {
        if (customChange) {
          setValue(args.target.value);
          customChange(args.target.value);
          return;
        }

        if (args instanceof Object && args.nativeEvent instanceof InputEvent) {
          setValue(args.target.value);
        } else {
          setValue(args);
        }
      }
    },
    () => setValue(initialValue)
  ];
}

export default useInput;