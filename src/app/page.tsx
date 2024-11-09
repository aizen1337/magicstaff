import {
  Calendar,
  User,
  Bell,
  Clock,
  MessageCircle,
  TrendingUp,
  Replace,
} from "lucide-react";
const features = [
  {
    name: "Basic Scheduling",
    description: "Set up shifts without a hassle – simple and drag-and-drop easy! (For free in starter)",
    icon: <Calendar />,
    commingSoon: false,
    includedInStarter: true,
  },
  {
    name: "Employee Profiles",
    description: "Keep everyone’s info in one place – no digging around. (For free in starter)",
    icon: <User />,
    commingSoon: false,
    includedInStarter: true,
    
  },
  {
    name: "Availability Input",
    description: "No more guessing! Let your team share when they’re free.",
    icon: <Clock />,
    commingSoon: false,
    includedInStarter: false,
  },
  {
    name: "Shift Reminders",
    description: "Never miss a shift! Automatic reminders straight to your inbox or phone.",
    icon: <Bell />,
    commingSoon: false,
    includedInStarter: false,
  },
  {
    name: "Basic Time Tracking",
    description: "Track work hours with one click – no sweat.",
    icon: <Clock />,
    commingSoon: false,
    includedInStarter: false,
  },
  {
    name: "Calendar Sync",
    description: "Sync shifts to your personal calendar, so everything’s in one view.",
    icon: <Calendar />,
    commingSoon: true,
    includedInStarter: false,
  },
  {
    name: "Basic Reports",
    description: "Get the essentials on hours and attendance. Easy peasy.",
    icon: <TrendingUp />,
    commingSoon: false,
    includedInStarter: false,
  },
  {
    name: "Simple Team Chat",
    description: "Quick, simple chats with teammates – no more missed messages.",
    icon: <MessageCircle />,
    commingSoon: true,
    includedInStarter: false,
  },
  {
    name: "Shift Swapping Requests",
    description: "Need a change? Swap shifts with a quick approval.",
    icon: <Replace />,
    commingSoon: false,
    includedInStarter: false,
  }
];

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default async function LandingPage() {
  return (
    <main>
      <div className="bg-dark">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
            </a>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-100">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm/6 font-semibold text-gray-100">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#924949c5] to-[#090261] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl">
              Bring your team, we{"'"}ll handle the rest.
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa vitae beatae illo recusandae magnam consequuntur labore obcaecati voluptas, expedita maiores explicabo aut eligendi rem voluptatibus nostrum iusto dicta facilis! Dolores?
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-purple-950 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-100">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#924949c5] to-[#090261] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
      <div className="bg-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-purple-800">Deploy faster</h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-100 sm:text-5xl lg:text-balance">
            Everything you need to manage your organization
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
  {features.map((feature) => (
    <div
      key={feature.name}
      className={`relative p-4 pl-16 ${feature.includedInStarter && 'border-solid border-2 border-purple-900 rounded-xl'}`}
    >
      <dt className="text-base/7 font-semibold text-gray-100">
        <div
          className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg ${
            feature.commingSoon ? "bg-yellow-500 text-white" : "bg-purple-950 text-gray-100"
          }`}
        >
          {feature.icon}
        </div>
        {feature.name}
        
        {feature.commingSoon && (
          <span className="ml-2 inline-flex items-center rounded-full bg-yellow-500 px-3 py-0.5 text-xs font-semibold text-white">
            Coming Soon
          </span>
        )}
        {feature.includedInStarter && (
          <span className="ml-2 inline-flex items-center rounded-full bg-purple-900 px-3 py-0.5 text-xs font-semibold text-white">
            Included in starter
          </span>
        )}
      </dt>
      <dd className={`mt-2 text-base/7 ${feature.commingSoon ? "text-gray-200" : "text-gray-400"}`}>
        {feature.description}
      </dd>
    </div>
  ))}
</dl>

        </div>
      </div>
    </div>
    </main>

  )
}
