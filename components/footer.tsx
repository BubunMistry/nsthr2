import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#29A0D8] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="mb-4">
              <Image
                src="/placeholder.svg?height=60&width=150"
                alt="nstHr Logo"
                width={150}
                height={60}
                className="h-16 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">Why nstHr?</h3>
            <p className="mb-4">
              nstHr is an ISO 9001:2015 certified Kolkata-based, young recruitment agency founded by Mr. Abhishek Raj in
              2018. nstHr is not only a consultancy but also a HR firm based in Kolkata. We are one of most reputed
              recruitment agency in Kolkata, known for our timely and cost effective approach.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">How nstHr WORKS:</h3>
            <p className="mb-4">
              We find out job vacancies in various companies and help in matching a candidate's profile with the
              requirements of our clients. We help in selecting the best candidates with excellent skills for our
              clients. For candidate recruitment, we have our own database. We have multiple databases from different
              job portals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <p>Unit No. 1112, 11th Floor, PS Qube, Action Area I, 2D, Newtown, Kolkata, West Bengal 700136</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <p>+91 9502089155</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <p>info@nsthr.in</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <p>helpdesk@nsthr.in</p>
              </div>
            </div>

            <div className="mt-6">
  <h4 className="font-bold mb-2">FOLLOW US:</h4>
  <div className="flex gap-2">
    <Link
      href="https://facebook.com"
      className="bg-white text-[#29A0D8] p-2 rounded-full transition-all duration-300 transform hover:bg-[#1E90D8] hover:text-white hover:scale-110"
    >
      <Facebook className="w-5 h-5" />
    </Link>
    <Link
      href="https://twitter.com"
      className="bg-white text-[#29A0D8] p-2 rounded-full transition-all duration-300 transform hover:bg-[#1E90D8] hover:text-white hover:scale-110"
    >
      <Twitter className="w-5 h-5" />
    </Link>
    <Link
      href="https://instagram.com"
      className="bg-white text-[#29A0D8] p-2 rounded-full transition-all duration-300 transform hover:bg-[#1E90D8] hover:text-white hover:scale-110"
    >
      <Instagram className="w-5 h-5" />
    </Link>
    <Link
      href="https://linkedin.com"
      className="bg-white text-[#29A0D8] p-2 rounded-full transition-all duration-300 transform hover:bg-[#1E90D8] hover:text-white hover:scale-110"
    >
      <Linkedin className="w-5 h-5" />
    </Link>
    <Link
      href="https://youtube.com"
      className="bg-white text-[#29A0D8] p-2 rounded-full transition-all duration-300 transform hover:bg-[#1E90D8] hover:text-white hover:scale-110"
    >
      <Youtube className="w-5 h-5" />
    </Link>
  </div>
</div>

        
          </div>
        </div>
      </div>

      <div className="bg-[#fff] text-center">
        <p className="text-[#1E90D8] py-1 text-xs">© nstHr Pvt. Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
