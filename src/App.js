// import React from "react";
// import { useFormik } from "formik";

// function App() {
//   const formik = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit: (values) => {
//       alert("Login Successful");
//     },
//     validate: (values) => {
//       let errors = {};
//       if (!values.email) {
//         errors.email = "field required";
//       } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//         errors.email = "Username should be an email";
//       }
//       if (!values.password) errors.password = "field required";
//       return errors;
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div>Email:</div>
//         <input
//           id="emailField"
//           type="text"
//           name="email"
//           onChange={formik.handleChange}
//           value={formik.values.email}
//         />
//         {formik.errors.email ? (
//           <div id="emailError" style={{ color: "red" }}>
//             {formik.errors.email}
//           </div>
//         ) : null}
//         <div>Password:</div>
//         <input
//           id="pswField"
//           type="text"
//           name="password"
//           onChange={formik.handleChange}
//           value={formik.values.password}
//         />
//         <br />
//         {formik.errors.password ? (
//           <div id="pswError" style={{ color: "red" }}>
//             {formik.errors.password}
//           </div>
//         ) : null}
//         <button id="submitBtn" type="submit">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      return errors;
    },
  });

  // Styles
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  const inputStyle = {
    marginBottom: "10px",
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const errorStyle = {
    color: "red",
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#72b7cc",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={formStyle}>
        <label htmlFor="emailField" style={{ marginBottom: "5px" }}>Email:</label>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          style={inputStyle}
        />
        {formik.errors.email && <div id="emailError" style={errorStyle}>{formik.errors.email}</div>}

        <label htmlFor="pswField" style={{ marginBottom: "5px" }}>Password:</label>
        <input
          id="pswField"
          type="password" // Changed to type password for privacy
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          style={inputStyle}
        />
        {formik.errors.password && <div id="pswError" style={errorStyle}>{formik.errors.password}</div>}

        <button id="submitBtn" type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
