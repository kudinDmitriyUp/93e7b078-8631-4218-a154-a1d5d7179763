"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TagAbout from '@/components/sections/about/TagAbout';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Car, Settings, Search, FileText, Ship, Truck, Star, TrendingUp, Users, MessageSquare, Handshake } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="medium"
      sizing="medium"
      background="grid"
      cardStyle="glass-depth"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Services", id: "about" },
            { name: "Vehicles", id: "product" },
            { name: "Process", id: "feature" },
            { name: "Testimonials", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="USA Auto Import"
          button={{
            text: "Get Quote",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Premium USA Car Imports Made Easy"
          description="Professional turn-key car importing service from the USA. We handle all paperwork, shipping, and customs for your dream American vehicle."
          tag="Turn-Key Import Service"
          tagIcon={Car}
          buttons={[
            {
              text: "Start Import Process",
              href: "contact"
            },
            {
              text: "View Available Cars",
              href: "product"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395055231-0ki8sa2i.jpg",
              imageAlt: "Luxury sports car import"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395056063-cxko2x3i.jpg",
              imageAlt: "Premium American muscle car"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395056822-djb2oqek.jpg",
              imageAlt: "Modern luxury SUV"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395057520-y3pzjmgt.jpg",
              imageAlt: "Classic American car"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395058360-85kk5n9f.jpg",
              imageAlt: "Electric car modern"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="Why Choose Us"
          description="With over 15 years of experience in automotive imports, we provide comprehensive turn-key solutions that eliminate the complexity of importing your dream car from the USA. Our expert team handles every aspect from vehicle sourcing to final delivery at your doorstep."
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardFour
          title="Complete Import Process"
          description="Our streamlined four-step process ensures your car import is handled professionally from start to finish"
          tag="How It Works"
          tagIcon={Settings}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Vehicle Sourcing & Purchase",
              description: "We locate and purchase your desired vehicle from trusted USA dealers and auctions, ensuring quality and authenticity with thorough inspections",
              icon: Search
            },
            {
              title: "Documentation & Paperwork",
              description: "Complete handling of all import documentation, customs clearance, and regulatory compliance to ensure smooth border crossing",
              icon: FileText
            },
            {
              title: "Shipping & Logistics",
              description: "Professional vehicle shipping via secure container transport with full insurance coverage and real-time tracking throughout the journey",
              icon: Ship
            },
            {
              title: "Final Delivery & Registration",
              description: "Local registration assistance and final delivery to your location with full vehicle inspection and warranty documentation",
              icon: Truck
            }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardOne
          title="Featured Available Vehicles"
          description="Premium American vehicles currently available for import with full documentation and inspection reports"
          tag="Available Now"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="scale-rotate"
          products={[
            {
              id: "mustang-2024",
              name: "2024 Ford Mustang GT",
              price: "$78,500",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395059110-xzfobl98.jpg",
              imageAlt: "2024 Ford Mustang GT"
            },
            {
              id: "camaro-2023",
              name: "2023 Chevrolet Camaro SS",
              price: "$65,800",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395059878-dhsx0hc7.jpg",
              imageAlt: "2023 Chevrolet Camaro SS"
            },
            {
              id: "challenger-2024",
              name: "2024 Dodge Challenger SRT",
              price: "$89,200",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395060571-sfr3slr8.jpg",
              imageAlt: "2024 Dodge Challenger SRT"
            }
          ]}
        />
      </div>

      <div id="metric" data-section="metric">
        <MetricCardTwo
          title="Proven Track Record"
          description="Our success metrics demonstrate our commitment to excellence in automotive imports"
          tag="Our Success"
          tagIcon={TrendingUp}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="blur-reveal"
          metrics={[
            {
              id: "1",
              value: "2,500+",
              description: "Vehicles Successfully Imported"
            },
            {
              id: "2",
              value: "98%",
              description: "Customer Satisfaction Rate"
            },
            {
              id: "3",
              value: "15+",
              description: "Years of Import Experience"
            },
            {
              id: "4",
              value: "100%",
              description: "Legal Compliance Record"
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Our Expert Team"
          description="Experienced professionals dedicated to making your car import process seamless and successful"
          tag="Meet The Team"
          tagIcon={Users}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="opacity"
          members={[
            {
              id: "1",
              name: "Michael Rodriguez",
              role: "Import Specialist",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395064295-inywpf2g.jpg",
              imageAlt: "Michael Rodriguez Import Specialist"
            },
            {
              id: "2",
              name: "Sarah Thompson",
              role: "Logistics Manager",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395064904-spuqo3qv.jpg",
              imageAlt: "Sarah Thompson Logistics Manager"
            },
            {
              id: "3",
              name: "David Chen",
              role: "Documentation Expert",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395065679-ww8p1jp5.jpg",
              imageAlt: "David Chen Documentation Expert"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real experiences from satisfied customers who trusted us with their dream car imports"
          tag="Customer Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "James Wilson",
              role: "Business Owner",
              testimonial: "Outstanding service from start to finish. They handled everything professionally and my Mustang arrived exactly as promised. Couldn't be happier with the entire process.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395064295-inywpf2g.jpg",
              imageAlt: "James Wilson"
            },
            {
              id: "2",
              name: "Maria Garcia",
              role: "Car Enthusiast",
              testimonial: "After researching multiple import companies, I chose them based on their reputation. They exceeded all expectations and made importing my dream car stress-free.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395064904-spuqo3qv.jpg",
              imageAlt: "Maria Garcia"
            },
            {
              id: "3",
              name: "Robert Johnson",
              role: "Collector",
              testimonial: "Professional, reliable, and transparent throughout the entire process. They kept me informed at every step and delivered exactly what was promised. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395065679-ww8p1jp5.jpg",
              imageAlt: "Robert Johnson"
            },
            {
              id: "4",
              name: "Lisa Anderson",
              role: "Executive",
              testimonial: "The team's expertise in handling all the complex paperwork and logistics was impressive. My imported vehicle arrived in perfect condition and on schedule.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395066237-lf536or0.jpg",
              imageAlt: "Lisa Anderson"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Brands"
          description="We work with established dealers and auction houses across the United States"
          tag="Our Partners"
          tagIcon={Handshake}
          textboxLayout="default"
          logos={["/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp", "/placeholders/placeholder1.webp"]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Get answers to common questions about our car import services"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How long does the import process take?",
              content: "The complete import process typically takes 4-8 weeks depending on the vehicle location, shipping route, and customs clearance. We provide regular updates throughout the entire process."
            },
            {
              id: "2",
              title: "What are the total costs involved?",
              content: "Total costs include the vehicle purchase price, shipping fees, customs duties, taxes, and our service fee. We provide a detailed cost breakdown upfront with no hidden charges."
            },
            {
              id: "3",
              title: "Do you handle all the paperwork?",
              content: "Yes, we manage all documentation including title transfers, customs declarations, safety certifications, and local registration requirements. Our team ensures full compliance with all regulations."
            },
            {
              id: "4",
              title: "What types of vehicles can you import?",
              content: "We can import most passenger vehicles, sports cars, classic cars, and light trucks that meet local safety and emissions standards. Contact us to verify eligibility for your specific vehicle."
            },
            {
              id: "5",
              title: "Is the vehicle insured during shipping?",
              content: "Yes, all vehicles are fully insured during transport with comprehensive coverage. We work with leading marine insurance providers to ensure complete protection of your investment."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ready to Import Your Dream Car?"
          description="Get started with a free consultation and detailed quote for your vehicle import requirements."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "vehicle",
              type: "text",
              placeholder: "Vehicle Make & Model",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your requirements, budget, and any specific preferences...",
            rows: 5,
            required: true
          }}
          buttonText="Get Free Quote"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35bov8zjOkdGcVDNMecOsQMxHeM/uploaded-1763395067849-at6jxkif.jpg"
          imageAlt="USA Auto Import office"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoText="USA Auto Import"
          copyrightText="© 2025 | USA Auto Import. All rights reserved."
          columns={[
            {
              title: "Services",
              items: [
                {
                  label: "Vehicle Sourcing",
                  href: "about"
                },
                {
                  label: "Import Process",
                  href: "feature"
                },
                {
                  label: "Documentation",
                  href: "feature"
                },
                {
                  label: "Shipping & Delivery",
                  href: "feature"
                }
              ]
            },
            {
              title: "Vehicles",
              items: [
                {
                  label: "Sports Cars",
                  href: "product"
                },
                {
                  label: "Muscle Cars",
                  href: "product"
                },
                {
                  label: "Luxury SUVs",
                  href: "product"
                },
                {
                  label: "Classic Cars",
                  href: "product"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Team",
                  href: "team"
                },
                {
                  label: "Testimonials",
                  href: "testimonial"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}