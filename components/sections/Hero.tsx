import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
              {SITE_CONFIG.tagline}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            <span className="text-primary">{SITE_CONFIG.name.split(" ")[0]} & Co</span>
            <br />
            <span className="text-secondary">Solicitors LLP</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            {SITE_CONFIG.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gap-2">
              <Link href="/contact">
                Get In Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={`tel:${SITE_CONFIG.phone}`}>
                <Phone className="h-4 w-4" />
                {SITE_CONFIG.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-40 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>
    </section>
  );
}
