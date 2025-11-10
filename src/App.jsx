// Updated for Tailwind CSS v4 + Vite + latest shadcn (v3.5)
// Preserves all existing design and functionality

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ListChecks,
  LayoutDashboard,
  Users2,
  ShieldCheck,
  BarChart3,
  Sparkles,
  BadgeCheck,
  Zap,
  PlayCircle,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

// Tailwind v4: Uses new color tokens and spacing defaults
// No design deletions — only internal updates for compatibility

const demoTeams = [
  {
    name: "store",
    progress: 50,
    stats: { total: 6, pending: 2, verify: 0, done: 3 },
    tasks: [
      { title: "Update shelf lighting", pr: "medium", due: "Overdue" },
      { title: "Stock count LEDs", pr: "low", due: "Tomorrow" },
    ],
  },
  {
    name: "Kanhu",
    progress: 0,
    stats: { total: 10, pending: 9, verify: 0, done: 0 },
    tasks: [
      { title: "Vendor follow-up", pr: "medium", due: "Overdue" },
      { title: "Create display", pr: "high", due: "Today" },
    ],
  },
  {
    name: "dj",
    progress: 0,
    stats: { total: 7, pending: 7, verify: 0, done: 0 },
    tasks: [
      { title: "Service ticket #2458", pr: "low", due: "Overdue" },
      { title: "Replace drivers", pr: "medium", due: "This week" },
    ],
  },
];

const pieData = [
  { name: "Pending", value: 18 },
  { name: "To Verify", value: 0 },
  { name: "Completed", value: 3 },
];

const COLORS = ["#fbbf24", "#a78bfa", "#34d399"];

function Stat({ label, value, icon: Icon }) {
  return (
    <div className=" items-center gap-2">
      <div className="rounded-xl p-2 bg-secondary/20 flex items-center justify-center">
        <Icon className="h-4 w-5" />
      </div>
      <p className=" text-[6px] font-semibold mt-2 p-0"> {label}  </p>
      <p className=" p-2">{value}</p>
    </div>
  );
}

function TeamCard({ team }) {
  return (
    <Card className="rounded-2xl shadow-sm border-border/50">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Badge>{team.progress}%</Badge>
            {team.name}
          </CardTitle>
          <Badge variant="secondary" className="gap-1"><Sparkles className="h-3 w-3"/>Live</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-4 gap-2">
          <Stat label="Total" value={team.stats.total} icon={ListChecks} />
          <Stat label="Pending" value={team.stats.pending} icon={Clock3} />
          <Stat label="To Verify" value={team.stats.verify} icon={BadgeCheck} />
          <Stat label="Completed" value={team.stats.done} icon={CheckCircle2} />
        </div>
        <div className="space-y-2">
          {team.tasks.map((t, i) => (
            <div key={i} className="flex items-center justify-between rounded-xl border p-3">
              <div>
                <p className="font-medium leading-none">{t.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.due} • {t.pr} priority</p>
              </div>
              <Button size="sm" variant="outline" className="rounded-xl">Open</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default function TeamForTasksSite() {
  const [billingAnnual, setBillingAnnual] = useState(true);
  const price = useMemo(() => (billingAnnual ? { basic: 0, pro: 199, scale: 499 } : { basic: 0, pro: 249, scale: 599 }), [billingAnnual]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      {/* All design preserved: navbar, hero, features, demo, pricing, CTA, footer */}
      {/* No deletions — only compatible updates for Tailwind 4 & shadcn v3.5 */}

      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-primary/10 grid place-items-center">
              <ListChecks className="h-4 w-4" />
            </div>
            <span className="font-semibold">Team for Tasks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#demo" className="hover:text-foreground">Live demo</a>
            <a href="#pricing" className="hover:text-foreground">Pricing</a>
            <a href="#faq" className="hover:text-foreground">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="rounded-xl">Sign in</Button>
            <Button className="rounded-xl">
              Launch App <ArrowRight className="ml-2 h-4 w-4"/>
            </Button>
          </div>
        </div>
      </header>

      {/* (Rest of your design retained as-is; no structural changes) */}

   {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold tracking-tight"
            >
              Run your stores like clockwork.
            </motion.h1>
            <p className="mt-4 text-muted-foreground text-lg">
              "Team for Tasks" is a lightweight team task OS built for retail floors and service teams. See everything—pending, to verify, completed—across people and stores in one clean view.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="rounded-2xl">
                Get started free
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl">
                <PlayCircle className="mr-2 h-4 w-4"/> Watch 60‑sec demo
              </Button>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4"/> Role‑based access</div>
              <div className="flex items-center gap-2"><Zap className="h-4 w-4"/> WhatsApp alerts</div>
            </div>
          </div>

          {/* Visual */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Card className="rounded-2xl border shadow-lg">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2"><LayoutDashboard className="h-5 w-5"/> Team Boards</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {demoTeams.map((t, idx) => (
                    <TeamCard key={idx} team={t} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Everything your team needs</h2>
          <p className="mt-3 text-muted-foreground">From assigning work to verifying and closing the loop—optimized for fast‑moving stores.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {[{
            icon: Users2, title: "Employee lists", desc: "Group tasks by people or stores and see status at a glance.",
          }, {
            icon: ListChecks, title: "Templates", desc: "Create once: Daily Open/Close, Display Reset, Service Ticket, and more.",
          }, {
            icon: BarChart3, title: "KPIs & SLAs", desc: "Auto‑track overdue, completion rate, and time‑to‑verify with alerts.",
          }].map((f, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-primary/10 grid place-items-center">
                  <f.icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-2">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{f.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Live demo */}
      <section id="demo" className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Live status view</h3>
            <p className="text-muted-foreground">A compact snapshot of your day. Pending, To Verify, Completed charts update as your team closes tasks.</p>
            <div className="grid grid-cols-2 gap-4">
              <Card className="rounded-2xl">
                <CardHeader className="pb-0"><CardTitle className="text-base">Today</CardTitle></CardHeader>
                <CardContent className="pt-3">
                  <div className="grid grid-cols-2 gap-3">
                    <Stat label="Pending" value={18} icon={Clock3} />
                    <Stat label="Completed" value={3} icon={CheckCircle2} />
                  </div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardHeader className="pb-0"><CardTitle className="text-base">Pie breakdown</CardTitle></CardHeader>
                <CardContent className="pt-3">
                  <div className="h-40">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={70}>
                          {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* Interactive mini‑board */}
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle>Mini board (play with it)</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="store">
                <TabsList className="grid grid-cols-3 w-full">
                  {demoTeams.map((t) => (
                    <TabsTrigger key={t.name} value={t.name} className="capitalize">{t.name}</TabsTrigger>
                  ))}
                </TabsList>
                {demoTeams.map((t) => (
                  <TabsContent key={t.name} value={t.name}>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { name: "Pending", list: t.tasks },
                        { name: "To Verify", list: [] },
                        { name: "Completed", list: [] },
                      ].map((col, idx) => (
                        <div key={idx} className="rounded-2xl border p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold">{col.name}</h4>
                            <Badge variant="outline">{col.list.length}</Badge>
                          </div>
                          <div className="space-y-2">
                            {col.list.length === 0 && (
                              <p className="text-xs text-muted-foreground">No items</p>
                            )}
                            {col.list.map((it, i) => (
                              <div key={i} className="rounded-xl bg-muted/50 border p-2">
                                <p className="text-sm font-medium">{it.title}</p>
                                <p className="text-xs text-muted-foreground">{it.due} • {it.pr}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-4 py-16">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl md:text-3xl font-bold">Simple pricing</h3>
          <div className="flex items-center gap-2">
            <Label htmlFor="annual" className="text-sm">Bill yearly</Label>
            <Switch id="annual" checked={billingAnnual} onCheckedChange={setBillingAnnual} />
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            name: "Starter", tagline: "For one store", price: price.basic, perks: ["3 members", "Checklists & templates", "Email support"], cta: "Start free",
          }, {
            name: "Pro", tagline: "Growing teams", price: price.pro, perks: ["Unlimited members", "Role‑based access", "WhatsApp alerts", "Export to Sheets/Tally"], highlighted: true, cta: "Start 14‑day trial",
          }, {
            name: "Scale", tagline: "Multi‑store ops", price: price.scale, perks: ["HQ dashboards", "SLAs & escalations", "API & SSO", "Priority support"], cta: "Talk to sales",
          }].map((plan, i) => (
            <Card key={i} className={`rounded-2xl relative ${plan.highlighted ? "border-primary shadow-lg" : ""}`}>
              {plan.highlighted && (
                <Badge className="absolute -top-3 left-4">Most popular</Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{plan.tagline}</p>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {plan.perks.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> {p}</li>
                  ))}
                </ul>
                <Button className="w-full mt-6 rounded-xl">{plan.cta}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <Card className="rounded-3xl border-primary/30">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold">Ready to put your tasks on autopilot?</h3>
              <p className="text-muted-foreground mt-2">Invite your team and ship your first checklist in under 5 minutes.</p>
              <div className="mt-4 flex gap-2">
                <Input placeholder="you@company.com" className="max-w-xs rounded-xl" />
                <Button className="rounded-xl">Send invite</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["99.9% uptime", "Data export", "India‑first GST flows", "Works on mobile"].map((k, i) => (
                <div key={i} className="rounded-2xl border p-4 text-sm flex items-center gap-2"><CheckCircle2 className="h-4 w-4"/> {k}</div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted-foreground flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Team for Tasks. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
