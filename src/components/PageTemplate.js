function PageTemplate({ pageName, children }) {
  return (
    <div>
      <h1>{pageName}</h1>
      {children}
    </div>
  );
}

export default PageTemplate;
