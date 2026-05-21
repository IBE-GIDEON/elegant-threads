import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Camera,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  Clock3,
  Gem,
  Mail,
  Menu,
  MessageCircle,
  Music,
  PencilRuler,
  Phone,
  Ruler,
  Scissors,
  Shirt,
  Sparkles,
  SwatchBook,
  Users,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { StitchDivider } from "@/components/stitch-divider";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type GalleryItem = {
  title: string;
  description: string;
  image: string;
  alt: string;
  className?: string;
};

type ProcessStep = {
  label: string;
  title: string;
  description: string;
};

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

// Replace these placeholders with the final brand details when available.
const brand = {
  name: "Elegance Stitches",
  email: "heremail@example.com",
  phoneLabel: "+000 000 000 000",
  phoneHref: "tel:+000000000000",
  whatsappHref: "https://wa.me/000000000000",
  instagramHref: "#",
  tiktokHref: "#",
  facebookHref: "#",
};

const services: Service[] = [
  {
    title: "Custom Dressmaking",
    description:
      "Made-to-measure dresses designed around your silhouette, occasion, and personal style with couture-level attention.",
    icon: Shirt,
  },
  {
    title: "Alterations & Repairs",
    description:
      "Refined adjustments, reshaping, hemming, and invisible repairs that restore confidence and comfort to every garment.",
    icon: Scissors,
  },
  {
    title: "Bridal & Event Wear",
    description:
      "Elegant gowns and occasion pieces finished with delicate structure, premium detailing, and graceful movement.",
    icon: Gem,
  },
  {
    title: "Corporate / Uniform Tailoring",
    description:
      "Sharp, polished tailoring for teams, uniforms, and branded wardrobes that need consistency and sophistication.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Pattern Making",
    description:
      "Thoughtful pattern development that turns sketches, inspiration, and concepts into reliable garment foundations.",
    icon: PencilRuler,
  },
  {
    title: "Fabric Consultation",
    description:
      "Guidance on drape, texture, durability, and finishing so each design begins with the right material choice.",
    icon: SwatchBook,
  },
];

// Swap these royalty-free Pexels URLs for approved brand photography whenever ready.
const galleryItems: GalleryItem[] = [
  {
    title: "Elegant Evening Dress",
    description: "Bespoke drape and movement shaped for a polished finish.",
    image:
      "https://images.pexels.com/photos/6461072/pexels-photo-6461072.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A tailor using a measuring tape to fit a dress with care.",
    className: "md:col-span-2",
  },
  {
    title: "Precision Alteration",
    description: "Measured changes that preserve the original beauty of the garment.",
    image:
      "https://images.pexels.com/photos/30902518/pexels-photo-30902518.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "Hands marking fabric with precision during tailoring work.",
  },
  {
    title: "Hand-Finished Detail",
    description: "Clean, careful finishing where every stitch matters.",
    image:
      "https://images.pexels.com/photos/9850069/pexels-photo-9850069.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A close-up of a sewing machine working across rich red fabric.",
  },
  {
    title: "Modern Custom Fit",
    description: "Tailoring that balances comfort, structure, and elegant shape.",
    image:
      "https://images.pexels.com/photos/18022029/pexels-photo-18022029.jpeg?auto=compress&cs=tinysrgb&w=1600",
    alt: "A seamstress standing confidently in her studio workspace.",
    className: "md:col-span-2",
  },
];

const processSteps: ProcessStep[] = [
  {
    label: "01",
    title: "Consultation",
    description:
      "We begin with your ideas, wardrobe needs, event plans, and the silhouette you want to achieve.",
  },
  {
    label: "02",
    title: "Measurement",
    description:
      "Precise measurements are taken carefully to ensure comfort, proportion, and a flattering final fit.",
  },
  {
    label: "03",
    title: "Cutting & Sewing",
    description:
      "Patterns, fabric, and finishing are handled with discipline so the craftsmanship feels beautifully intentional.",
  },
  {
    label: "04",
    title: "Final Fitting",
    description:
      "The final appointment refines every detail so your garment is polished, wearable, and ready with confidence.",
  },
];

const benefits = [
  "Clean finishing and neatly refined seams",
  "Perfect fitting shaped around your body",
  "Reliable delivery and thoughtful time management",
  "Personal style advice for fabrics and silhouettes",
  "High-quality fabric handling from cutting to pressing",
  "Professional customer service from first message to final fitting",
];

const testimonials = [
  {
    quote:
      "My dress fit so beautifully that it felt made for me in every sense. The finishing was neat, elegant, and truly premium.",
    name: "Amara O.",
    context: "Custom evening dress",
  },
  {
    quote:
      "I brought in a suit that needed serious reshaping, and the final fit looked sharp, modern, and professionally tailored.",
    name: "Tunde A.",
    context: "Alterations client",
  },
  {
    quote:
      "From consultation to final fitting, the process was calm, organized, and full of detail. I felt listened to the entire way.",
    name: "Ifeoma E.",
    context: "Bridal client",
  },
];

const socialLinks = [
  { label: "Instagram", href: brand.instagramHref, icon: Camera },
  { label: "TikTok", href: brand.tiktokHref, icon: Music },
  { label: "Facebook", href: brand.facebookHref, icon: Users },
  { label: "WhatsApp", href: brand.whatsappHref, icon: MessageCircle },
];

export default function Home() {
  return (
    <div className="relative bg-[var(--color-ivory)] text-[var(--color-charcoal)]">
      <header className="sticky top-0 z-50 pt-4">
        <div className="section-shell">
          <div className="glass-panel flex items-center justify-between rounded-full border border-white/70 px-4 py-3 shadow-[0_18px_40px_rgba(34,18,23,0.08)]">
            <a href="#top" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-burgundy)] text-white">
                <Scissors className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-lg tracking-[0.16em] text-[var(--color-burgundy)] uppercase">
                  {brand.name}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  Bespoke tailoring with elegant precision
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--color-muted)] lg:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[var(--color-burgundy)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-burgundy)] px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(110,35,58,0.28)] hover:-translate-y-0.5 hover:bg-[var(--color-burgundy-deep)]"
              >
                Book a Fitting
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <details className="relative lg:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-center rounded-full border border-[var(--color-border)] bg-white/70 p-3 text-[var(--color-burgundy)]">
                <Menu className="h-4 w-4" aria-hidden="true" />
                <span className="sr-only">Open navigation</span>
              </summary>
              <div className="absolute right-0 top-14 w-56 rounded-3xl border border-white/70 bg-[var(--color-panel-strong)] p-4 shadow-[0_20px_50px_rgba(44,22,30,0.12)] backdrop-blur">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-2xl px-3 py-2 text-sm font-medium text-[var(--color-muted)] hover:bg-[rgba(110,35,58,0.07)] hover:text-[var(--color-burgundy)]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="section-space section-shell">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal className="flex flex-col gap-8">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-4 py-2 text-sm text-[var(--color-burgundy)]">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Elegant bespoke sewing, alterations, and premium finishing
              </div>

              <div className="space-y-6">
                <p className="font-display text-sm tracking-[0.3em] text-[var(--color-burgundy)] uppercase">
                  Premium Tailoring Studio
                </p>
                <h1 className="font-display text-balance text-5xl leading-[1.02] text-[var(--color-charcoal)] sm:text-6xl lg:text-7xl">
                  Custom Tailoring Crafted With Precision
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                  Elegant sewing, alterations, and bespoke garment services made
                  with care, detail, and style.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-burgundy)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(110,35,58,0.26)] hover:-translate-y-0.5 hover:bg-[var(--color-burgundy-deep)]"
                >
                  Book a Fitting
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--color-border)] bg-white/80 px-7 py-4 text-sm font-semibold text-[var(--color-charcoal)] hover:-translate-y-0.5 hover:border-[rgba(110,35,58,0.25)] hover:bg-white"
                >
                  View Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  "Made-to-measure garments",
                  "Elegant finishing standards",
                  "Warm, professional service",
                ].map((item, index) => (
                  <Reveal
                    key={item}
                    delay={120 * (index + 1)}
                    className="rounded-[1.6rem] border border-white/70 bg-white/70 p-5 shadow-[0_16px_30px_rgba(44,22,30,0.06)]"
                  >
                    <p className="font-display text-lg text-[var(--color-burgundy)]">
                      0{index + 1}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                      {item}
                    </p>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            <Reveal delay={160} className="relative">
              <div className="fabric-panel sheen rounded-[2rem] border border-white/70 bg-[var(--color-burgundy-deep)] p-3 shadow-[0_32px_80px_rgba(44,22,30,0.18)]">
                <div className="relative overflow-hidden rounded-[1.55rem]">
                  <Image
                    src="https://images.pexels.com/photos/6461072/pexels-photo-6461072.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Tailor measuring a garment with elegant precision."
                    width={1200}
                    height={1500}
                    priority
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="h-[520px] w-full object-cover sm:h-[620px]"
                  />

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgba(18,10,13,0.36)] to-transparent" />

                  <div className="absolute left-5 top-5 rounded-3xl bg-[rgba(255,252,247,0.92)] px-4 py-3 shadow-lg backdrop-blur">
                    <p className="font-display text-lg text-[var(--color-burgundy)]">
                      Atelier Detail
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-muted)]">
                      Careful measurement, balanced silhouettes, and polished fit.
                    </p>
                  </div>

                  <div className="absolute bottom-24 right-5 max-w-[14rem] rounded-3xl border border-white/30 bg-[rgba(50,16,28,0.64)] p-4 text-white shadow-lg backdrop-blur">
                    <p className="font-display text-lg">Fabric. Form. Finish.</p>
                    <p className="mt-1 text-sm leading-6 text-white/78">
                      A refined process shaped around quality craftsmanship.
                    </p>
                  </div>

                  <div className="thread-track pointer-events-none" aria-hidden="true">
                    <div className="scissor-glide absolute left-0 top-1/2 -translate-y-1/2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/92 shadow-lg">
                        <Scissors className="h-5 w-5 text-[var(--color-burgundy)]" />
                      </div>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-[rgba(233,138,115,0.94)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white">
                      Cut with care
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <StitchDivider />

        <section id="about" className="section-shell section-space">
          <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
            <Reveal className="relative">
              <div className="fabric-panel rounded-[2rem] border border-white/70 bg-white/80 p-3 shadow-[0_28px_70px_rgba(44,22,30,0.12)]">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="https://images.pexels.com/photos/18022029/pexels-photo-18022029.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="A skilled seamstress in her studio surrounded by tailoring tools."
                    width={1200}
                    height={1400}
                    loading="eager"
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="h-[420px] w-full object-cover sm:h-[520px]"
                  />
                </div>
              </div>

              <div className="glass-panel absolute -bottom-8 right-4 max-w-xs rounded-[1.6rem] border border-white/70 p-5">
                <p className="font-display text-xl text-[var(--color-burgundy)]">
                  “Every garment deserves the kind of finish that feels quietly luxurious.”
                </p>
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-8">
              <SectionHeading
                eyebrow="Meet the Seamstress"
                title="Tailoring that honours craftsmanship, confidence, and personal style."
                description="Elegance Stitches is built around careful hands, trained eyes, and a love for garments that fit beautifully. From bespoke pieces to polished alterations, every project is approached with patience, technical precision, and a mature sense of style."
              />

              <p className="max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Whether the work begins with a sketch, a fitting, or a garment
                that needs refinement, the goal remains the same: to create
                clothing that looks elevated, feels comfortable, and reflects the
                person wearing it.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Precise Measurements",
                    copy: "Balanced proportions and careful fitting for a flattering silhouette.",
                    icon: Ruler,
                  },
                  {
                    title: "Premium Finishing",
                    copy: "Clean seams, polished pressing, and thoughtful construction throughout.",
                    icon: Sparkles,
                  },
                  {
                    title: "Custom Designs",
                    copy: "Original pieces shaped around your taste, purpose, and fabric choice.",
                    icon: PencilRuler,
                  },
                ].map((item, index) => (
                  <Reveal
                    key={item.title}
                    delay={160 + index * 100}
                    className="surface-panel rounded-[1.6rem] border border-white/70 p-5"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(110,35,58,0.08)] text-[var(--color-burgundy)]">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-display text-2xl text-[var(--color-charcoal)]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                      {item.copy}
                    </p>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <StitchDivider />

        <section id="services" className="section-shell section-space">
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title="Professional sewing services tailored to modern wardrobes and memorable occasions."
              description="Every service is shaped to feel polished, reliable, and beautifully finished, whether you need a one-of-a-kind garment or careful refinement to a loved piece."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 90}
                className="group surface-panel rounded-[1.8rem] border border-white/70 p-7 hover:-translate-y-1.5 hover:shadow-[0_26px_52px_rgba(44,22,30,0.14)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(110,35,58,0.08)] text-[var(--color-burgundy)] group-hover:bg-[rgba(110,35,58,0.12)]">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-3xl text-[var(--color-charcoal)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {service.description}
                </p>
              </Reveal>
            ))}
          </div>
        </section>

        <StitchDivider />

        <section id="gallery" className="section-shell section-space">
          <Reveal>
            <SectionHeading
              eyebrow="Featured Work"
              title="A gallery that reflects texture, precision, and elegant tailoring in motion."
              description="Use these visuals as the first version of the portfolio. They can later be replaced with original studio work, client commissions, and campaign photography."
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {galleryItems.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 100}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_24px_60px_rgba(44,22,30,0.1)] ${item.className ?? ""}`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={1000}
                    loading="eager"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-[320px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[380px]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(20,12,15,0.72)] via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="font-display text-3xl text-white">{item.title}</p>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <StitchDivider />

        <section id="process" className="section-shell section-space">
          <div className="section-wash surface-panel relative overflow-hidden rounded-[2.4rem] border border-white/70 px-5 py-10 sm:px-8 lg:px-12">
            <Reveal>
              <SectionHeading
                eyebrow="Process"
                title="A calm, structured journey from first idea to final fitting."
                description="The process is designed to feel organized and reassuring, with enough flexibility for creativity and enough structure for dependable results."
                align="center"
              />
            </Reveal>

            <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
              <div className="absolute left-0 right-0 top-14 hidden border-t border-dashed border-[rgba(110,35,58,0.18)] lg:block" />
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.label}
                  delay={index * 90}
                  className="relative rounded-[1.8rem] border border-white/70 bg-white/82 p-6 shadow-[0_20px_42px_rgba(44,22,30,0.08)]"
                >
                  <div className="relative z-10 mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-burgundy)] text-sm font-semibold tracking-[0.18em] text-white">
                    {step.label}
                  </div>
                  <h3 className="font-display text-3xl text-[var(--color-charcoal)]">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                    {step.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <StitchDivider />

        <section className="section-shell section-space">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                eyebrow="Why Choose Us"
                title="A premium experience built on technical care and warm professionalism."
                description="Clients choose Elegance Stitches for garments that feel polished, reliable, and beautifully considered from the inside out."
              />

              <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 shadow-[0_24px_60px_rgba(44,22,30,0.1)]">
                <Image
                  src="https://images.pexels.com/photos/4925691/pexels-photo-4925691.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Elegant textiles arranged with rich texture and soft neutral tones."
                  width={1200}
                  height={900}
                  loading="eager"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-[340px] w-full object-cover"
                />
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Reveal
                  key={benefit}
                  delay={index * 80}
                  className="surface-panel rounded-[1.7rem] border border-white/70 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[rgba(110,35,58,0.08)] text-[var(--color-burgundy)]">
                      <Check className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <p className="text-base leading-7 text-[var(--color-muted)]">
                      {benefit}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <StitchDivider />

        <section className="section-shell section-space">
          <Reveal>
            <SectionHeading
              eyebrow="Testimonials"
              title="Kind words from clients who wanted garments to feel as exceptional as they looked."
              description="These placeholder testimonials are written to feel realistic and can be replaced later with real client feedback, names, and occasion details."
              align="center"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Reveal
                key={testimonial.name}
                delay={index * 90}
                className="surface-panel rounded-[1.8rem] border border-white/70 p-7"
              >
                <p className="font-display text-[3.25rem] leading-none text-[var(--color-gold)]">
                  “
                </p>
                <p className="mt-2 text-base leading-8 text-[var(--color-muted)]">
                  {testimonial.quote}
                </p>
                <div className="mt-6 border-t border-[rgba(110,35,58,0.12)] pt-5">
                  <p className="font-display text-2xl text-[var(--color-charcoal)]">
                    {testimonial.name}
                  </p>
                  <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--color-burgundy)]">
                    {testimonial.context}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <StitchDivider />

        <section id="contact" className="section-shell section-space">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <Reveal className="surface-panel rounded-[2.2rem] border border-white/70 p-6 sm:p-8">
              <SectionHeading
                eyebrow="Contact / Booking"
                title="Ready to bring your design to life?"
                description="Send a fitting request, ask about alterations, or start a conversation about a custom piece. The form is fully styled and ready for a real email or CRM integration later."
              />
              <div className="mt-8">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={120} className="space-y-5">
              <div className="surface-panel rounded-[2rem] border border-white/70 p-7">
                <p className="font-display text-3xl text-[var(--color-charcoal)]">
                  Visit, call, or message
                </p>
                <div className="mt-6 space-y-4">
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-center gap-4 rounded-[1.4rem] border border-white/60 bg-white/80 p-4 hover:border-[rgba(110,35,58,0.18)] hover:bg-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(110,35,58,0.08)] text-[var(--color-burgundy)]">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.22em] text-[var(--color-burgundy)]">
                        Email
                      </span>
                      <span className="text-base text-[var(--color-muted)]">
                        {brand.email}
                      </span>
                    </span>
                  </a>

                  <a
                    href={brand.phoneHref}
                    className="flex items-center gap-4 rounded-[1.4rem] border border-white/60 bg-white/80 p-4 hover:border-[rgba(110,35,58,0.18)] hover:bg-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(110,35,58,0.08)] text-[var(--color-burgundy)]">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.22em] text-[var(--color-burgundy)]">
                        Phone
                      </span>
                      <span className="text-base text-[var(--color-muted)]">
                        {brand.phoneLabel}
                      </span>
                    </span>
                  </a>

                  <a
                    href={brand.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-[1.4rem] border border-white/60 bg-white/80 p-4 hover:border-[rgba(110,35,58,0.18)] hover:bg-white"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgba(110,35,58,0.08)] text-[var(--color-burgundy)]">
                      <MessageCircle className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.22em] text-[var(--color-burgundy)]">
                        WhatsApp
                      </span>
                      <span className="text-base text-[var(--color-muted)]">
                        Start a quick message
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              <div className="surface-panel rounded-[2rem] border border-white/70 p-7">
                <p className="font-display text-3xl text-[var(--color-charcoal)]">
                  Business hours
                </p>
                <div className="mt-5 flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(110,35,58,0.08)] text-[var(--color-burgundy)]">
                    <Clock3 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="space-y-2 text-[var(--color-muted)]">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: By appointment only</p>
                  </div>
                </div>
              </div>

              <div className="surface-panel rounded-[2rem] border border-white/70 p-7">
                <p className="font-display text-3xl text-[var(--color-charcoal)]">
                  Social placeholders
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/82 px-4 py-3 text-sm font-medium text-[var(--color-muted)] hover:border-[rgba(110,35,58,0.2)] hover:text-[var(--color-burgundy)]"
                    >
                      <link.icon className="h-4 w-4" aria-hidden="true" />
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-[rgba(110,35,58,0.12)] pb-10 pt-8">
        <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="font-display text-3xl text-[var(--color-charcoal)]">
              {brand.name}
            </p>
            <p className="text-base leading-7 text-[var(--color-muted)]">
              Elegant custom tailoring, polished alterations, and refined fashion
              finishing for clients who value fit, detail, and craftsmanship.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <nav className="flex flex-wrap gap-4 text-sm font-medium text-[var(--color-muted)]">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-[var(--color-burgundy)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-wrap gap-4 text-sm text-[var(--color-muted)]">
              <a href={`mailto:${brand.email}`} className="hover:text-[var(--color-burgundy)]">
                {brand.email}
              </a>
              <a href={brand.phoneHref} className="hover:text-[var(--color-burgundy)]">
                {brand.phoneLabel}
              </a>
            </div>
            <p className="text-sm text-[var(--color-muted)]">
              © 2026 {brand.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
