import React from "react";
import { withIronSession } from "next-iron-session";
import Link from "next/link";
import AuthLayout from "../components/auth-layout";

const PrivatePage = ({ user, check }) => (
  <AuthLayout>
    {check ? (
      <>
        <h1>Hello {user.email}</h1>
        <p>Secret things live here...</p>
      </>
    ) : (
    <>
      <h1>You are not logged in</h1>
      <Link href="/signin">Click here to log in</Link>
    </>
    )}
  </AuthLayout>
);

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");
    let check = true

    if (!user) {
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

export default PrivatePage;