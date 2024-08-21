import React from 'react'
import React, { useState } from "react";

const Authentication = () => {
    const [isLogged, setIsLogged] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState ("");

    const navigate = useNavigate();

    const validateForm = () => {
        if (!email || !password) {
            setError("Both email and password are required");
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please eter a valid email address");
            return false;
        }

        if (password.length < 6) {
          setError("Password must be at least 6 characters long");
          return false;
        }

        setError("")
    }
  return (
    <div>Authentication</div>
  )
}

export default Authentication