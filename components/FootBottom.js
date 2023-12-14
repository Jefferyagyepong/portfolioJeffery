import Image from "next/image";
export default function FootBottom() {
  return (
    <div className="down"><br/><br/>
      &copy; {new Date().getFullYear()}
      <abbr title="Coast Reppublic" className="black">
        {" "}
        jefferyagyepong
      </abbr>{" "}
      <br /> <br />
      <div className="payment-container">
        <Image
          src={"/momo.jpg"}
          height={78}
          width={95}
          alt="momo logo"
          className="payment-logo"
        />
        <Image
          src={"/Visa.png"}
          height={60}
          width={75}
          alt="momo logo"
          className="payment-logo"
        />
      </div>
    </div>
  );
}
