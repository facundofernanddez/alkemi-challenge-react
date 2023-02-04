export const Result = () => {
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyword");

  return (
    <>
      <h2>Resultado</h2>
      <p>Vas a buscar: {keyword}</p>
    </>
  );
};
