import { useState } from "react";
import "./Login.css";
export default function Auth() {
const [isLogin, setIsLogin] = useState(true);
return (
    <div className="wrap">
<div className="container1">
<div className="text-section">
<h1>
{isLogin ? "Welcome Back!" : "Create an Account"} <br />
<span>{isLogin ? "Login to continue" : "Join us today"}</span>
</h1>
<p>
{isLogin
? "Access your account and continue where you left off."
: "Register to explore our platform with exclusive features and tools."}
</p>
</div>
<div className="form-section">
<div className="radius-shape-1"></div>
<div className="radius-shape-2"></div>
<div className="form-container">
<h2>{isLogin ? "Login" : "Register At NutriTrack"}</h2>
{!isLogin && (
<div className="input-group">
<input id="fsft" type="text" placeholder="First Name" />
<input id="fsft" type="text" placeholder="Last Name" />
</div>
)}
<input type="email" placeholder="Email" />
<input type="password" placeholder="Password" />
<div className="checkbox">
<input type="checkbox" id="remember" />
<label htmlFor="remember">
{isLogin ? "Remember Me" : "Subscribe to our website"}
</label>
</div>
<button className="die">{isLogin ? "Login" : "Sign Up"}</button>
<p>
{isLogin ? "Don't have an account?" : "Already have an account?"}
<span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
{isLogin ? " Register" : " Login"}
</span>
</p>
</div>
</div>
</div>
</div>
);
}