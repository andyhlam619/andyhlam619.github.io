import PageHeader from "../../components/PageHeader";
import SocialIcons from "../../components/SocialIcons";
import ContactInfo from "../../components/ContactInfo";

const Contact = ({ name, email, location }) => {
  return (
    <section className="contact">
      <PageHeader title="Contact" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <iframe
            title="San Diego Google Map Emebd"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26848.720759820088!2d-117.10818661917115!3d32.73679828297373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d95405880fa77b%3A0x75adfc45127b9417!2sSan%20Diego%2C%20CA%2092105!5e0!3m2!1sen!2sus!4v1679535400069!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{
              border: "0",
              paddingBottom: "15px"
            }}
            allowfullscreen=""
            loading="eager"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo name={name} location={location} email={email} />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
  );
};

export default Contact;
