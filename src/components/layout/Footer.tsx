import React from 'react';
import { Compass, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Compass className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">TrekSnout</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Jacksonville's premier dog adventures that train while they play. 
              Purpose-filled outings tailored to your dog's unique needs.
            </p>
            <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
              Book Free Assessment
            </button>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>High-Drive Missions</li>
              <li>Hunt & Track Adventures</li>
              <li>Traditional Walks</li>
              <li>Gentle Explorations</li>
              <li>All-Day Boarding</li>
              <li>Vet Transportation</li>
              <li>Behavior Programs</li>
              <li>Adoption Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(904) XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@treksnout.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Jacksonville, FL</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2025 TrekSnout. All rights reserved. Fully licensed and insured.</p>
        </div>
      </div>
    </footer>
  );
}