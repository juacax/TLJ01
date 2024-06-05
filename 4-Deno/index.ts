let _valorGlobal = "";

Deno.serve((_request: Request) => {
  _valorGlobal = getValue();
  return new Response(_valorGlobal);
});

const getValue = () => {
  return "Hola Mundo desde Deno!!!";
};
