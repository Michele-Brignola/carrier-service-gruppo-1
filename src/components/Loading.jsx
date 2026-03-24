export default function Loading() {
  return (
    <>
      <div className="container">
        <div className="alert alert-primary loading-alert" role="alert">
          <div className="spinner-border text-primary" role="status"></div>
          <span className="fw-bold fs-5">LOADING...</span>
        </div>
      </div>
    </>
  );
}
