import type { Metadata } from "next";
import { siteConfig, offices } from "@/lib/site-config";
import { graph, webPageSchema, localBusinessSchema } from "@/lib/schema";
import { LocationPageTemplate } from "@/components/sections/location-page-template";

const office = offices.find((o) => o.id === "tulsa")!;

const description =
  "Open Arms Foster Care provides compassionate, professional foster care services in Tulsa, OK — including therapeutic foster care, emergency placements, and ongoing parent support.";

export const metadata: Metadata = {
  title: "Tulsa Foster Care Office",
  description,
  alternates: { canonical: "/tulsa" },
  openGraph: {
    title: "Tulsa - Open Arms Foster Care",
    description,
    url: "/tulsa",
    images: [{ url: "/images/og/tulsa.png", width: 650, height: 650, alt: "Foster care support in Tulsa, Oklahoma" }],
  },
};

export default function TulsaPage() {
  const schema = graph(
    webPageSchema({ url: `${siteConfig.url}/tulsa/`, name: "Tulsa - Open Arms Foster Care", description }),
    localBusinessSchema("tulsa"),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <LocationPageTemplate
        office={office}
        intro="Welcome to Open Arms Foster Care, where our mission is to provide compassionate, professional foster care services in Tulsa, OK. Whether you're interested in becoming a foster parent or you're already part of the system and need support, we are here to guide you through every step of the process."
        whyChoose={[
          {
            title: "Experienced Professionals",
            body: "Our team is comprised of experienced social workers and case managers dedicated to ensuring children and foster families receive the best support.",
          },
          {
            title: "Therapeutic Foster Care",
            body: "We specialize in therapeutic foster care, which provides children with additional emotional and psychological support to help them heal and grow.",
          },
          {
            title: "Ongoing Support",
            body: "Continuous training, counseling, and resources for foster parents to ensure they feel confident and supported in their role.",
          },
          {
            title: "Comprehensive Programs",
            body: "A range of programs covering everything from emergency foster care to long-term placements, tailored to the child and the family.",
          },
        ]}
        therapeutic={[
          "Therapeutic foster care is a specialized service that focuses on helping children who have experienced trauma or have complex emotional and behavioral needs. These children often require additional support and attention to manage the effects of their past experiences.",
          "At Open Arms Foster Care, our therapeutic foster care services are designed to help children process their emotions and behaviors in a safe and supportive environment. Our trained foster parents work with our team of professionals to help the child develop healthy coping mechanisms and create a sense of stability and security.",
        ]}
        supportFeatures={[
          { title: "Emergency Foster Care", body: "Temporary housing for children who need to be placed in a safe environment right away." },
          { title: "Long-Term Foster Care", body: "A stable, nurturing environment for children who cannot safely return home." },
          { title: "Specialized Foster Care", body: "Pairing children with unique needs to families equipped to meet them." },
          { title: "Respite Care", body: "Short-term relief for foster parents who need a break, while children continue to receive care." },
          { title: "Case Management", body: "Case managers work closely with foster parents to coordinate every service the family needs." },
        ]}
        emergency={[
          "Sometimes, children need immediate placement due to unsafe conditions in their homes. Our emergency foster care program provides temporary housing for children who need to be placed in a safe environment right away, and we ensure that children are placed in loving homes while they wait for long-term placement.",
          "Our foster parent training in Tulsa equips you with the skills and knowledge needed to provide the best care for children in foster care, including understanding trauma, behavioral techniques, legal and ethical guidelines, and self-care for foster parents.",
        ]}
        becomeParentSteps={[
          { title: "Initial Application", body: "Share your contact info and interest with our Tulsa team." },
          { title: "Background Checks & Home Study", body: "We confirm your home is a safe, supportive environment." },
          { title: "Foster Parent Training", body: "Understand the requirements and responsibilities of fostering." },
          { title: "Ongoing Support", body: "Case management, therapeutic support, and peer connection." },
          { title: "Placement", body: "Welcome a child into your home with full support from our team." },
        ]}
        closing="If you are ready to make a difference in the life of a child, we invite you to learn more about becoming a foster parent or accessing our foster care services in Tulsa. Together, we can provide children in Tulsa with the safe, loving homes they deserve."
      />
    </>
  );
}
