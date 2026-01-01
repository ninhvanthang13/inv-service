/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import CircularProgress from "@mui/material/CircularProgress";
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftAlert from "components/SoftAlert";
import SoftBox from "components/SoftBox";
import SoftButton from "components/SoftButton";
import SoftInput from "components/SoftInput";
import SoftTypography from "components/SoftTypography";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Authentication service
import { login } from "services/authService";

// Images
import curved9 from "assets/images/curved-images/curved-6.jpg";

function SignIn() {
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleInputChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
    // Clear general error message
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const validateForm = () => {
    const newErrors = {
      username: "",
      password: "",
    };
    let isValid = true;

    if (!formData.username.trim()) {
      newErrors.username = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.username)) {
      newErrors.username = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log("Form submitted!", formData);
    setErrorMessage("");

    if (!validateForm()) {
      console.log("Validation failed");
      return;
    }

    console.log("Calling API login...");
    setLoading(true);

    try {
      console.log("API Request:", { username: formData.username, password: "***" });
      const response = await login(formData.username, formData.password);
      console.log("API Response:", response);

      if (response.success) {
        // Navigate to dashboard on successful login
        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMessage(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CoverLayout
      title="Welcome back"
      description="Enter your email and password to sign in"
      image={curved9}
    >
      <SoftBox component="form" role="form" onSubmit={handleSubmit}>
        {errorMessage && (
          <SoftBox mb={2}>
            <SoftAlert color="error" dismissible>
              {errorMessage}
            </SoftAlert>
          </SoftBox>
        )}

        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Email
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="email"
            placeholder="Email"
            value={formData.username}
            onChange={handleInputChange("username")}
            error={!!errors.username}
            icon={{ component: false, direction: "none" }}
          />
          {errors.username && (
            <SoftTypography variant="caption" color="error" ml={0.5} mt={0.5}>
              {errors.username}
            </SoftTypography>
          )}
        </SoftBox>

        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
              Password
            </SoftTypography>
          </SoftBox>
          <SoftInput
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange("password")}
            error={!!errors.password}
            icon={{ component: false, direction: "none" }}
          />
          {errors.password && (
            <SoftTypography variant="caption" color="error" ml={0.5} mt={0.5}>
              {errors.password}
            </SoftTypography>
          )}
        </SoftBox>

        <SoftBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <SoftTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </SoftTypography>
        </SoftBox>

        <SoftBox mt={4} mb={1}>
          <SoftButton
            variant="gradient"
            color="info"
            fullWidth
            type="submit"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              console.log("Button clicked!");
              handleSubmit(e);
            }}
          >
            {loading ? (
              <SoftBox display="flex" alignItems="center" sx={{ gap: 1 }}>
                <CircularProgress size={20} color="inherit" />
                <span>Signing in...</span>
              </SoftBox>
            ) : (
              "sign in"
            )}
          </SoftButton>
        </SoftBox>

        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
              textGradient
            >
              Sign up
            </SoftTypography>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </CoverLayout>
  );
}

export default SignIn;
