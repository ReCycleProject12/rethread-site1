import React, { useState } from "react";
import { Button, OutlineButton } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input, Textarea } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import {
  CheckCircle,
  Leaf,
  Recycle,
  Sparkles,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Shirt,
  Scissors,
  HandHeart,
  ShoppingBag,
  Users,
  Calendar,
  Quote,
} from "lucide-react";

export default function App() {
  const [impact, setImpact] = useState({
    pounds: 0,
    shoes: 0,
    families: 0,
    partners: 0,
  });
  const CO2_PER_POUND_KG = 2.06; // illustrative factor
  const co2 = (impact.pounds * CO2_PER_POUND_KG).toFixed(0);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-emerald-100/70">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-2xl bg-emerald-600 text-white shadow-md">
              <Recycle className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">Sole &amp; Stitch Project</span>
            <Badge className="ml-2 bg-emerald-100 text-emerald-800">Youth-Led</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {[
              ["#mission", "Mission"],
              ["#how", "How"],
              ["#donate", "Donate"],
              ["#impact", "Impact"],
              ["#volunteer", "Volunteer"],
              ["#map", "Drop-off Map"],
              ["#events", "Events"],
              ["#partners", "For Stores"],
              ["#faqs", "FAQs"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="hover:text-emerald-700 hover:underline underline-offset-4 decoration-2"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700" asChild>
              <a href="#donate">Donate Shoes &amp; Clothes</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 mb-4 ring-1 ring-emerald-200">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              <span className="text-xs font-semibold text-emerald-700">Circular fashion, powered by students</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Don’t let your attire go to waste
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-prose">
              In Boca Raton, we collect gently-used <strong>shoes &amp; clothes</strong> from the community and unsold stock from local
              stores, then <strong>clean</strong>, <strong>repair</strong>, and <strong>donate</strong> everything to families, schools, and shelters across South Florida.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700" asChild>
                <a href="#donate">Donate Now</a>
              </Button>
              <OutlineButton className="rounded-2xl border-emerald-300 text-emerald-700 hover:bg-emerald-50" asChild>
                <a href="#partners">Store Partner Pickup</a>
              </OutlineButton>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-600" /> Free local pickups
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-4 w-4 text-emerald-600" /> Keep textiles out of landfills
              </div>
              <div className="flex items-center gap-2">
                <HandHeart className="h-4 w-4 text-emerald-600" /> 100% donated
              </div>
            </div>
          </div>

                    {/* Hero image collage */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-lg ring-1 ring-emerald-100">
              <img
                alt="Donated sneakers arranged in a circle"
                className="h-full w-full object-cover"
                src="/images/hero-wide.jpg"
                width={1600}
                height={1040}
              />
            </div>
          
            <div className="rounded-3xl overflow-hidden shadow-lg ring-1 ring-emerald-100">
              <img
                alt="Clothing rack of jackets and shirts"
                className="h-full w-full object-cover"
                src="/images/hero-1.jpg"
                width={900}
                height={1200}
              />
            </div>
          
            <div className="rounded-3xl overflow-hidden shadow-lg ring-1 ring-emerald-100">
              <img
                alt="Thrift store aisle with colorful clothing"
                className="h-full w-full object-cover"
                src="/images/hero-2.jpg"
                width={900}
                height={1200}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-16 lg:py-24 bg-gradient-to-b from-white to-emerald-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Our Mission</h2>
              <p className="mt-4 text-neutral-700 max-w-3xl">
                The Sole &amp; Stitch Project reduces textile waste and supports local families. We partner with stores to rescue unsold
                inventory, invite community donations of shoes and apparel, then clean, repair, and redistribute items through schools,
                shelters, and youth organizations.
              </p>
            </div>
            <Card className="rounded-2xl border-emerald-100 hover:shadow-md transition">
              <CardHeader>
                <CardTitle className="text-xl">Year-1 Goals</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <Recycle className="h-4 w-4 text-emerald-700" />
                  <span>
                    Rescue <strong>1,000+ lbs</strong> of shoes &amp; clothes
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shirt className="h-4 w-4 text-emerald-700" />
                  <span>
                    Donate <strong>500+ pieces</strong> to local orgs
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Scissors className="h-4 w-4 text-emerald-700" />
                  <span>Clean &amp; repair every item we can</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-emerald-700" />
                  <span>Monthly community drives</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How */}
      <section id="how" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-emerald-900">How It Works</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                Icon: ShoppingBag,
                title: "1) Collect",
                text: "Community donations + unsold store inventory (donation acknowledgments on request).",
              },
              {
                Icon: Leaf,
                title: "2) Clean & Repair",
                text: "Student volunteers sort, wash, sanitize shoes, and make simple fixes.",
              },
              {
                Icon: HandHeart,
                title: "3) Donate",
                text: "We distribute to local shelters, schools, and youth programs in South Florida.",
              },
            ].map(({ Icon, title, text }) => (
              <Card key={title} className="rounded-2xl border-emerald-100 hover:ring-1 hover:ring-emerald-200 transition">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-emerald-900">
                    <Icon className="h-5 w-5 text-emerald-700" /> {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">{text}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50/60 via-white to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-emerald-900">
            Donate Shoes &amp; Clothes
          </h2>
          <p className="mt-2 text-center text-neutral-700">We accept clean, wearable items. See guidelines below or request a pickup.</p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="rounded-2xl border-emerald-100">
              <CardHeader>
                <CardTitle>What We Accept</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 grid gap-2">
                {[
                  "Athletic & casual shoes (paired)",
                  "New socks (in package)",
                  "Jeans, tees, hoodies, jackets",
                  "Kids’ clothes & backpacks",
                  "Accessories (belts, hats)",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-700 mt-0.5" /> <span>{t}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-emerald-100">
              <CardHeader>
                <CardTitle>What We Can’t Take</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700 grid gap-2">
                {["Moldy, wet, or heavily damaged items", "Undergarments", "Single shoes (no pairs)", "Hazardous materials"].map(
                  (t) => (
                    <div key={t} className="flex items-start gap-2">
                      <Leaf className="h-4 w-4 text-neutral-400 mt-0.5" /> <span>{t}</span>
                    </div>
                  )
                )}
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <Button
              asChild
              className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
            >
              <a href="#contact">Request a Pickup</a>
            </Button>
          </div>

          {/* Safety */}
          <div id="safety" className="mt-12">
            <h3 className="text-xl font-semibold text-emerald-900">Sanitizing &amp; Safety</h3>
            <p className="text-sm text-neutral-700 mt-2 max-w-3xl">
              We sort and inspect all items. Shoes are wiped and sanitized; clothes are washed or steam-cleaned as needed. Volunteers wear
              gloves during sorting and follow school/partner safety policies.
            </p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center text-emerald-900">Impact Tracker</h2>
          <p className="mt-2 text-center text-neutral-600">
            Play with the numbers below (local preview only). On your live site, update after each drive.
          </p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Pounds Rescued", key: "pounds" },
              { label: "Pairs of Shoes", key: "shoes" },
              { label: "Families Served", key: "families" },
              { label: "Partner Orgs", key: "partners" },
            ].map((s) => (
              <Card key={s.key} className="rounded-2xl border-emerald-100 hover:ring-1 hover:ring-emerald-200 transition">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-emerald-700">{impact[s.key]}</div>
                  <div className="mt-2 text-sm text-neutral-600">{s.label}</div>
                  <div className="mt-4">
                    <Input
                      type="number"
                      min={0}
                      value={impact[s.key]}
                      onChange={(e) => setImpact({ ...impact, [s.key]: Number(e.target.value) })}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-2xl mt-6 border-emerald-100">
            <CardContent className="p-6 grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold">Estimated CO₂e avoided</div>
                <div className="text-4xl font-black text-emerald-700 mt-1">{co2} kg</div>
                <div className="text-xs text-neutral-500 mt-1">
                  Using example factor {CO2_PER_POUND_KG} kg CO₂e / lb (illustrative only).
                </div>
              </div>
              <div className="md:col-span-2 text-sm text-neutral-700">
                This is a simple estimate based on total pounds rescued. Replace with your preferred factor or a verified source when you
                publish impact reports.
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="py-16 lg:py-24 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-emerald-700" />
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Volunteer with Us</h2>
          </div>
          <p className="mt-2 text-neutral-700 max-w-3xl">
            Pickups, sorting & cleaning, social media, or event ops — there’s a role for everyone.
          </p>
          <Card className="rounded-2xl mt-6 border-emerald-100">
            <CardContent className="p-6">
              {/* (Preview-only) Wire to email or Google Sheet on production if you want */}
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Full name" required />
                  <Input type="email" placeholder="Email" required />
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  <Input placeholder="Phone (optional)" />
                  <Input placeholder="School / Organization" />
                </div>
                <div>
                  <div className="text-sm font-medium mb-2">Roles you’re interested in</div>
                  <div className="grid sm:grid-cols-2 gap-2 text-sm">
                    {[
                      "Pickups & Logistics",
                      "Sorting & Cleaning",
                      "Sewing & Repairs",
                      "Photography / Social Media",
                      "Pop-Up Events",
                      "Partnership Outreach",
                    ].map((r) => (
                      <label key={r} className="flex items-center gap-2">
                        <input type="checkbox" className="h-4 w-4" />
                        <span>{r}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <Textarea placeholder="Tell us your availability or experience (optional)" />
                <Button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                  Sign Up
                </Button>
                <p className="text-xs text-neutral-500">On the live site, we can send these to your email or a Google Sheet.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-emerald-700" />
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Drop-Off &amp; Pickup</h2>
          </div>
          <p className="mt-2 text-neutral-700 max-w-3xl">Bring items to a drop-off or request a free pickup in Boca Raton.</p>
          <div className="mt-6 grid lg:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-emerald-200">
              <iframe
                title="Boca Raton Map"
                className="w-full h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.489928374673!2d-80.128932!3d26.358689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8e3f7c7f1f72b%3A0x3b7a8a8a8a8a8a8a!2sBoca%20Raton%2C%20FL!5e0!3m2!1sen!2sus!4v1700000000000"
              />
            </div>
            <div className="grid gap-3 text-sm text-neutral-700">
              <Card className="rounded-2xl border-emerald-100">
                <CardContent className="p-4">
                  <div className="font-semibold">Community Drop-Off (Pilot)</div>
                  <div>Mon–Fri, 3–6pm</div>
                  <div className="flex items-center gap-2 mt-1 text-neutral-600">
                    <MapPin className="h-4 w-4" /> Boca Raton, FL (exact location TBA)
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl border-emerald-100">
                <CardContent className="p-4">
                  <div className="font-semibold">Free Home Pickup</div>
                  <div>Request a time that works for you.</div>
                  <div className="mt-2">
                    <Button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700" asChild>
                      <a href="#contact">Request Pickup</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 lg:py-24 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <Calendar className="h-5 w-5 text-emerald-700" />
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Upcoming Drives &amp; Pop-Ups</h2>
          </div>
          <p className="mt-2 text-neutral-700">Follow Instagram for exact dates & drops.</p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Back-to-School Drive",
                when: "Sat, Sept 21 • 9:30–1:30",
                where: "Boca Raton Community Center",
                blurb: "Shoes & basics for K-12",
              },
              {
                title: "Store Clean-Out Week",
                when: "Oct 5–11",
                where: "Partner boutiques (Boca)",
                blurb: "We’ll pick up unsold stock.",
              },
              {
                title: "Fall Pop-Up",
                when: "Sat, Nov 2 • 10–2",
                where: "Local Farmer’s Market",
                blurb: "$0 cost — everything donated",
              },
            ].map((e, i) => (
              <Card
                key={i}
                className="rounded-2xl overflow-hidden border-emerald-100 hover:ring-1 hover:ring-emerald-200 transition"
              >
                <div className="h-40 w-full bg-gradient-to-br from-emerald-50 to-teal-50 grid place-items-center text-neutral-500 text-sm">
                  Event Banner
                </div>
                <CardHeader>
                  <CardTitle className="text-emerald-900">{e.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  <div className="font-medium">{e.when}</div>
                  <div className="flex items-center gap-2 text-neutral-600 mt-1">
                    <MapPin className="h-4 w-4" /> {e.where}
                  </div>
                  <div className="mt-2">{e.blurb}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners + Press */}
      <section id="partners" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Store Partners</h2>
          <p className="mt-3 text-neutral-700 max-w-2xl">
            Clearing out unsold or returned inventory? We’ll pick it up for free, provide a donation acknowledgment, and ensure it gets to
            people who need it.
          </p>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {["Thrift & Charity Shops", "Local Boutiques", "Big-Box Retail"].map((t) => (
              <Card key={t} className="rounded-2xl border-emerald-100 hover:ring-1 hover:ring-emerald-200 transition">
                <CardHeader>
                  <CardTitle>{t}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  Flexible scheduling • Acknowledgment letters • Shout-outs on Instagram
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-2xl mt-8 border-emerald-100">
            <CardContent className="p-6 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="text-xl font-semibold text-emerald-900">Media &amp; Press</div>
                <p className="text-sm text-neutral-700 mt-2">
                  Covering youth-led sustainability? We have a one-pager, photos, and impact stats ready to go.
                </p>
              </div>
              <div className="md:text-right">
                <Button
                  className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                  asChild
                >
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    Download Press Kit (PDF)
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-gradient-to-b from-white to-emerald-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-3xl font-extrabold tracking-tight text-emerald-900">What People Say</div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I donated three pairs of sneakers — loved how easy pickup was!",
                name: "Jordan M.",
                role: "Donor",
              },
              {
                quote: "Our students received clean, quality clothes. Huge thanks!",
                name: "Ms. Delgado",
                role: "School Counselor",
              },
              {
                quote: "Partnering on clean-outs made room for new inventory and helped families.",
                name: "East Palmetto Boutique",
                role: "Store Partner",
              },
            ].map((t, i) => (
              <Card key={i} className="rounded-2xl border-emerald-100">
                <CardContent className="p-6">
                  <Quote className="h-6 w-6 text-emerald-700" />
                  <p className="mt-3 text-neutral-800">{t.quote}</p>
                  <div className="mt-4 text-sm text-neutral-600">— {t.name}, {t.role}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">FAQs</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-sm text-neutral-800">
            <Card className="rounded-2xl border-emerald-100">
              <CardContent className="p-6">
                <p className="font-semibold">Are donations tax-deductible?</p>
                <p className="mt-2">
                  We provide acknowledgment letters for store donations. Contributions are not tax-deductible at this time.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-emerald-100">
              <CardContent className="p-6">
                <p className="font-semibold">Do you accept damaged items?</p>
                <p className="mt-2">
                  Light wear is fine. We can clean and make simple repairs. Severely damaged, moldy, or wet items can’t be accepted.
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-emerald-100">
              <CardContent className="p-6">
                <p className="font-semibold">Where do items go?</p>
                <p className="mt-2">Local families via schools, shelters, and youth programs in South Florida.</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-emerald-100">
              <CardContent className="p-6">
                <p className="font-semibold">How often are drives?</p>
                <p className="mt-2">Monthly — follow Instagram for details.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 lg:py-24 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-emerald-900">Get in Touch</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">
              Questions, donations, or store partnerships — we’d love to hear from you.
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center gap-2">
                <Instagram className="h-4 w-4" />{" "}
                <a
                  className="underline hover:text-emerald-700"
                  href="https://instagram.com/soleandstitchproject"
                  target="_blank"
                  rel="noreferrer"
                >
                  @soleandstitchproject
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />{" "}
                <a className="underline hover:text-emerald-700" href="mailto:averyrobbins15@icloud.com">
                  averyrobbins15@icloud.com
                </a>
              </div>
            </div>

            {/* Email capture (preview only) */}
            <Card className="rounded-2xl mt-6 border-emerald-100">
              <CardHeader>
                <CardTitle>Get Drive Reminders</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                  <Input type="email" placeholder="Email address" required />
                  <Button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-neutral-500 mt-2">On production, we can connect this to Buttondown or Mailchimp.</p>
              </CardContent>
            </Card>
          </div>

          {/* LIVE email form via FormSubmit */}
          <Card className="rounded-2xl border-emerald-100">
            <CardHeader>
              <CardTitle>Pickup / Donation Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                action="https://formsubmit.co/avery.robbins@pinecrest.edu"
                method="POST"
                className="grid gap-4"
              >
                <input type="hidden" name="_subject" value="Sole & Stitch: New Donation/Pickup Request" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input name="name" placeholder="Your name" required />
                  <Input name="email" placeholder="Email" type="email" required />
                </div>
                <Input name="organization" placeholder="Organization / Store (optional)" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input name="city" placeholder="City" defaultValue="Boca Raton" />
                  <Input name="preferred_date" placeholder="Preferred pickup date" type="date" />
                </div>
                <Textarea
                  name="details"
                  placeholder="What do you have? (e.g., 3 bags of kids' clothes, 5 pairs of sneakers)…"
                  className="min-h-[120px]"
                />
                <Button
                  type="submit"
                  className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  Send Request
                </Button>
                <p className="text-xs text-neutral-500">Submissions go straight to avery.robbins@pinecrest.edu.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-t from-emerald-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-2xl bg-emerald-600 text-white shadow-md">
                <Recycle className="h-5 w-5" />
              </div>
              <span className="font-extrabold text-lg tracking-tight">Sole &amp; Stitch Project</span>
            </div>
            <p className="text-sm text-neutral-600">Student-led clothing &amp; shoe rescue for South Florida.</p>
          </div>
          <div className="text-sm text-neutral-600 space-y-2">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Boca Raton, FL
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> averyrobbins15@icloud.com
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (555) 010-2025
            </div>
          </div>
          <div className="text-sm text-neutral-600">
            <p className="font-semibold mb-2">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              <a href="#donate" className="hover:text-emerald-700">
                Donate Items
              </a>
              <a href="#partners" className="hover:text-emerald-700">
                For Stores
              </a>
              <a href="#impact" className="hover:text-emerald-700">
                Impact
              </a>
              <a href="#how" className="hover:text-emerald-700">
                How it works
              </a>
            </div>
            <p className="text-xs text-neutral-500 mt-4">
              Legal: We provide acknowledgment letters for store donations. Contributions are not tax-deductible at this time.
            </p>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Sole &amp; Stitch Project. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
