import Link from "next/link";
import Image from "next/image";
export default function Newsletter() {
  return (
    <div className="background-whitesmoke">
      <h3 className="font-weight">Join the newsletter.</h3>
      <p>
        Useful tech tips,directly to your inbox. No spam, unsubscribe at any
        time.
      </p>
      <Link href="#" className="purple">
        <Image
          src={"/open-outline.svg"}
          width={35}
          height={35}
          alt="open svg"
        />
        Subscribe
      </Link>
    </div>
  );
}
