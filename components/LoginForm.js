import React from "react";

const LoginForm = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{ backgroundImage: "url(/5169546.jpg)" }}
    >
      <div className="hero-content flex-col lg:flex-row w-1/2">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-opacity-25">
          <div className="card-body">
            <h1 className="text-2xl">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
