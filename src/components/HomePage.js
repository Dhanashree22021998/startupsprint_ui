import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function HomePage() {
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(7.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emiResult, setEmiResult] = useState('');
  const emiChartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const emiCalculatorRef = useRef(null);

  const scrollToEMICal = () => {
    emiCalculatorRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const updateLoanAmount = (e) => {
    setLoanAmount(e.target.value);
  };

  const updateInterestRate = (e) => {
    setInterestRate(e.target.value);
  };

  const updateLoanTenure = (e) => {
    setLoanTenure(e.target.value);
  };

  const calculateEMI = () => {
    const loanAmountValue = parseFloat(loanAmount);
    const interestRateValue = parseFloat(interestRate);
    const loanTenureValue = parseInt(loanTenure);

    if (!loanAmountValue || !interestRateValue || !loanTenureValue) {
      setEmiResult('Please fill out all fields.');
      return;
    }

    const monthlyInterestRate = interestRateValue / (12 * 100);
    const numberOfMonths = loanTenureValue * 12;

    const emi =
      (loanAmountValue *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    const totalPayment = emi * numberOfMonths;
    const interestAmount = totalPayment - loanAmountValue;

    setEmiResult(`Your EMI is ₹${emi.toFixed(2)}`);

    updateChart(loanAmountValue, interestAmount);
  };

  const updateChart = (principal, interest) => {
    if (chartInstance) {
      chartInstance.destroy();
    }

    const newChartInstance = new Chart(emiChartRef.current, {
      type: 'doughnut',
      data: {
        labels: ['Principal Amount', 'Interest Amount'],
        datasets: [
          {
            data: [principal, interest],
            backgroundColor: ['#4A90E2', '#F5A623'],
            hoverBackgroundColor: ['#357ABD', '#E59400'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom',
          },
        },
      },
    });

    setChartInstance(newChartInstance);
  };

  // Cleanup chart on unmount
  useEffect(() => {
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [chartInstance]);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand text-primary fw-bold" href="#">
            StartupSprint
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Enquiry
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link fw-semibold text-dark dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Feedback
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-semibold text-dark" href="#">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <h1 className="display-4 fw-bold mb-4">
            Empowering Startups with Financial Solutions
          </h1>
          <p className="lead mb-4">
            We provide tailored loans and financial advice to help your startup
            succeed.
          </p>
          <button
            className="btn btn-primary"
            onClick={scrollToEMICal}
          >
            Try EMI Calculator
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-percent fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Rates as low as 50%</h5>
                  <p className="card-text">
                    Get affordable loans with competitive interest rates starting at
                    50%.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-speedometer fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Fast & Easy Process</h5>
                  <p className="card-text">
                    Our loan approval process is simple and takes only 7 days.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-cash-stack fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">
                    Amount of Credit up to 50 CRORE
                  </h5>
                  <p className="card-text">
                    We provide loan amounts ranging up to ₹50 crore to support your
                    startup.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <div className="mb-3">
                    <i className="bi bi-calendar2-range fs-1 text-primary"></i>
                  </div>
                  <h5 className="card-title">Long Loan Term up to 100 Years</h5>
                  <p className="card-text">
                    Enjoy flexible repayment options with loan terms as long as 100
                    years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EMI Calculator Section */}
      <section
        className="py-5 bg-light"
        ref={emiCalculatorRef}
      >
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Calculator Form */}
            <div className="col-lg-6">
              <div className="card p-4">
                <h2 className="card-title text-center mb-4">EMI Calculator</h2>
                <div className="mb-3">
                  <label className="form-label">
                    Loan Amount (₹): <strong>{loanAmount}</strong>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="10000"
                    max="1000000"
                    value={loanAmount}
                    onChange={updateLoanAmount}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Interest Rate (%): <strong>{interestRate}</strong>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="0.1"
                    max="20"
                    step="0.1"
                    value={interestRate}
                    onChange={updateInterestRate}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Loan Tenure (Years): <strong>{loanTenure}</strong>
                  </label>
                  <input
                    type="range"
                    className="form-range"
                    min="1"
                    max="30"
                    value={loanTenure}
                    onChange={updateLoanTenure}
                  />
                </div>
                <button
                  className="btn btn-primary w-100"
                  onClick={calculateEMI}
                >
                  Calculate EMI
                </button>
                <div className="mt-3 text-center">
                  {emiResult && (
                    <p className="h5">{emiResult}</p>
                  )}
                </div>
              </div>
            </div>
            {/* Chart */}
            <div className="col-lg-6">
              <div className="card p-4">
                <canvas ref={emiChartRef} className="w-100"></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-3">
        <div className="container text-center">
          <p>© 2024 StartupSprint. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage