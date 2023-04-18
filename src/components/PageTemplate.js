function PageTemplate({ pageName, children }) {
  return (
    <main>
      <h1>{pageName}</h1>
      {children}
    </main>
  );
}

export default PageTemplate;
