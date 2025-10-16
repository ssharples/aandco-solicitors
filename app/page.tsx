import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Card, CardContent } from "@/components/ui/card";
import { KEY_MESSAGES } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Key Messages Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Why Choose Alexander & Co?
            </h2>
            <div className="space-y-6">
              {KEY_MESSAGES.map((message, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="flex gap-4">
                      <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        {message}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <Services limit={6} />
    </>
  );
}
