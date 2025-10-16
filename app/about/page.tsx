import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Users, Shield, Heart } from "lucide-react";
import { KEY_MESSAGES, SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE_CONFIG.name} and our commitment to providing excellent legal services in Derby and surrounding areas.`,
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            About <span className="text-primary">Alexander & Co</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            {SITE_CONFIG.tagline}
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Personal Service</h3>
              <p className="text-sm text-muted-foreground">
                Face-to-face meetings with experienced solicitors
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">LEXCEL Quality</h3>
              <p className="text-sm text-muted-foreground">
                Awarded since December 2000
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Advice</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive legal expertise across multiple areas
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Local Focus</h3>
              <p className="text-sm text-muted-foreground">
                Serving Derby and surrounding communities
              </p>
            </CardContent>
          </Card>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {SITE_CONFIG.description}
              </p>
              <div className="space-y-4">
                {KEY_MESSAGES.map((message, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {message}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-2xl font-semibold mb-4">Our Locations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We serve clients across Derby, Loughborough, Alvaston, Spondon, Eastwood, and West Bridgford.
                Our main office is conveniently located in the heart of Derby.
              </p>
              <div className="p-4 bg-muted rounded-lg">
                <p className="font-semibold mb-2">Main Office</p>
                <p className="text-muted-foreground">{SITE_CONFIG.address}</p>
                <p className="text-muted-foreground mt-2">
                  Phone: <a href={`tel:${SITE_CONFIG.phone}`} className="text-primary hover:underline">{SITE_CONFIG.phone}</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and discuss how we can help with your legal needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
