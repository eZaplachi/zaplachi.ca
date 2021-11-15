import { useState, useMemo } from "react";

const useDrop = () => {
  const [drop, setDrop] = useState(false);

  const handler = useMemo(
    () => ({
      toggle: () => {
        setDrop((res) => (res === true ? false : true));
      },
    }),
    []
  );
  return [drop, handler];
};

export default useDrop;
