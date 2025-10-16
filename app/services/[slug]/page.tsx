import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Phone, Mail } from "lucide-react";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get related services (same category)
  const relatedServices = SERVICES.filter(
    (s) => s.category === service.category && s.id !== service.id
  ).slice(0, 3);

  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="gap-2">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>

        {/* Service Header */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary uppercase">
                {service.category === "individuals" ? "For Individuals" : "For Business"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {service.description}
            </p>
          </div>

          <Separator className="my-12" />

          {/* Service Details */}
          <Card className="mb-12">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">How We Can Help</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At Alexander & Co Solicitors LLP, we understand that navigating legal matters can be complex and stressful.
                  Our experienced team is here to provide expert guidance and support throughout your {service.title.toLowerCase()} matter.
                </p>
                <p>
                  We believe in providing personal attention to every client. Your initial consultation will be face-to-face,
                  allowing you to get to know your solicitor and feel comfortable discussing your specific needs.
                </p>
                <p>
                  With our LEXCEL quality standard accreditation (awarded since December 2000), you can be confident
                  that you&apos;re receiving the highest level of professional service.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Get Expert Advice</h2>
              <p className="text-muted-foreground mb-6">
                Contact us today to discuss your {service.title.toLowerCase()} needs and arrange a consultation
                with one of our experienced solicitors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/contact">
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="gap-2">
                  <a href={`tel:${SITE_CONFIG.phone}`}>
                    <Phone className="h-4 w-4" />
                    {SITE_CONFIG.phone}
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((relatedService) => (
                  <Link
                    key={relatedService.id}
                    href={`/services/${relatedService.slug}`}
                    className="block p-6 border rounded-lg hover:shadow-lg transition-all hover:border-primary"
                  >
                    <h3 className="font-semibold mb-2">{relatedService.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {relatedService.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
