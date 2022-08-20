const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <h3 className="logo">CloudletHR</h3>
        <p className="industry-word">
          Industry Tested no1 software solution for modern human resources
          providers over the world
        </p>
      </div>

      <div>
        <p className="amount">Paying</p>
        <p style={{fontSize:'30px',}}><strong>N 40,000 NGN</strong></p>
        <p style={{ color: "#B9B9B9" }}>for 300 employees</p>
      </div>

      <div className="payment-button">
        <p>make payment</p>
      </div>
    </div>
  );
};

export default SideBar;
