import Link from "next/link";
import Image from "next/image";
export default function Myself() {
  return (
    <div className="myself">
      <h4 className="myself-header">I am a Web Developer</h4>
      <Link href="#" className="slate-blue">
        Read more about me <Image src={"/arrow-forward-sharp.svg"} width={20} height={20} alt="forward arrow" />
      </Link>
    </div>
  );
}