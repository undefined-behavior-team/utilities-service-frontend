export const getPath = () => {
  return window.location.pathname.split("/").at(-1) ?? "";
};
