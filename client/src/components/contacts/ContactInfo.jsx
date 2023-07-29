import CardAddress from "./CardAddress";
import CardEmail from "./CardEmail";
import CardNoHp from "./CardNoHp";
import CardSocmed from "./CardSocmed";

const ContactInfo = () => {
   return (
      <section className="flex justify-center gap-2 lg:justify-evenly mt-10 mb-6 flex-wrap items-start">
         <CardAddress />
         <CardEmail />
         <CardNoHp />
         <CardSocmed />
      </section>
   );
};

export default ContactInfo;
