const Billing = () => {
  return (
    // ojoraoyeyinka billing section
    <div className="billing">
      <h3 className="heading">Billing & Account</h3>

      <div className="container">
        <div className="card">
          <div className="pill-1">HR</div>
        </div>
        <div className="description">
          <div className="top-content">
            <h3>The Human Resources</h3>
            <p>
              Manage your human resources in one place with ease and do more
            </p>
          </div>

          <div className="down-content">
            <p>For as low as</p>
            <div className="price">
              <strong>N 40,000 NGN</strong> per employee
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="pill-2">Payroll</div>
        </div>
        <div className="description">
          <div className="top-content">
            <h3>Payroll Module</h3>
            <p>
              Manage your Payrole and salary payment in one place with ease and
              do more
            </p>
          </div>

          <div className="down-content">
            <p>For as low as</p>
            <div className="price">
              <strong>N 60,000 NGN</strong> per employee
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="card">
          <div className="pill-3">Leave Management Module</div>
        </div>
        <div className="description">
          <div className="top-content">
            <h3>Leave Management Module</h3>
            <p>
              Manage your Leave Management in one place with ease and do more
            </p>
          </div>

          <div className="down-content">
            <p>For as low as</p>
            <div className="price">
              <strong>N 30,000 NGN</strong> per employee
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
