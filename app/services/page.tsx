import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { Separator } from "@/components/ui/separator";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Comprehensive legal services for individuals and businesses. ${SITE_CONFIG.name} provides expert advice across property, wills, family law, disputes, and more.`,
};

export default function ServicesPage() {
  const individualServices = SERVICES.filter(s => s.category === "individuals");
  const businessServices = SERVICES.filter(s => s.category === "business");

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert legal advice for individuals and businesses across a wide range of practice areas
          </p>
        </div>

        {/* For Individuals */}
        <section className="mb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">For Individuals</h2>
            <p className="text-muted-foreground">
              Personal legal services to help you through important life events
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualServices.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.slug}`}
                className="block p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </a>
            ))}
          </div>
        </section>

        <Separator className="my-16" />

        {/* For Business */}
        <section>
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">For Business</h2>
            <p className="text-muted-foreground">
              Commercial legal services to support your business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessServices.map((service) => (
              <a
                key={service.id}
                href={`/services/${service.slug}`}
                className="block p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
