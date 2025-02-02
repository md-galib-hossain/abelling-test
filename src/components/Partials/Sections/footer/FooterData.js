import { getData } from "@/app/page";
import Footer from "./Footer";

const FooterData = async () => {
  const { homepage } = await getData();

  return (
    <>
      <Footer contacts={homepage?.contacts[0]} />
    </>
  );
};

export default FooterData;
