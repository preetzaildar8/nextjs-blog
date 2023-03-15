import React, { useRef } from "react";
import { useRouter } from "next/router";
import utilStyles from '../styles/utils.module.css'
import AuthLayout from "../components/auth-layout";
import { withIronSession } from "next-iron-session";
import Link from "next/link";

const SignInPage = ({ user, check }) => {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    const response = await fetch("/api/sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    if (response.ok) {
      return router.push("/private");
    }
  };

  return (
    <AuthLayout>
      {check ? (
        <>
          <h1>You are already logged in</h1>
          <Link href="/private">Click here to access authenticated page.</Link>
        </>
      ) : (
        <>
          <form onSubmit={handleSubmit}>
            <div>
              <label className={utilStyles.formlabel}>
                Email: <input className={utilStyles.input} type="text" ref={emailInput} />
              </label>
            </div>
            <div>
              <label className={utilStyles.formlabel}>
                Password: <input className={utilStyles.input} type="password" ref={passwordInput} />
              </label>
            </div>
            <div>
              <button type="submit" className={utilStyles.formButton}>Sign in</button>
            </div>
          </form>
        </>
      )}
    </AuthLayout>
  );
};

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");
    let check = true

    if (!user) {
      console.log("please login to access the page")
      check = false
      return {
        props: { check }
        // redirect: {
        //   destination: '/signin',
        //   permanent: false,
        // },
      };
    }

    return {
      props: { user, check }
    };
  },
  {
    cookieName: "MYSITECOOKIE",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false
    },
    password: process.env.APPLICATION_SECRET
  }
);

export default SignInPage;