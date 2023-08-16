import {useEffect} from "react";
import {useRouter} from "next/router";

// ----------------------------------------------------------------------

export default function Index() {
  const router = useRouter();
  const isAuthenticated = true;

  useEffect(() => {
    async function checkAuth() {
      if (router.pathname == "/") {
        if (isAuthenticated) {
          router.push("/home");
        } else {
          router.push("/login");
        }
      }
    }
    checkAuth();
  });

  return null;
}
