import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import loginimg from '../assets/Mobile login-rafiki.png';
// eslint-disable-next-line
import { motion } from 'framer-motion'; // Import Framer Motion
import { AuthContext } from '../context/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  const [showpassword, setShowPassword] = useState(false);


        const {signinWidthGoogle,signInUser} = use(AuthContext)


        const location = useLocation();
      const navigate = useNavigate();

        const handleLogIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

     // ✅ Password validation with toast
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error('Password must include an uppercase letter');
      return;
    }

    if (!/[a-z]/.test(password)) {
      toast.error('Password must include a lowercase letter');
      return;
    }

    // ✅ Sign in
    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        form.reset();
        toast.success('Login successful!');
        navigate(location.state || '/');
      })
      .catch((error) => {
        console.log(error);

        // ✅ Toast-based error handling
        if (error.code === 'auth/invalid-credential') {
          toast.error('Invalid email or password.');
        } else if (error.code === 'auth/user-not-found') {
          toast.error('No user found with this email.');
        } else if (error.code === 'auth/wrong-password') {
          toast.error('Incorrect password.');
        } else if (error.code === 'auth/invalid-email') {
          toast.error('Invalid email address.');
        } else {
          toast.error('An unexpected error occurred. Please try again.');
        }
      });
  };
    
    
           const handleGoogleSignIn = () => {
            signinWidthGoogle()
              .then(() => {
                toast.success('Login successful with Google!');
                navigate(location?.state || '/');
              })
              .catch(() => {
                toast.error('Failed to sign in with Google. Please try again.');
              });
          };

         const handleTogglepassword = (e) => {
        e.preventDefault();
        setShowPassword(!showpassword);
    };




  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, x: 100 }, // start position
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } }, // end position
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: 'spring', stiffness: 100 } },
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 min-h-screen pt-10">

      <Toaster 
          position="top-right" 
          reverseOrder={false}
          toastOptions={{
            style: {
           marginTop: '50px',
                  },
                  }}
                  />

      
      
      {/* Left Image */}
      <motion.div
        className="hidden lg:block"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <img
          src={loginimg}
          alt="Login"
          className="h-screen w-full object-cover"
        />
      </motion.div>

      {/* Right Form */}
      <div className="flex items-center justify-center h-screen">
        <motion.div
          className="hero min-h-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-96 shrink-0 shadow-2xl border-2 border-blue-600">
              <div className="card-body inter-fonts">
                <h2 className="text-2xl text-center font-bold">Login</h2>
                <p className="text-center">
                  Don't have an account?{' '}
                  <Link to={'/register'} className="text-blue-600 hover:underline">
                    Register Now
                  </Link>
                </p>
                <form onSubmit={handleLogIn}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input 
                                type="email"
                                className="input" 
                                name='email'
                                placeholder="Email"
                                required
                            />
                            
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input 
                                    type={showpassword ? "text" : "password"} 
                                    name='password' 
                                    className="input w-full" 
                                    placeholder="Password" 
                                    required 
                                />
                                <button 
                                    onClick={handleTogglepassword} 
                                    className="cursor-pointer btn-xs absolute right-3 top-3"
                                >
                                    {showpassword ? <Eye size={15}/> : <EyeOff size={15}/>}
                                </button>
                            </div>

                            <div>
                                <Link to="/forget-password" className="link link-hover cursor-pointer">
                                    Forgot password?
                                </Link>
                            </div>
                            
                            <label className="label">
                                <input 
                                    type="checkbox" 
                                    defaultChecked 
                                    className="checkbox checkbox-xs" 
                                    name="terms" 
                                    required
                                />
                                Accept Term and condition
                            </label>
                            
                            <button className="btn bg-indigo-500 text-white mt-4 hover:bg-indigo-600">
                            Login
                            </button>
                        </fieldset>
                    </form>

                <div className="flex items-center my-1 gap-2">
                  <hr className="flex-grow border-gray-300" />
                  <span className="mx-1 text-gray-700 font-semibold">OR</span>
                  <hr className="flex-grow border-gray-300" />
                </div>

                <div>
                  <button onClick={handleGoogleSignIn} className="btn w-full border-blue-600 bg-white text-black flex items-center justify-center gap-2">
                    {/* Google SVG */}
                    <svg
                      aria-label="Google logo"
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <g>
                        <path d="m0 0H512V512H0" fill="#fff"></path>
                        <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                        <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                        <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                        <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                      </g>
                    </svg>
                    Sign In with Google
                  </button>
                </div>

              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Login;
