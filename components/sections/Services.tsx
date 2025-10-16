import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";

interface ServicesProps {
  category?: "individuals" | "business" | "all";
  limit?: number;
}

export function Services({ category = "all", limit }: ServicesProps) {
  let filteredServices = SERVICES;

  if (category !== "all") {
    filteredServices = SERVICES.filter(service => service.category === category);
  }

  if (limit) {
    filteredServices = filteredServices.slice(0, limit);
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert legal advice for individuals and businesses across a wide range of practice areas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <Card key={service.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild variant="ghost" className="ml-auto gap-2">
                  <Link href={`/services/${service.slug}`}>
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {!limit && (
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
