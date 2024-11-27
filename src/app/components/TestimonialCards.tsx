'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const fireDetectionTestimonials = [
  {
    quote:
      "Our previous fire detection system relied on outdated smoke detectors and heat sensors that failed to trigger alarms in time during a critical incident. By the time the alarm went off, the fire had already caused catastrophic damage to our warehouse. The delayed response led to a complete inventory loss and significant structural damage. This experience has made us realize that relying on legacy systems with inadequate response times is a recipe for disaster. We needed a solution with real-time detection and faster response capabilities to prevent further loss.",
    name: "John Miller",
    title: "Warehouse Owner",
  },
  {
    quote:
      "The false alarm system at our office building was notorious for causing unnecessary evacuations, disrupting operations, and creating a safety hazard. Our older system had a high rate of nuisance alarms due to poor sensor calibration and an inability to distinguish between benign smoke (like from cooking) and a genuine fire threat. Not only did this impact our bottom line with productivity loss, but the physical and reputational damage from a false alarm was costly. Investing in an advanced fire detection solution with machine learning algorithms that can better discern fire signatures has been essential for us.",
    name: "Sarah Harris",
    title: "Commercial Property Manager",
  },
  {
    quote:
      "We've been running into issues with our traditional fire alarm system, which is reliant on ionization and photoelectric sensors. These systems often failed to detect smoldering fires in their early stages, allowing flames to spread before the alarm was triggered. The result was extensive smoke and water damage, alongside structural impairment of critical equipment. Given the limitations of these legacy systems, it's clear that relying on outdated fire detection protocols, like single-point detection, puts both property and human life at risk. It's imperative to upgrade to smart, networked fire detection systems that can ensure multi-sensory, real-time responses.",
    name: "David Wilson",
    title: "Building Manager",
  },
  {
    quote:
      "One of the most frustrating aspects of our older fire detection system was its inability to differentiate between a real fire and a false alarm triggered by common environmental factors—like steam or dust. This resulted in a large number of false positives, which meant unnecessary evacuations and long-term disruptions. These nuisance alarms significantly damaged tenant trust and strained our operational budget due to the frequency of dispatching emergency services without cause. We've now moved to a solution that integrates thermal imaging and AI-based smoke detection, which has drastically reduced the occurrence of false alarms and improved response times.",
    name: "Jessica Lee",
    title: "Real Estate Developer",
  },
  {
    quote:
      "A tragic incident involving a smoldering fire in one of our residential complexes exposed the fatal flaws in our existing detection system. Despite the fire beginning as a slow burn with minimal smoke, the sensors failed to identify the heat signature until it was too late. By then, significant damage had occurred, and several tenants were displaced. The existing system was built on legacy technology, which didn't incorporate heat mapping or dynamic threat analysis. We've now shifted to a more reliable system that leverages connected IoT devices with predictive analytics to ensure real-time detection and faster intervention, reducing the risk of property loss and, most importantly, saving lives.",
    name: "Michael Brown",
    title: "Property Manager",
  },
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-red-600">Existing System are failing us !!</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={fireDetectionTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials