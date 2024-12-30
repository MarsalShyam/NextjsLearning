'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  console.log(session);
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn("github")}>Sign in using github</button>
      {/* <button onClick={() => signIn("google")}>Sign in using google</button>
      <button onClick={() => signIn("facebookk")}>Sign in using facebook</button> */}
    </>
  )
}