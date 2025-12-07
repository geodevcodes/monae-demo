import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa6";
import Image from "next/image";

export default function Showcase() {
  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#faf8f3]/80 border-b border-gray-200/50">
        <div className="px-4 py-4 md:px-8 flex items-center justify-between max-w-5xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="text-2xl">
              <Image
                src={"/brandlogo.png"}
                width={100}
                height={100}
                alt="Monae brand logo image" // Updated Alt Text
                priority
                className="w-full h-10 object-cover"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/PZxPQAIogM0nyRNiQAAAABJRU5ErkJggg=="
              />
            </div>
            <span className="font-semibold text-gray-800">Monae</span>{" "}
            {/* Updated Product Name */}
          </div>
          <div className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer for fixed nav */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">
              🧠 AI-Powered Personal Finance • Nigeria First
            </p>{" "}
            {/* Updated Tagline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Meet Monae: Your Conversational Finance Assistant.
            </h1>{" "}
            {/* Updated H1 to reflect AI focus */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Monae is designed for **Gen Z and Young Professionals in Africa**
              to effortlessly track spending, crush budgeting goals, and build
              lasting, healthy money habits—all through a simple, human-like
              chat.
            </p>{" "}
            {/* Updated description to target audience and value */}
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button className="cursor-pointer bg-black text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                <FaApple size={20} />
                Download for iOS
              </button>
              <button className="cursor-pointer bg-emerald-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-emerald-700 transition">
                <BiLogoPlayStore size={20} />
                Get it on Google Play
              </button>
            </div>
            <p className="text-sm text-gray-500">
              iOS & Android • Smart Insights • Money Mastery Starts Here
            </p>{" "}
            {/* Updated Call to Action tag */}
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/showcase1.png"
              alt="Monae app mockup showing conversational AI interface" // Updated Alt Text
              width={250}
              height={250}
              className="w-full max-w-sm md:max-w-xs"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-8 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Ditch the spreadsheets. Talk to your money.
        </h2>{" "}
        {/* Updated Section Title */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Feature 1: Conversational AI Chat Interface */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">💬</div> {/* New Emoji */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Conversational AI Chat
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Chat with Monae to ask financial questions, check spending trends,
              or get clear, simple advice.
            </p>{" "}
            {/* Updated Content */}
          </div>

          {/* Feature 2: Real-Time Spend Tracking */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">⏰</div> {/* New Emoji */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Real-Time Spend Tracking
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Securely integrate with local banks (via Mono/Okra) to see all
              your balances and transactions instantly.
            </p>{" "}
            {/* Updated Content */}
          </div>

          {/* Feature 3: Emotional-Aware Nudges & Budgeting */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">🎯</div> {/* New Emoji */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Smart Budgeting & Nudges
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Set category budgets and receive motivational, emotional-aware
              alerts before you overspend.
            </p>{" "}
            {/* Updated Content */}
          </div>

          {/* Feature 4: Smart Insights */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="text-5xl">💡</div> {/* New Emoji */}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Personalized Financial Insights
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Get weekly/monthly reports and AI-suggested saving strategies
              based on your unique habits.
            </p>{" "}
            {/* Updated Content */}
          </div>
        </div>
      </section>

      {/* Quick Play Section (Repurposed for The Problem and The Solution) */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          The Problem We're Solving
        </h2>{" "}
        {/* Updated Section Title */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Problem 1 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Money Mystery
            </h3>
            <p className="text-gray-600">
              Most people struggle to know exactly where their hard-earned money
              disappears to each month.
            </p>{" "}
            {/* Updated Content */}
          </div>

          {/* Problem 2 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Overspending & Guilt
            </h3>
            <p className="text-gray-600">
              Traditional tools are too complex, leading to overspending and
              difficulty building consistent savings.
            </p>{" "}
            {/* Updated Content */}
          </div>

          {/* Problem 3 */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-600 mb-3">
              Local Ecosystem Gap
            </h3>
            <p className="text-gray-600">
              Most global finance apps are not fully adapted to the nuances of
              the local African banking ecosystems.
            </p>{" "}
            {/* Updated Content */}
          </div>
        </div>
        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-lg max-w-5xl mx-auto">
          <p className="text-gray-700 italic">
            **Monae** is the solution: A simple, conversational AI that
            understands **you** and your **local financial world**, making money
            management a habit, not a chore.
          </p>{" "}
          {/* Updated Blockquote */}
        </div>
      </section>

      {/* Screenshots Section (Re-labeled for Core Features) */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          See Monae in Action: Core Features
        </h2>{" "}
        {/* Updated Section Title */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Core Feature 1: Chat Interface */}
          {[
            { label: "AI Chat Interface", imageUrl: "/showcase1.png" },
            { label: "Expense Categorization", imageUrl: "/showcase2.png" },
            { label: "Budget Over-Limit Alert", imageUrl: "/showcase3.png" },
            { label: "Secure Biometric Login", imageUrl: "/showcase1.png" },
          ].map((screen, idx) => (
            <div key={idx} className="text-center">
              <div className="rounded-3xl lg:aspect-[9/19] mb-2 flex items-center justify-center">
                <Image
                  src={screen.imageUrl}
                  alt={`Monae app screen: ${screen.label}`} // Updated Alt Text
                  width={200}
                  height={200}
                  className="-full"
                />
              </div>
              <p className="text-gray-600 text-sm">{screen.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Made with Care Section (Repurposed for Target Audience and Security) */}
      <section className="px-4 md:px-8 py-16 md:py-24 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Built for the African Millennial & Gen Z
        </h2>{" "}
        {/* Updated Section Title */}
        <p className="text-lg text-gray-600 leading-relaxed">
          Monae is not just another tracker—it's an assistant built with
          **bank-grade security** (End-to-end encryption, biometric login) and
          **local intelligence** to ensure a seamless, secure, and highly
          relevant financial experience for young professionals starting their
          wealth journey in Nigeria.
        </p>{" "}
        {/* Updated Content */}
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-12 border-t border-gray-200 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-4">
            © 2025 Monae - AI Finance Assistant
          </p>{" "}
          {/* Updated Footer Text */}
          <div className="flex justify-center gap-6 text-sm text-gray-600 mb-4">
            <a href="#" className="hover:text-gray-800">
              Privacy Policy
            </a>
            <span className="text-gray-400">•</span>
            <a href="#" className="hover:text-gray-800">
              Terms of Use
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Made with 💚 by Rasheed Olatunde
          </p>
        </div>
      </footer>
    </div>
  );
}
