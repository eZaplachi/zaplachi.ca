const useBounce = () => {
  const grav = 9.81;
  var hInit = 5;

  function h(t: number) {
    hInit - 0.5 * grav * (t ^ 2);
  }
};

export default useBounce;
