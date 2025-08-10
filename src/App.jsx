import React from "react";
import { Button, OutlineButton } from "./components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Input, Textarea } from "./components/ui/input";
import { Badge } from "./components/ui/badge";
import { CheckCircle, Leaf, Recycle, Truck, Sparkles, Instagram, Mail, Phone, MapPin, Shirt, Scissors, HandHeart } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/75 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-2xl bg-emerald-600 text-white shadow-md">
              <Recycle className="h-5 w-5" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">ReThread</span>
            <Badge className="ml-2">Youth-Led</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#mission" className="hover:text-emerald-700">Mission</a>
            <a href="#how" className="hover:text-emerald-700">How It Works</a>
            <a href="#impact" className="hover:text-emerald-700">Impact</a>
            <a href="#partners" className="hover:text-emerald-700">Partners</a>
            <a href="#events" className="hover:text-emerald-700">Events</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild className="rounded-2xl">
              <a href="#join">Get Involved</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 mb-4">
              <Sparkles className="h-4 w-4 text-emerald-700" />
              <span className="text-xs font-semibold text-emerald-700">Circular fashion, powered by students</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
              Give Clothes a <span className="text-emerald-600">Second Life</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-700 max-w-prose">
              ReThread rescues unsold and excess clothing from local stores and communities, then cleans, repairs, and rehomes every piece through student-run pop-ups, donations, and upcycling.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button className="rounded-2xl" asChild>
                <a href="#partners">Become a Partner</a>
              </Button>
              <OutlineButton className="rounded-2xl" asChild>
                <a href="#events">Shop a Pop-Up</a>
              </OutlineButton>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" /> Free pickups</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-600" /> Local impact</div>
              <div className="flex items-center gap-2"><HandHeart className="h-4 w-4 text-emerald-600" /> Community-run</div>
            </div>
          </div>

          {/* Hero image collage */}
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden shadow-lg">
              <img alt="Colorful folded clothes" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img alt="Thrift rack" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800&auto=format&fit=crop" />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-lg">
              <img alt="Sewing repair" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1581089781785-603411fa81e5?q=80&w=800&auto=format&fit=crop" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold tracking-tight">Our Mission</h2>
              <p className="mt-4 text-neutral-700 max-w-3xl">
                We reduce textile waste by partnering with thrift shops, retailers, and our community to rescue quality clothing that would otherwise be discarded. We clean, repair, and re-style pieces for resale pop-ups, upcycle damaged items, and donate essentials to local shelters.
              </p>
            </div>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="text-xl">Year-1 Goals</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                <div className="flex items-center gap-3"><Recycle className="h-4 w-4 text-emerald-700" /><span>Rescue <strong>1,000+ lbs</strong> of clothing</span></div>
                <div className="flex items-center gap-3"><Shirt className="h-4 w-4 text-emerald-700" /><span>Donate <strong>500+ pieces</strong> to local orgs</span></div>
                <div className="flex items-center gap-3"><Scissors className="h-4 w-4 text-emerald-700" /><span>Upcycle damaged items into totes & patches</span></div>
                <div className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-emerald-700" /><span>Host <strong>10+</strong> student-run pop-ups</span></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center">How It Works</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Truck className="h-5 w-5 text-emerald-700" /> 1) You Set Aside Extras</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Items that didn’t sell, end-of-season stock, or gently damaged pieces.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><Leaf className="h-5 w-5 text-emerald-700" /> 2) We Pick Up & Prep</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Student volunteers handle pickups, washing, repairs, and sorting.
              </CardContent>
            </Card>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2"><HandHeart className="h-5 w-5 text-emerald-700" /> 3) Second Life</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-neutral-700">
                Resale at pop-ups funds local causes; essentials go directly to partner shelters.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center">Impact Tracker</h2>
          <p className="mt-2 text-center text-neutral-600">Updated after every pickup and pop-up.</p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Pounds Rescued", value: "0" },
              { label: "Pieces Donated", value: "0" },
              { label: "Pop-Ups Hosted", value: "0" },
              { label: "Funds Raised", value: "$0" },
            ].map((stat) => (
              <Card key={stat.label} className="rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-black text-emerald-700">{stat.value}</div>
                  <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section id="partners" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:flex items-end justify-between gap-10">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">Partner with Us</h2>
              <p className="mt-3 text-neutral-700 max-w-2xl">
                We make donation pickups fast and flexible. Join our monthly pickup route or schedule a one-time clean-out. We’ll feature your store on our site and socials.
              </p>
            </div>
            <div className="mt-6 lg:mt-0">
              <Button asChild className="rounded-2xl">
                <a href="#contact">Request a Pickup</a>
              </Button>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {["Thrift & Charity Shops", "Local Boutiques", "Big-Box Retail"].map((t) => (
              <Card key={t} className="rounded-2xl">
                <CardHeader>
                  <CardTitle>{t}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  Flexible scheduling · Donation receipts on request · Shout-outs on Instagram
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-16 lg:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-center">Upcoming Pop-Ups</h2>
          <p className="mt-2 text-center text-neutral-600">Follow us on Instagram for dates & drops.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="rounded-2xl overflow-hidden">
                <img alt="Event placeholder" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" />
                <CardHeader>
                  <CardTitle>Pop-Up #{i}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-neutral-700">
                  Date TBA • Location TBA • Vintage & basics • $3–$10 racks
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Join / Contact */}
      <section id="join" className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Join the Movement</h2>
            <p className="mt-3 text-neutral-700 max-w-prose">
              Students, store owners, and supporters are welcome. Volunteer for pickups, sewing & repairs, social media, or event ops. Every hour helps keep clothes in use and out of landfills.
            </p>

            <div className="mt-6 grid gap-3 text-sm">
              <div className="flex items-center gap-2"><Instagram className="h-4 w-4" /> <a className="underline hover:text-emerald-700" href="https://instagram.com/rethreadproject" target="_blank" rel="noreferrer">@ReThreadProject</a></div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a className="underline hover:text-emerald-700" href="mailto:info@rethreadproject.org">info@rethreadproject.org</a></div>
            </div>
          </div>

          <Card id="contact" className="rounded-2xl">
            <CardHeader>
              <CardTitle>Contact / Pickup Request</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={(e) => e.preventDefault()} className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input placeholder="Your name" required />
                  <Input placeholder="Email" type="email" required />
                </div>
                <Input placeholder="Organization / Store (optional)" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Input placeholder="City" />
                  <Input placeholder="Preferred pickup date" type="date" />
                </div>
                <Textarea placeholder="Tell us what you have (e.g., 3 bags of tops, 1 box of jeans)…" className="min-h-[120px]" />
                <Button type="submit" className="rounded-2xl">Send</Button>
                <p className="text-xs text-neutral-500">This demo form doesn’t send emails yet. Connect it to your email or a backend when you’re ready.</p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 items-start">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 grid place-items-center rounded-2xl bg-emerald-600 text-white shadow-md"><Recycle className="h-5 w-5" /></div>
              <span className="font-extrabold text-lg tracking-tight">ReThread</span>
            </div>
            <p className="text-sm text-neutral-600">Student-led clothing rescue in your city. Circular fashion for real life.</p>
          </div>
          <div className="text-sm text-neutral-600 space-y-2">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Your City, USA</div>
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@rethreadproject.org</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> (555) 010-2025</div>
          </div>
          <div className="text-sm text-neutral-600">
            <p className="font-semibold mb-2">Quick Links</p>
            <div className="grid grid-cols-2 gap-2">
              <a href="#partners" className="hover:text-emerald-700">Partners</a>
              <a href="#events" className="hover:text-emerald-700">Events</a>
              <a href="#impact" className="hover:text-emerald-700">Impact</a>
              <a href="#how" className="hover:text-emerald-700">How it works</a>
            </div>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-neutral-500">© {new Date().getFullYear()} ReThread Project. All rights reserved.</div>
      </footer>
    </div>
  );
}
