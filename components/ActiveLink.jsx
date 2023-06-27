import Link from "next/link";
import { useRouter } from "next/router";

const style = {
  color: "#2e83fa",
  textDecoration: "underline",
};

export const ActiveLink = ({ href = "/", text = "Home" }) => {
  const { asPath } = useRouter();

  return (
    <Link href={href} style={asPath === href ? style : null}>
      {text}
    </Link>
  );
};
