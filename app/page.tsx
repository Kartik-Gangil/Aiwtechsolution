import Link from 'next/link';
import { 
  Search, 
  MapPin, 
  Star, 
  TrendingUp, 
  ShieldCheck, 
  Building2, 
  HeartHandshake, 
  ArrowRight
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-xl bg-white/70 border-b border-white/20 shadow-sm support-[backdrop-filter]:bg-white/40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold tracking-tighter text-slate-900 flex items-center gap-2 group">
            <div className="bg-indigo-600 text-white p-2 rounded-xl group-hover:bg-indigo-700 transition-colors">
              <Building2 size={24} strokeWidth={2.5} />
            </div>
            AiWtechsolution
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <Link href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors">About</Link>
            <Link href="#features" className="text-slate-600 hover:text-indigo-600 transition-colors">Features</Link>
            <Link href="/listings" className="text-slate-600 hover:text-indigo-600 transition-colors">Directory</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/admin"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Partner Setup
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh] bg-slate-950">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen animate-pulse duration-1000"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-sm font-medium text-white/90 tracking-wide">The Premier Digital Concierge</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.1] mb-8 max-w-5xl mx-auto">
            Discover Exceptional <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-amber-200">
              Local Businesses
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Your exclusive directory to the finest restaurants, luxury hotels, premium services, and curated experiences in your area.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/listings"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-900 font-semibold text-lg hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              <Search className="w-5 h-5 mr-2" />
              Explore Directory
            </Link>
            <Link
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-semibold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group perspective-[1000px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative aspect-[4/3] bg-slate-100 rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern business center" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                   <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-sm border border-white/50 inline-block transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                     <p className="font-bold text-slate-900 text-lg">Curated Excellence</p>
                     <p className="text-slate-600 text-sm mt-1">Only verified, top-tier partners.</p>
                   </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-3">About The Platform</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Evaluating the standard of local discovery.
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                AiWtechsolution was built with a singular vision: to bridge the gap between discerning customers and exceptional local businesses. We eliminate the noise of typical directories to bring you a hand-picked selection of premium establishments.
              </p>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Whether you&apos;re looking for a world-class dining experience, a reliable luxury service, or boutique retail, our platform functions as your personal digital concierge.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Rigorous verification process for all listed partners",
                  "Intuitive, distraction-free user interface",
                  "Direct connection to business owners"
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="bg-indigo-100 p-1.5 rounded-full mr-4 text-indigo-600 flex-shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section (Bento Grid) */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-indigo-600 font-semibold tracking-wider uppercase text-sm mb-3">Capabilities</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Designed for seamless discovery</h3>
            <p className="text-lg text-slate-600">Our platform leverages modern technology to provide an effortless, refined experience for both users and business owners.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="md:col-span-2 bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden relative">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-indigo-50 rounded-full blur-3xl group-hover:bg-indigo-100 transition-colors duration-500"></div>
              <div className="relative z-10">
                <div className="bg-indigo-50 text-indigo-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <Search strokeWidth={2} className="w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Intelligent Search</h4>
                <p className="text-slate-600 leading-relaxed max-w-md">Find exactly what you&apos;re looking for instantly. Our powerful search engine filters through categories, locations, and specialized tags to deliver precise results.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
               <div className="absolute -bottom-8 -right-8 text-slate-50 opacity-50 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-110">
                  <MapPin className="w-48 h-48" />
               </div>
               <div className="relative z-10">
                <div className="bg-violet-50 text-violet-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                  <MapPin strokeWidth={2} className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3">Hyper-Local Map</h4>
                <p className="text-slate-600 leading-relaxed">Discover top-rated establishments right in your exact neighborhood.</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="bg-amber-50 text-amber-600 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Star strokeWidth={2} className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">Premium Curation</h4>
              <p className="text-slate-600 leading-relaxed">Every business goes through a strict vetting process to maintain platform quality.</p>
            </div>

            <div className="md:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-slate-700 shadow-lg group relative overflow-hidden text-white flex flex-col justify-center">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-8">
                <div className="hidden sm:flex bg-white/10 w-20 h-20 rounded-full items-center justify-center backdrop-blur-sm border border-white/20 flex-shrink-0">
                   <TrendingUp className="w-10 h-10 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-3">For Business Owners</h4>
                  <p className="text-slate-300 leading-relaxed mb-6 max-w-lg">Claim your listing, manage your brand presence, and gain access to premium analytics directly from our unified admin dashboard.</p>
                  <Link href="/admin" className="inline-flex items-center text-emerald-400 font-semibold hover:text-emerald-300 transition-colors group/link w-fit">
                    Access Partner Portal
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 border-y border-slate-200 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 text-center lg:divide-x divide-slate-100">
            <div>
              <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tighter">500<span className="text-indigo-600">+</span></div>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">Curated Listings</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tighter">50<span className="text-violet-600">+</span></div>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">Categories</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tighter">10<span className="text-emerald-500">k</span></div>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">Active Members</p>
            </div>
            <div>
              <div className="text-5xl lg:text-6xl font-black text-slate-900 mb-4 tracking-tighter">24<span className="text-amber-500">/7</span></div>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm">Concierge Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-600"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 md:p-20 rounded-[3rem] max-w-5xl mx-auto shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Elevate Your Business Presence
            </h2>
            <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Join an exclusive network of premium establishments. Reach a discerning audience looking for the best in class.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/admin/add"
                className="px-8 py-4 rounded-full bg-white text-indigo-900 font-bold text-lg hover:bg-slate-100 hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                Apply for Listing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-16 md:py-24 border-t border-slate-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            <div className="lg:col-span-2">
              <Link href="/" className="text-2xl font-black text-white flex items-center gap-2 mb-6 w-fit">
                <div className="bg-indigo-600 p-1.5 rounded-lg">
                  <Building2 size={20} strokeWidth={3} />
                </div>
                AiWtechsolution
              </Link>
              <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
                The premier digital concierge connecting discerning individuals with exceptional local businesses and services.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Directory</h4>
              <ul className="space-y-4">
                <li><Link href="/listings" className="hover:text-indigo-400 transition-colors">Browse All</Link></li>
                <li><Link href="/listings" className="hover:text-indigo-400 transition-colors">Restaurants</Link></li>
                <li><Link href="/listings" className="hover:text-indigo-400 transition-colors">Hotels</Link></li>
                <li><Link href="/listings" className="hover:text-indigo-400 transition-colors">Services</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Platform</h4>
              <ul className="space-y-4">
                <li><Link href="#about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                <li><Link href="#features" className="hover:text-indigo-400 transition-colors">Features</Link></li>
                <li><Link href="/admin" className="hover:text-indigo-400 transition-colors">Partner Dashboard</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-6 uppercase text-sm tracking-wider">Support</h4>
              <ul className="space-y-4">
                <li><a href="mailto:support@aiwtechsolution.com" className="hover:text-indigo-400 transition-colors">Contact Us</a></li>
                <li><Link href="/" className="hover:text-indigo-400 transition-colors">Help Center</Link></li>
                <li><Link href="/" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} AiWtechsolution. All rights reserved.</p>
            <div className="flex gap-6">
              <span>Crafted with precision</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
